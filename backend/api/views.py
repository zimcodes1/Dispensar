from django.http import HttpResponse

def Hello(request):
    return HttpResponse("Hello, world!")
    