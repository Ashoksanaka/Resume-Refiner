from django.urls import path
from .views import user_dashboard

urlpatterns = [
    path('<str:username>/dashboard/', user_dashboard, name='user_dashboard_by_username'),
]
