import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor() {

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
  }

  addMarcador( e: any ) {
    this.marcadores.push(new Marcador( e.coords.lat, e.coords.lng ));
    this.saveStorage();
  }

  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }

}
