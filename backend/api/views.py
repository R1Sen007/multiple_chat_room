from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

from api.serializers import (
    RoomSerializer,
    MessageSerializer,
)
from api.filters import MessageFilter
from chat.models import (
    Room,
    Message,
)


class RoomReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer
    pagination_class = LimitOffsetPagination
    # permission_classes = [IsAuthenticated]


class MessageReadOnlyModelViewSet(ReadOnlyModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
    pagination_class = LimitOffsetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_class = MessageFilter
    # permission_classes = [IsAuthenticated]
