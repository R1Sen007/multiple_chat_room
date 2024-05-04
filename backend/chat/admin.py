from django.contrib import admin
from chat.models import (
    Room,
    Message,
)


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    """Rooms info"""


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    """Messages info"""
