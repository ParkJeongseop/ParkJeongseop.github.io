# Generated by Django 4.1.3 on 2022-11-20 09:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="RefCode",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("code", models.CharField(max_length=10, verbose_name="코드")),
                ("description", models.CharField(max_length=200, verbose_name="설명")),
            ],
        ),
        migrations.CreateModel(
            name="Visit",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "visited_date",
                    models.DateTimeField(auto_now_add=True, verbose_name="접속 일시"),
                ),
                ("url", models.URLField(verbose_name="접속 URL")),
                ("ip_address", models.GenericIPAddressField(verbose_name="IP주소")),
                ("memo", models.CharField(max_length=200, verbose_name="메모")),
                ("http_header", models.TextField(verbose_name="HTTP헤더")),
                ("whois", models.TextField(verbose_name="WHOIS 결과값")),
                ("ip_api", models.TextField(verbose_name="IP-API 결과값")),
                (
                    "location_from_mylocation",
                    models.TextField(verbose_name="위치 from mylocation.co.kr"),
                ),
                ("device", models.CharField(max_length=200, verbose_name="기기")),
                ("os", models.CharField(max_length=200, verbose_name="운영체제")),
                ("browser", models.CharField(max_length=200, verbose_name="웹브라우저")),
                ("referer", models.CharField(max_length=500, verbose_name="Referer")),
                ("language", models.CharField(max_length=200, verbose_name="언어")),
                ("isp", models.CharField(max_length=200, verbose_name="ISP")),
                ("org", models.CharField(max_length=200, verbose_name="ORG")),
                ("country", models.CharField(max_length=200, verbose_name="국가")),
                ("region", models.CharField(max_length=200, verbose_name="지역")),
                ("city", models.CharField(max_length=200, verbose_name="도시")),
                ("screen_size", models.CharField(max_length=200, verbose_name="화면크기")),
            ],
        ),
    ]
