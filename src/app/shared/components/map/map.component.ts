import { Component, inject } from '@angular/core';
import { ConstructionsService } from 'src/app/core/services/constructions.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  center: google.maps.LatLngLiteral;
  zoom: number = 6; //max 22
  mapTypeId: google.maps.MapTypeId = google.maps.MapTypeId.HYBRID;
  constructions: any[] = []
  constructionsService = inject(ConstructionsService)

  async ngOnInit() {
    this.constructions = await this.constructionsService.getAllConstructions()
    console.log(this.constructions)
  }

  constructor() {
    this.center = {
      lat: 40,
      lng: -3,
    }
  }


  onChangeType($event: any) {
    //si google cambia el nombre de los tipos de mapa esto deja de funcionar
    // this.mapTypeId = $event.target.value
    switch ($event.target.value) {
      case 'hybrid':
        this.mapTypeId = google.maps.MapTypeId.HYBRID;
        break;
      case 'terrain':
        this.mapTypeId = google.maps.MapTypeId.TERRAIN;
        break;
      case 'roadmap':
        this.mapTypeId = google.maps.MapTypeId.ROADMAP;
        break;
      case 'satellite':
        this.mapTypeId = google.maps.MapTypeId.SATELLITE;
        break;
    }
  }

  generateIcon(construction: any) {
    console.log('esto funciona')
    return {
      url: "https://cdn-icons-png.flaticon.com/512/2810/2810796.png",
      scaledSize: new google.maps.Size(30, 30),
    }
  }

}
