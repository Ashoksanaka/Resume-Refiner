from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('send-otp/', views.send_email_verification, name='send_email_verification'), # Renamed path
    path('verify-otp/', views.verify_email_otp, name='verify_email_otp'), # Renamed path
    path('login/', views.login_user, name='login_user'),
]