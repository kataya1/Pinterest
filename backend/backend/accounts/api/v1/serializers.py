from rest_framework import serializers
from rest_framework.utils import field_mapping
from accounts.models import User as au
from pins.models import Board , Pin , Save

User = au

class UserSignUpSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['email', 'username', 'password', 'password_confirm']
        extra_kwargs = {'password': {'write_only': True}} 

    def save(self, **kwargs):
        if self.validated_data.get('password') != self.validated_data.get('password_confirm'):
            raise serializers.ValidationError(
                {
                    'password': "The two Password field you entered doesn't match"
                }
            )

        user = User(
            email=self.validated_data.get('email'),
            username=self.validated_data.get('username')
        )

        user.set_password(self.validated_data.get('password'))

        user.save()

        return user

class UserSerializer(serializers.ModelSerializer):
    # finally 😭💃  ~kataya
    followers = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = User
        exclude = ['password']
        

#
#  arafa - sahar
#


class UserProfile(serializers.ModelSerializer):
    class Meta:
        model = au
        fields = ('username','first_name','last_name','avatar','following','saved_pins')

class UserBoardPin(serializers.ModelSerializer):
    class Meta:
        model = Pin
        fields = ('image',)

class UserBoard(serializers.ModelSerializer):
    pins=UserBoardPin(many=True)
    class Meta:
        model = Board
        fields = '__all__'

class SavedPins(serializers.ModelSerializer):
    # pin = UserBoardPin(many=True)
    class Meta:
        model = Pin
        fields = ('image','description','created_at','creator')

class Saved_Pins(serializers.ModelSerializer):
     saved_pins=SavedPins(many=True)
     class Meta:
        model = au
        fields = ('saved_pins',)

# class UserChangePasswordSerializer()