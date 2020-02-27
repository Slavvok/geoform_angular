import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-geoform',
  templateUrl: './geoform.component.html',
  styleUrls: ['./geoform.component.css']
})
export class GeoformComponent {
  response = 'rr';
  constructor(private http: HttpClient){};

  getGeoCode(address: string) {
    address = address.trim();
    const options = {
      withCredentials: true,
      params: new HttpParams().set('format', 'json')
                              .set('geocode', address)
                              .set('apikey', '1f036e2b-1634-436b-965e-b241f70e634e')};
    return this.http.post('http://geocode-maps.yandex.ru/1.x/', options)
      .subscribe(resp => {console.log(resp); this.response = JSON.stringify(resp)});
  }
}
