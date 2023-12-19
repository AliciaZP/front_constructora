import { Component, Input, } from '@angular/core';

@Component({
  selector: 'card-map',
  templateUrl: './card-map.component.html',
  styleUrls: ['./card-map.component.css']
})
export class CardMapComponent {

  @Input() lat: any = 0;
  @Input() lng: any = 0;

  center: google.maps.LatLngLiteral;
  zoom: number = 15; //max 22
  mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.SATELLITE;
  myPosition!: google.maps.LatLngLiteral;
  async ngOnInit() {

  }

  constructor() {
    this.center = {
      lat: this.lat,
      lng: this.lng,
    };
  }

  ngAfterViewInit() {
    this.center = {
      lat: this.lat,
      lng: this.lng,
    };
    this.myPosition = { ...this.center }
  }

}
