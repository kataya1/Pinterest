# Generated by Django 3.2.9 on 2021-12-05 13:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0006_alter_board_pins'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='visibility',
            field=models.BooleanField(default=True),
        ),
    ]