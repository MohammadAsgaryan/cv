from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'index.html')  # بعداً قالب HTML خودت رو میاری