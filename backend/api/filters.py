from django_filters import FilterSet
from django_filters.filters import CharFilter

from chat.models import Message


class MessageFilter(FilterSet):
    room = CharFilter(field_name='room__name')

    class Meta:
        model = Message
        fields = ['room',]
