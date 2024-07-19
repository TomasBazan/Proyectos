from django.urls import path
from . import views

urlpatterns = [
    path("", views.hello),
    path("about/", views.about),
    path("hello/<str:name>/<int:age>", views.hello),
]
