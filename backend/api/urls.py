from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.categories_list, name='categories-list'),
    path('categories/<str:category_id>/', views.category_detail, name='category-detail'),
    path('businesses/', views.businesses_list, name='businesses-list'),
    path('businesses/<str:business_id>/', views.business_detail, name='business-detail'),
    path('contact/', views.contact_submit, name='contact-submit'),
]
