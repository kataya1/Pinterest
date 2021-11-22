from django.db import models
from django.contrib.auth.models import AbstractUser
from pins.models import Topic


class User(AbstractUser):
    
    date_of_birth = models.DateField(null=True, blank=True)
    business = models.BooleanField(default=False)
    country = models.CharField(max_length=50, null=True, blank=True)
    gender = models.CharField(
        choices=(('male', 'm'), ('female', 'f')), max_length=50, default="male")
    avatar = models.ImageField(
        upload_to="profilePic/%y/%m/%d", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    interest = models.ManyToManyField(Topic,  blank=True)

    # need to change the following followers it's not working the way it should
    # check this https://stackoverflow.com/a/58799650/11101594
    following = models.ManyToManyField( 'self', related_name='followers', blank=True, symmetrical=False)
    
    def __str__(self):
        return self.username


# 