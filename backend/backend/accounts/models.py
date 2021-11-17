from django.db import models
from django.contrib.auth.models import AbstractUser
from pins.models import Topic


class User(AbstractUser):
    dateOfBirth = models.DateField(null=True)
    # delete active
    # active = models.BooleanField(default=True)
    business = models.BooleanField(default=False)
    country = models.CharField(max_length=50, null=True)
    gender = models.CharField(
        choices=(('male', 'm'), ('female', 'f')), max_length=50, default="male")
    # d will be lowercase
    avatar = models.ImageField(
        upload_to="profilePic/%y/%m/%d", null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    # add interset as many to many field
    interest = models.ManyToManyField(Topic)
    # first issue
    followers = models.ManyToManyField(
        'self', related_name='follower', blank=True)

    def __str__(self):
        return self.username
