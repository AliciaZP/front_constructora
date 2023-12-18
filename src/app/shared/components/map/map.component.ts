import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  center: google.maps.LatLngLiteral;
  zoom: number = 5;
  mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.HYBRID;
  myPosition!: google.maps.LatLngLiteral;
  myMarkerOptions: google.maps.MarkerOptions;
  markerPositionClicked: google.maps.LatLng;
  arrPositions: google.maps.LatLng[] = [];

  constructor() {
    this.center = {
      lat: 39.452887,
      lng: -0.360415,
    };
    this.myMarkerOptions = {
      animation: google.maps.Animation.BOUNCE,
      draggable: true,
    }
    this.markerPositionClicked = new google.maps.LatLng(39.452887, -0.360415)
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

