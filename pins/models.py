from typing import Tuple
from django.db import models
from django.db.models.base import Model
from django.db.models.deletion import SET, SET_NULL, CASCADE

from django.db.models.fields import TextField
from django.db.models.fields.related import ForeignKey
from backend import settings
# # Create your models here.
from backend.settings import AUTH_PASSWORD_VALIDATORS, AUTH_USER_MODEL

# # class Follow(models.Model):
# #     follower = models.ForeignKey(
# #         User, on_delete=SET_NULL, null=True, related_name="user_followers")
# #     followed = models.ForeignKey(
# #         User, on_delete=SET_NULL, null=True, related_name="user_following")

# #     class Meta:
# #         unique_together = (('follower', 'followed'),)


class Pin(models.Model):
    image = models.ImageField(upload_to="pins/%y/%m/%d", null=True, blank=True)
    video = models.FileField(upload_to="video/%y/%m/%d", null=True, blank=True)
    title = models.CharField(max_length=50)
    description = models.CharField("Description", max_length=255, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    website = models.CharField(max_length=100, null=True, blank=True)
    creator = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.PROTECT, null=True)
    # react is a list of people so it should be reactees or reacted_on_by
    reactees = models.ManyToManyField(AUTH_USER_MODEL, related_name="reacted_on", blank=True)
    topics = models.ManyToManyField('Topic', related_name='pins',blank=True)
    # saved_by = models.ManyToManyField(AUTH_USER_MODEL, through="Save", related_name="saved_pins")
    seen_by = models.ManyToManyField(AUTH_USER_MODEL, through="History", related_name="seen_pins")

    def __str__(self):
        return self.title


class Board(models.Model):
    name = models.CharField(max_length=50)
    visibility = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(
        AUTH_USER_MODEL, on_delete=models.PROTECT)
    pins = models.ManyToManyField('Pin', related_name="boards",blank=True,null=True)

    def __str__(self):
        return self.name

# # an intermediate table for a manytomany relationship is dono by through.~kataya
# class Save(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL,
#                              on_delete=models.PROTECT)
#     pin = models.ForeignKey(Pin, on_delete=models.PROTECT)
#     time = models.DateTimeField(auto_now_add=True)
    ## you can't have manytomanyfields in a unique together src= https://docs.djangoproject.com/en/3.2/ref/models/options/
#     class Meta:
#         unique_together = (('user', 'pin'),)

class Save(models.Model):
    pin = models.ForeignKey('Pin', on_delete=models.CASCADE )
    user = models.ForeignKey(AUTH_USER_MODEL, on_delete=models.CASCADE)
    saved_at = models.DateField(auto_now_add=True)

    class Meta:
        unique_together = (('user', 'pin'),)
        ordering=['-saved_at']

# # same thing here an intermedite table is done through a through ~kataya
class History(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    pin = models.ForeignKey(Pin, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('user', 'pin'),)
        ordering = ['-time']

    # you can't have manytomanyfields in a unique together src= https://docs.djangoproject.com/en/3.2/ref/models/options/
    # class Meta:
    #     unique_together = (('user', 'pin', 'time'),)


class Topic(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to="topics/%y/%m/%d", null=True, blank=True)


    def __str__(self):
        return self.name


# # could be many to many relation in either User or Topic model.
# # class InterstedInTopic(models.Model):
# #     user = models.ForeignKey(userm.User, on_delete=SET_NULL, null=True)
# #     topic = models.ForeignKey(Topic, on_delete=SET_NULL, null=True)

# #     class Meta:
# #         unique_together = (('user', 'topic'),)


# # could be many to many relation in either Pin or Topic model.
# # class PinInTopic(models.Model):
# #     topic = models.ForeignKey(Topic, on_delete=SET_NULL, null=True)
# #     pin = models.ForeignKey(Pin, on_delete=SET_NULL, null=True)

# #     class Meta:
# #         unique_together = (('pin', 'topic'),)


class Comment(models.Model):
    pin = models.ForeignKey(Pin, on_delete=SET_NULL, null=True)
    creator = models.ForeignKey(AUTH_USER_MODEL, on_delete=SET_NULL, null=True)
    content = models.TextField()
    time = models.DateTimeField(auto_now_add=True)
    reactee = models.ManyToManyField(AUTH_USER_MODEL, related_name="reacted_on_comments")

# # second issue to ask mina

# # hmmmmmmm..... ~kataya
class Reply(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=SET_NULL, null=True)
                            #  should be cascade here
    comment = models.ForeignKey(Comment, on_delete=CASCADE, null=True)
    content = models.TextField()
    time = models.DateTimeField(auto_now_add=True)


# # could be many to many relation in either User or Comment model.
# # class CommentReact(models.Model):
# #     user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
# #     comment = models.ForeignKey(Comment, on_delete=SET_NULL, null=True)
# #     time = models.DateTimeField()


class Message(models.Model):
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=SET_NULL, null=True, related_name="sent_messages")
    recevier = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=SET_NULL, null=True, related_name="received_messages")
    content = models.TextField()

    time = models.DateTimeField()
