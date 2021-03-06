"""vector_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from django.conf.urls import include, url
from vector.views import ItemViewset

item_router = routers.DefaultRouter()
item_router.register(r'', ItemViewset, basename='items')

set_new_positions = ItemViewset.as_view({'post': 'set_new_positions'})

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^items/', include(item_router.urls)),
    url(r'^set_new_positions/', set_new_positions),
]
