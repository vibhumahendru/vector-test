from vector.models import Items
from rest_framework import serializers

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Items
        fields = '__all__'
