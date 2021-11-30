from typing import Tuple
from django.views.generic.base import RedirectView
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework import status
from pins.models import Pin, Save, History
from accounts.models import User
from .serializers import PinSerializer, PinCreateSerializer, UserAvatarSerializer, PinSaveSerializer, HistoryPostSerializer, HistoryGetSerializer
from rest_framework.permissions import IsAuthenticated

@api_view(['GET'])
def home(request):
    pins = Pin.objects.all().order_by("-created_at")
    serializer = PinSerializer(pins, many=True)

    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['GET','POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def create_pin(request):
    if request.method == 'GET':
        user = request.user
        seralizer = UserAvatarSerializer(instance=user)
        return Response(data=seralizer.data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        data = {
            'title': request.data.get('title'),
            'description': request.data.get('description'),
            'image': request.data.get('image'),
            'creator': request.user.id,
            'website': request.data.get('website'),
        }
        new_pin = PinCreateSerializer(data=data)
        if new_pin.is_valid():
            new_pin.save()
            return Response(new_pin.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=new_pin.errors)

@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def save_pin(request):

    if request.method == 'POST':
        data = {
            'pin': request.data.get('pin'),
            'user': request.user.id,
        }
        saved_pin = PinSaveSerializer(data=data)
        if saved_pin.is_valid():
            saved_pin.save()
            return Response(saved_pin.data, status=status.HTTP_201_CREATED)
        else:
            return Response(data=saved_pin.errors)


@api_view(["POST", "GET"])
@permission_classes([IsAuthenticated])
def history(request):
    if request.method == "POST":
        user = request.user.id
        pin = request.data.get('pin')
        print(user, pin)
        ser_pin = HistoryPostSerializer(data={'user': user, 'pin': pin})
        if ser_pin.is_valid():
            ser_pin.save()
        else:
            return Response(data=ser_pin.errors)
        return Response(data=ser_pin.data, status=status.HTTP_201_CREATED)
    else:
        history_pins = History.objects.filter(user=request.user.id)
        ser_pin = HistoryGetSerializer(instance=history_pins, many=True)
        return Response(data=ser_pin.data, status=status.HTTP_200_OK)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_history(request, **kwargs):
    if request.method == "DELETE":
        id = kwargs.get('id')
        History.objects.filter(pk=id).delete()
        return Response({'msg':"Pin Deleted From History"}, status=status.HTTP_201_CREATED)
