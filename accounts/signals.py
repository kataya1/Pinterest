from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from accounts.models import User
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=User)
def User_created_handler(sender, instance, created, **kwargs):
    if created:
        Token.objects.create(user=instance)