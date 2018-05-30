import { Component, NgZone } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { GoogleMap, GoogleMaps, MyLocation, Marker, GoogleMapsAnimation, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';

import {maptypeStyle} from '../../common/maptype';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public map: GoogleMap;
  public changemap:any;
  public mapBackground:boolean;
  

  constructor(public navCtrl: NavController,
     public platform:Platform,
     public zone:NgZone

    ) {
      this.mapBackground = true;
      this.changemap = maptypeStyle
  }

  mapbackgroundchange(){
    this.zone.run(()=>{
      this.map.setOptions({
        styles: this.mapBackground === true? this.changemap[0] : this.changemap[1],
      })
      //this.addMapMarker();
    })
  }

  ngAfterViewInit() {
    this.platform.ready().then(() => {
      this.loadMap();
    });
  }



  loadMap() {
    let options: GoogleMapOptions = {
      mapType:'MAP_TYPE_TERRAIN',
      controls: {
        'compass': false,
        'myLocationButton': false,
        'myLocation': true,   // (blue dot)
        'indoorPicker': true,
        'mapToolbar':false
      },
    
      gestures: {
        scroll: true,
        tilt: true,
        zoom: true,
        rotate: true,
        mapTypeControl:true
      },
      styles: this.changemap[0],
      preferences: {
        building: true
      },
    };

    this.map = GoogleMaps.create('map', options);
    setTimeout(() => {
      this.addMapMarker();
    }, 1000);

  }

addMapMarker(){
  this.map.clear();

  // Get the location of you
  this.map.getMyLocation()
    .then((location: MyLocation) => {
      // console.log(JSON.stringify(location, null ,2));

      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30,
       // bearing:140,
        //duration:3000
      })
      .then(() => {

        // add a marker
        let marker: Marker = this.map.addMarkerSync({
          title: '@ionic-native/google-maps plugin!',
          snippet: 'This plugin is awesome!',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE,
          icon:{
            'url':'assets/imgs/markerimg.png'
          }
        });

        marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe((markerParams) => {
          // marker.showInfoWindow();
        });
     });
    });
}


}
