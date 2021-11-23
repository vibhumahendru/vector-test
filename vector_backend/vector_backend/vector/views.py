from rest_framework import viewsets
from .serializers import ItemSerializer
from vector.models import Items
from rest_framework.response import Response

# Create your views here.
class ItemViewset(viewsets.ModelViewSet):

    serializer_class = ItemSerializer

    def get_queryset(self):
        return Items.objects.all().order_by('position')

    def set_new_positions(self,request):
        for item in request.data:
            i = Items.objects.get(id=item['id'])
            i.position = item['position']
            i.save()

            serializer = self.get_serializer(Items.objects.first())


        return Response(serializer.data)
