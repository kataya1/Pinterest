from rest_framework.authtoken.views import obtain_auth_token
from django.urls import path
from . import views
from .views import list_user , list_board , list_pin , list_savedpin

app_name="account=v1"
urlpatterns = [
    path('get-token', obtain_auth_token), #dublicate
    path('example', views.example_view), #done
    path('signup', views.sign_up), #done

    path('login', obtain_auth_token, name='login'), #done
    path('logout', views.log_out, name="logout" ), #done
    path('profile', views.profile, name='profile'), #done
    path('profile/delete', views.delete_profile, name='delete_profile'), #done
    path('profile/update', views.update_profile, name='update_profile'),

    path('users', views.list_users), #done
    path('users/create', views.sign_up), #dublicate
    path('users/<int:user_id>', views.get_user, name="get_user"), #done
    path('users/<int:user_id>/delete', views.delete_user, name="delete_user"), #done
    path('users/<int:user_id>/update', views.update_user, name="update_user"),
    
    #
    # arafar -sahar
    #

    path('list/<int:id>',list_user,name='get-data'),
    path('board/<int:id>',list_board,name='get-board'),
    path('pin/<int:id>',list_pin,name='get-pin'),
    path('save/<int:id>',list_savedpin,name='get-savedpin'),



    #
    # Moaaz kholoud
    #

    


]
