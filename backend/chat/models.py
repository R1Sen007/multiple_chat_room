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
        verbose_name='Название чата',
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'


class Messages(models.Model):
    text = models.TextField(blank=True, null=True)
    data = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата добавления',
    )

    class Meta:
        ordering = ('-pub_date',)
        verbose_name = 'Сообщение'
        verbose_name_plural = 'Сообщения'
