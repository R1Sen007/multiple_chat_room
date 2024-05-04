from rest_framework.serializers import (
    ModelSerializer,
)

from chat.models import (
    Room,
    Message,
    User,
)


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class RoomSerializer(ModelSerializer):
    class Meta:
        model = Room
        fields = ('name',)


class MessageSerializer(ModelSerializer):
    sender = UserSerializer()

    class Meta:
        model = Message
        fields = '__all__'
