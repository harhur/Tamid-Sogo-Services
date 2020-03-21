import { Component } from '@angular/core';
import dummyData from '../assets/dummyData.json';

declare var ol: any;

export interface Car {
  carId: number;
  dateAdded: string;
  color: string;
  price: number;
  vin: number;
  lastUpdated: string;
  year: number;
  model: string;
  make: string;
  plantId: number;
  starred: boolean;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Attribution :
// https://medium.com/@balramchavan/using-openstreetmap-inside-angular-v6-3d42cbf03e57
export class AppComponent {
  title = 'sogo-services';

  latitude: number = 18.5204;
  longitude: number = 73.8567;

  map: any;
  latLong = new Array<Car>();

  /*
  may be needed for future
  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([35.04440, 31.25012]));
    view.setZoom(8);
  }
  */

  ngOnInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([35.04440, 31.25012]),
        zoom: 8
      })
    });
    this.generateCoordinates();
  }

  // Generate random coordinates for OpenStreetMaps
  generateCoordinates() {
    dummyData.forEach(element => {
      // let longitude = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4);
      // let longitude = (Math.random() * (0.120 - 0.0200) + 0.0200).toFixed(4);
      //
      // let car = {
      //   carId: element.carId,
      //   dateAdded: element.dateAdded,
      //   color: element.color,
      //   price: element.price,
      //   vin: element.vin,
      //   lastUpdated: element.lastUpdated,
      //   year: element.year,
      //   model: element.model,
      //   make: element.make,
      //   plantId: element.plantId,
      //   starred: element.starred,
      //   latitude: this.latitude,
      //   longitude: this.longitude
      // }
      // this.latLong.push(car);
    });
    console.log(this.latLong);
  }

}
