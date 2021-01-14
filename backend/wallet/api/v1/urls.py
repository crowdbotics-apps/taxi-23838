from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DriverWalletViewSet, PaymentMethodViewSet, UserWalletViewSet

router = DefaultRouter()
router.register("paymentmethod", PaymentMethodViewSet)
router.register("userwallet", UserWalletViewSet)
router.register("driverwallet", DriverWalletViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
