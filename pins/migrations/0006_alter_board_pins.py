# Generated by Django 3.2.9 on 2021-12-05 13:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pins', '0005_auto_20211124_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='board',
            name='pins',
            field=models.ManyToManyField(blank=True, null=True, related_name='boards', to='pins.Pin'),
        ),
    ]
