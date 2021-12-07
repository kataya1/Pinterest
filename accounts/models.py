from django.db import models
from django.contrib.auth.models import AbstractUser
from pins.models import Topic, Pin, Save


class User(AbstractUser):
    
    date_of_birth = models.DateField(null=True, blank=True)
    business = models.BooleanField(default=False)
    country = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(
        choices=(('male', 'm'), ('female', 'f')), max_length=50, default="male")
    avatar = models.ImageField(
        upload_to="profilePic/%y/%m/%d", null=True, blank=True, default= "profilePic/defaultuser.png")
    bio = models.TextField(null=True, blank=True)

    interest = models.ManyToManyField(Topic,  blank=True)
    saved_pins = models.ManyToManyField(Pin, through=Save, related_name="saved_by", blank=True)

    
    following = models.ManyToManyField( 'self', related_name='followers', blank=True, symmetrical=False)
    
    def __str__(self):
        return self.username


# 