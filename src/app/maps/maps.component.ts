import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Google Maps project for cars';
  lat: number = 51.10000;
  lng: number = 17.0300;
  constructor() { }

  ngOnInit() {
  }

}
