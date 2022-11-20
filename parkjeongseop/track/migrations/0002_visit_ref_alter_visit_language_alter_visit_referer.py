# Generated by Django 4.1.3 on 2022-11-20 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("track", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="visit",
            name="ref",
            field=models.CharField(default=None, max_length=500, verbose_name="Ref값"),
        ),
        migrations.AlterField(
            model_name="visit",
            name="language",
            field=models.CharField(max_length=200, verbose_name="브라우저 언어"),
        ),
        migrations.AlterField(
            model_name="visit",
            name="referer",
            field=models.CharField(max_length=500, verbose_name="이전페이지"),
        ),
    ]