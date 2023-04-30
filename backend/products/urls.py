from .views import ProductsListView, ProductDetailsView
from django.urls import path, include


urlpatterns = [
    path("products", ProductsListView.as_view()),
    path("product/<slug:slug>", ProductDetailsView.as_view()),
]
