import json

from channels.generic.websocket import AsyncWebsocketConsumer
from channels.db import database_sync_to_async
from django.utils import timezone

from chat.models import Room, Message


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        await database_sync_to_async(self.get_room)(self.room_name)
        if self.scope['user'].is_anonymous:
            self.close(reason='Not authenticated user')
        else:
            if self.current_room:
                self.room_group_name = 'chat_%s' % self.room_name
                await self.channel_layer.group_add(
                    self.room_group_name,
                    self.channel_name
                )
                await self.accept()
            else:
                self.close(reason='Not exitsting room')

    async def disconnect(self, close_code):
        if hasattr(self, 'room_group_name'):
            message = f'----user[{self.scope["user"].username}] left the chat----'
            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': message,
                    'sender': '*SYSTEM*',
                }
            )
            await self.channel_layer.group_discard(
                self.room_group_name,
                self.channel_name
            )
        else:
            message = ('ERROR: not exitsting room'
                       if not self.scope['user'].is_anonymous
                       else 'ERROR: not authenticated user')
            await self.channel_layer.send(self.channel_name, {
                'type': 'chat.message',
                'text': message,
            })

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']

        await database_sync_to_async(self.save_message)(message)

        sender = self.scope['user'].username
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender': sender,
            }
        )

    async def chat_message(self, event):
        username = event['sender']
        message = event['message']
        time_mark = str(timezone.now())
        await self.send(text_data=json.dumps({
            'username': username,
            'message': message,
            'time_mark': time_mark,
        }))

    def get_room(self, name):
        self.current_room = Room.objects.filter(name=name).first()

    def save_message(self, message):
        message = Message.objects.create(
            text=message,
            sender=self.scope['user'],
            room=self.current_room,
        )
        message.save()
