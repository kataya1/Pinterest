from django.urls import path
from .views import  home, create_pin, save_pin,history, delete_history, api_status
app_name="pins"
urlpatterns = [
    path('home/', home, name='home'),
    path('pin/create/', create_pin, name='create'),
    path('pin/save/', save_pin, name='save'),
    path('profile/history/', history, name='history'),
    path('profile/history/<int:id>', delete_history, name='delete_history'),
     path('api_status/', api_status, name="status"),
]
