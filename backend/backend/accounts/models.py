from django.db import models

from django.contrib.auth.models import AbstractUser
from pins.models import Topic


class User(AbstractUser):
    
    date_of_birth = models.DateField(null=True)
    business = models.BooleanField(default=False)
    country = models.CharField(max_length=50, null=True)
    gender = models.CharField(
        choices=(('male', 'm'), ('female', 'f')), max_length=50, default="male")
    avatar = models.ImageField(
        upload_to="profilePic/%y/%m/%d", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    # add interset as many to many field
    # circular import
    interest = models.ManyToManyField(Topic)

    # first issue
    following = models.ManyToManyField(
        'self', related_name='followers', blank=True)

    def __str__(self):
        return self.username
