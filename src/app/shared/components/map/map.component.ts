import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  center: google.maps.LatLngLiteral;
  zoom: number = 17;
  mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.HYBRID;
  myPosition!: google.maps.LatLngLiteral;
  myMarkerOptions: google.maps.MarkerOptions;
  arrPositions: google.maps.LatLng[] = [];

  constructor() {
    this.center = {
      lat: 39.452887,
      lng: -0.360415,
    };
    this.myMarkerOptions = {
      /* 
            animation: google.maps.Animation.BOUNCE, // Animación del marcador (puedes usar DROP en lugar de BOUNCE)
            draggable: true, // Permite arrastrar el marcador
            icon: 'path/to/custom/icon.png', // Ruta a una imagen personalizada para el icono del marcador
            label: 'A', // Etiqueta del marcador (puede ser un carácter o una cadena)
            title: 'Mi Marcador', // Título del marcador que se muestra al pasar el ratón sobre él
            opacity: 0.7, // Opacidad del marcador (valor entre 0 y 1)
            visible: true, // Indica si el marcador es visible
            zIndex: 100, // Índice de apilamiento del marcador
            // Más opciones específicas del marcador: https://developers.google.com/maps/documentation/javascript/markers#marker_options
         */
    }
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.myPosition = { ...this.center }
    })
  }

  onMapClick($event: google.maps.MapMouseEvent) {
    if ($event.latLng) {
      this.arrPositions.push($event.latLng);
    }
  }

  onMarkerClick($event: google.maps.MapMouseEvent, index: number) {
    this.arrPositions.splice(index, 1)
  }


}

