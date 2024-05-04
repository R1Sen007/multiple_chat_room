from django.urls import path, include
from rest_framework.routers import DefaultRouter

from api.views import (
    RoomReadOnlyModelViewSet,
    MessageReadOnlyModelViewSet,
)


router = DefaultRouter()

router.register('rooms', RoomReadOnlyModelViewSet, basename='room')
router.register('messages', MessageReadOnlyModelViewSet, basename='message')


urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
