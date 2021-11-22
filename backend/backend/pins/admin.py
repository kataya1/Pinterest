from django.contrib import admin
from .models import Board, Pin, Topic, Comment, Reply, Save


# Register your models here.
admin.site.register(Pin)
admin.site.register(Board)
admin.site.register(Topic)
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(Save)
