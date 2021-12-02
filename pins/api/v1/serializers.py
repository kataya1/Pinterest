from rest_framework import serializers
from pins.models import Pin, Save, History
from accounts.models import User
class UserAvatarSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username', 'avatar')

class PinSerializer(serializers.ModelSerializer):
    creator = UserAvatarSerializer()
    class Meta:
        model = Pin
        fields = '__all__'


class PinCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pin
        fields = '__all__'
class PinSaveSerializer(serializers.ModelSerializer):

    class Meta:
        model = Save
        fields = '__all__'


class HistoryPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = '__all__'


class HistoryGetSerializer(serializers.ModelSerializer):
    pin = PinSerializer()

    class Meta:
        model = History
        fields = '__all__'
