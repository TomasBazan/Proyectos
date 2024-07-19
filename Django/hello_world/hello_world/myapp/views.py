from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def hello(request, name, age):
    return HttpResponse("<h1>Hello %s with age %i<h1>" % (name, age))


def about(request):
    return HttpResponse("pepe")
