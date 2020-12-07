import { Component, Input, OnInit, Output , EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment.prod'
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  @Input() lng:number;
  @Input() lat:number;
  @Input() ZOom:number;
  @Output() requestedLng= new EventEmitter<number>()
  @Output() requestedLat= new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
    console.log(this.lng)
    if(this.lng==null && this.lat==null){
      this.lat= 36.80400797921649;
      this.lng= 10.192793652018253;
    }
    if(this.ZOom==null){
      this.ZOom=10;
    }
    (mapboxgl as typeof mapboxgl).accessToken = environment.mapbox.accessToken;
      this.map = new mapboxgl.Map({
        container: 'map',
        style: this.style,
        zoom: this.ZOom,
        center: [this.lng, this.lat]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.createMarcador(this.lng,this.lat)
  }

  createMarcador(lng:number,lat:number){
    const marker = new mapboxgl.Marker({
      draggable:true
    }).setLngLat([lng,lat]).addTo(this.map);

    marker.on('drag',()=>{
      this.sendLat(marker.getLngLat().lat)
      this.sendLng(marker.getLngLat().lng)
    })
  }

  sendLat(lat:number){
    this.requestedLat.emit(lat)
  }

  sendLng(lng:number){
    this.requestedLng.emit(lng)
  }

}
