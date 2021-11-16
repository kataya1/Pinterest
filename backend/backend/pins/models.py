from typing import Tuple
from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import SET, SET_NULL
# from accounts.models import User
from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey
from pinterest_models import settings
# Create your models here.


# class Follow(models.Model):
#     follower = models.ForeignKey(
#         User, on_delete=SET_NULL, null=True, related_name="user_followers")
#     followed = models.ForeignKey(
#         User, on_delete=SET_NULL, null=True, related_name="user_following")

#     class Meta:
#         unique_together = (('follower', 'followed'),)


class Pin(models.Model):
    image = models.ImageField(upload_to="pins/%y/%m/%d", null=True, blank=True)
    video = models.FileField(upload_to="video/%y/%m/%d", null=True, blank=True)
    title = models.CharField(max_length=50)
    description = models.CharField(
        "Description", max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    website = models.CharField(max_length=100, null=True, blank=True)
    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True)
    react = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="+")
    topics = models.ManyToManyField('Topic')

    def __str__(self):
        return self.title


class Board(models.Model):
    name = models.CharField(max_length=50)
    visibility = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    # image = models.ImageField(
    #     upload_to="boards/%Y/%m/%D", null=True, blank=True)
    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
    pins = models.ManyToManyField('Pin')

    def __str__(self):
        return self.name


class Save(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.PROTECT)
    pin = models.ForeignKey(Pin, on_delete=models.PROTECT)
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('user', 'pin'),)


class History(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.PROTECT)
    pin = models.ForeignKey(Pin, on_delete=models.PROTECT)
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('user', 'pin', 'time'),)


class Topic(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to="topics/%y/%m/%d", null=True, blank=True)
    # must be in pin model
    # pins = models.ManyToManyField(Pin)

    def __str__(self):
        return self.name


# could be many to many relation in either User or Topic model.
# class InterstedInTopic(models.Model):
#     user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
#     topic = models.ForeignKey(Topic, on_delete=SET_NULL, null=True)

#     class Meta:
#         unique_together = (('user', 'topic'),)


# could be many to many relation in either Pin or Topic model.
# class PinInTopic(models.Model):
#     topic = models.ForeignKey(Topic, on_delete=SET_NULL, null=True)
#     pin = models.ForeignKey(Pin, on_delete=SET_NULL, null=True)

#     class Meta:
#         unique_together = (('pin', 'topic'),)


class Comment(models.Model):
    pin = models.ForeignKey(Pin, on_delete=SET_NULL, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=SET_NULL, null=True)
    content = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    react = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="+")

# second issue to ask mina


class Reply(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=SET_NULL, null=True)
    comment = models.ForeignKey(Comment, on_delete=SET_NULL, null=True)
    content = models.TextField()
    time = models.DateTimeField(auto_now_add=True)


# could be many to many relation in either User or Comment model.
# class CommentReact(models.Model):
#     user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
#     comment = models.ForeignKey(Comment, on_delete=SET_NULL, null=True)
#     time = models.DateTimeField()


class Message(models.Model):
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=SET_NULL, null=True, related_name="sender")
    recevier = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=SET_NULL, null=True, related_name="recevier")
    content = models.TextField()

    time = models.DateTimeField()
