from django.contrib import admin
from .models import DriverWallet, PaymentMethod, UserWallet

admin.site.register(PaymentMethod)
admin.site.register(UserWallet)
admin.site.register(DriverWallet)

# Register your models here.
