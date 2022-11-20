from django.db import models

# Create your models here.
class Visit(models.Model):
    visited_date = models.DateTimeField(auto_now_add=True, verbose_name='접속 일시')
    url = models.URLField(verbose_name='접속 URL')
    ip_address = models.GenericIPAddressField(verbose_name='IP주소') # http_header
    ref = models.CharField(max_length=500, default=None, verbose_name='Ref값') # url parameter
    memo = models.CharField(max_length=200, verbose_name='메모')
    http_header = models.TextField(verbose_name='HTTP헤더')
    whois = models.TextField(verbose_name='WHOIS 결과값')
    ip_api = models.TextField(verbose_name='IP-API 결과값')
    location_from_mylocation = models.TextField(verbose_name='위치 from mylocation.co.kr')

    device = models.CharField(max_length=200, verbose_name='기기') # http_header
    os = models.CharField(max_length=200, verbose_name='운영체제') # http_header
    browser = models.CharField(max_length=200, verbose_name='웹브라우저') # http_header
    referer = models.CharField(max_length=500, verbose_name='이전페이지') # http_header
    language = models.CharField(max_length=200, verbose_name='브라우저 언어') # http_header https://velog.io/@emrrbs9090/Django-Request-Header-%ED%99%9C%EC%9A%A9-2-%ED%81%B4%EB%9D%BC%EC%9D%B4%EC%96%B8%ED%8A%B8-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EC%96%B8%EC%96%B4-%ED%83%90%EC%83%89

    isp = models.CharField(max_length=200, verbose_name='ISP') # ip-api
    org = models.CharField(max_length=200, verbose_name='ORG') # ip-api
    country = models.CharField(max_length=200, verbose_name='국가') # ip-api
    region = models.CharField(max_length=200, verbose_name='지역') # ip-api
    city = models.CharField(max_length=200, verbose_name='도시') # ip-api

    screen_size = models.CharField(max_length=200, verbose_name='화면크기') # javascript
    # timezone  from javascript


class RefCode(models.Model):
    code = models.CharField(max_length=10, verbose_name='코드')
    description = models.CharField(max_length=200, verbose_name='설명')