from django.contrib import admin
from .models import Document, DriverProfile, InviteCode, Notification, UserProfile

admin.site.register(DriverProfile)
admin.site.register(Document)
admin.site.register(UserProfile)
admin.site.register(InviteCode)
admin.site.register(Notification)

# Register your models here.
