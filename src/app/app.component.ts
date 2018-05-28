import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}



/*
target=android-26
android.library.reference.1=CordovaLib
cordova.gradle.include.1=cordova-plugin-googlemaps/starter-tbxml-android.gradle
cordova.system.library.1=com.google.android.gms:play-services-maps:12.0.1
cordova.system.library.2=com.google.android.gms:play-services-location:12.0.1
cordova.system.library.3=com.android.support:support-core-utils:24.1.0 
*/
