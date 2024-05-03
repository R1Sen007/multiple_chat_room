import os

from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter

import chat.routing
from backend.utils import QueryAuthMiddleware


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': QueryAuthMiddleware(
        URLRouter(
            chat.routing.websocket_urlpatterns
        )
    )
})
