import { Injectable } from '@angular/core';
import { UserAgent, GeoLocation } from '../_models/index';

@Injectable()
export class UserAgentService {
  private userAgent: UserAgent = new UserAgent();
  private geoLocation: GeoLocation = new GeoLocation();

  constructor() { }

  getUserAgent() {

    this.userAgent.codeName = navigator.appCodeName;
    this.userAgent.appName = navigator.appName;
    this.userAgent.appVersion = navigator.appVersion;
    this.userAgent.cookiesEnabled = navigator.cookieEnabled;
    this.userAgent.language = navigator.language;
    this.userAgent.platform = navigator.platform;
    this.userAgent.userAgent = navigator.userAgent;

    return this.userAgent;
  }

  getGeolocation() {
      let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      let x =  navigator.geolocation ;
      x.getCurrentPosition(this.success, this.error, options);
  }

  success(pos) {
    let crd = pos.coords;
    this.geoLocation.latitude = crd.latitude;
    this.geoLocation.longitude = crd.longitude;
    this.geoLocation.accuracy = crd.accuracy;

    return this.geoLocation;
  }

  error(err) {
    this.geoLocation.latitude = 0;
    this.geoLocation.longitude = 0;
    this.geoLocation.accuracy = 0;
    console.warn(`ERROR(${err.code}): ${err.message}`);

    return this.geoLocation;
  }

}
