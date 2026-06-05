from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from typing import Dict
import json

router = APIRouter()

class ConnectionManager:
    def __init__(self):
        # Lưu trữ WebSocket connection theo username
        self.active_connections: Dict[str, WebSocket] = {}

    async def connect(self, websocket: WebSocket, username: str):
        await websocket.accept()
        self.active_connections[username] = websocket
        
        # Báo cho người kia biết mình vừa online (ví dụ: ngocanhdangiu báo cho omachi)
        partner = "omachi" if username == "ngocanhdangiu" else "ngocanhdangiu"
        await self.send_personal_message(json.dumps({"type": "status", "status": "online", "user": username}), partner)

    def disconnect(self, username: str):
        if username in self.active_connections:
            del self.active_connections[username]

    async def send_personal_message(self, message: str, username: str):
        if username in self.active_connections:
            await self.active_connections[username].send_text(message)

manager = ConnectionManager()

@router.websocket("/{username}")
async def websocket_endpoint(websocket: WebSocket, username: str):
    await manager.connect(websocket, username)
    try:
        while True:
            data = await websocket.receive_text()
            message_data = json.loads(data)
            
            # Phân loại event: 'poke', 'sync_music', 'flower_watered'
            event_type = message_data.get("type")
            partner = "omachi" if username == "ngocanhdangiu" else "ngocanhdangiu"
            
            if event_type == "poke":
                await manager.send_personal_message(json.dumps({"type": "poke", "from": username}), partner)
            elif event_type == "sync_music":
                await manager.send_personal_message(json.dumps({"type": "sync_music", "from": username, "track": message_data.get("track")}), partner)
            elif event_type == "flower_watered":
                await manager.send_personal_message(json.dumps({"type": "flower_watered", "from": username}), partner)
            elif event_type == "sync_text":
                # Đồng bộ text theo thời gian thực cho Sàn đấu Viết Luận
                await manager.send_personal_message(json.dumps({
                    "type": "sync_text",
                    "from": username,
                    "text": message_data.get("text"),
                    "section": message_data.get("section") # e.g. "intro_body1" or "body2_conclusion"
                }), partner)
            elif event_type == "pass_turn":
                # Chuyển lượt viết
                await manager.send_personal_message(json.dumps({
                    "type": "pass_turn",
                    "from": username
                }), partner)
                
    except WebSocketDisconnect:
        manager.disconnect(username)
        partner = "omachi" if username == "ngocanhdangiu" else "ngocanhdangiu"
        await manager.send_personal_message(json.dumps({"type": "status", "status": "offline", "user": username}), partner)
