from django.contrib import admin
from django.urls import include, path
# lista de rutas a las que busco, en la otra app tengo una sub lista de rutas
urlpatterns = [
    path("polls/", include("polls.urls")),
    path("admin/", admin.site.urls),
]
