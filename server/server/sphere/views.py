from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import HttpResponse, HttpResponseNotFound 

from MontyCarlo.geometry.CSG import *
from MontyCarlo.sources import *
from MontyCarlo import *
from MontyCarlo.plotter import Plotter

from config.settings import air, gold, water


class SphereView(APIView):

    def get(self, request, *args, **kwargs):
        import pyvista
        pyvista.start_xvfb()
        with InfiniteVolume() as outer:
            outer.configure("GET_SPHERE_INFINITE_VOLUME", render=False)
            outer.fill(gold)

            with Sphere(300) as outer_sphere:
                outer_sphere in outer
                outer_sphere.configure("GET_SPHERE_OUTER_SPHERE", render=True)
                outer_sphere.fill(water)

                with Sphere(50) as inner_sphere:
                    inner_sphere in outer_sphere
                    inner_sphere.configure(
                        "GET_SPHERE_INNER_SPHERE", render=True)
                    inner_sphere.fill(gold)

        photon_beam = Beam(
            "photon",       # kind of particle
            inner_sphere,   # initial volume
            E=50e6,       # initial eneryg in eV
            N=50,           # number of particles in the source, careful with this number, might break your run and fill your ram
            pos=(0, 0, 0)  # initial position
        )
        
        plotter = Plotter(photon_beam)
        fig = plotter.new_plot()
        
        plotter.add_geometry(fig, outer) # this adds all of geometries

        
        from config.settings import BASE_DIR
        file_name = 'plot.gltf'
        file_location = str(BASE_DIR/file_name) 
        fig.export_gltf(file_location)

        try:    
            with open(file_location, 'r') as f:
                file_data = f.read()

                # sending response 
                response = HttpResponse(file_data, content_type='application/vnd.ms-excel')
                response['Content-Disposition'] = f'attachment; filename="{file_name}"'

        except IOError:
            # handle file not exist case here
            response = HttpResponseNotFound('<h1>File not exist</h1>')

        return response




        return Response("hi")
