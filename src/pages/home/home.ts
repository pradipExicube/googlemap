import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMaps, MyLocation, Marker, GoogleMapsAnimation, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public map: GoogleMap;


  constructor(public navCtrl: NavController,
     public platform:Platform,

    ) {

  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }

  loadMap() {
    let options: GoogleMapOptions = {
    
      controls: {
        'compass': false,
       // 'myLocationButton': true,
        //'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        //'zoom': true,          // android only
        'mapToolbar': true,     // android only
      },
    
      gestures: {
        scroll: true,
        tilt: true,
        zoom: true,
        rotate: true,
        mapTypeControl:true
      },
      'styles': [
        {
          featureType: "all",
          stylers: [
            { saturation: -80 }
          ]
        },{
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#000" },
            { saturation: 50 }
          ]
        },{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ],
      // styles: [], // https://developers.google.com/maps/documentation/javascript/style-reference
      preferences: {
        building: true
      },
      camera: {
        target: {
          lat: 22.6881931,
          lng: 88.4711671
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map', options);

  }



}
