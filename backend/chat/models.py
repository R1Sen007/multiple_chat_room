from django.contrib.auth import get_user_model
from django.db import models

from chat.constants import (
    MAX_CHAT_NAME,
)

User = get_user_model()


class Room(models.Model):
    """Room`s model."""

    name = models.CharField(
        max_length=MAX_CHAT_NAME,
        unique=True,
        blank=False,
        verbose_name='Название чата',
    )

    class Meta:
        ordering = ('name',)
        verbose_name = 'Комната'
        verbose_name_plural = 'Комнаты'


class Message(models.Model):
    """Message`s model."""

    text = models.TextField(
        blank=True,
        null=True,
        verbose_name='Текст сообщения',
    )
    pub_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата добавления',
    )
    sender = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='messages'
    )
    room = models.ForeignKey(
        Room,
        on_delete=models.CASCADE,
        related_name='messages',
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
