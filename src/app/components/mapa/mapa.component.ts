import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/clases/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';
import { EditMarcadorComponent } from './edit-marcador.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 51.678418;
  lng = 7.809007;

  constructor( private snackBar: MatSnackBar, public dialog: MatDialog ) {

    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

  }

  ngOnInit() {
  }

  addMarcador( e: any ) {
    this.marcadores.push(new Marcador( e.coords.lat, e.coords.lng ));
    this.saveStorage();

    this.snackBar.open('Marcador añadido', 'Cerrar', {
      duration: 1000,
    });

  }

  saveStorage() {
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }

  deleteMarcador( index: number ) {
    this.marcadores.splice(index, 1);       // Borra marcadore, desde el index cuantos valores quiere borrar
    this.saveStorage();
    this.snackBar.open('Marcador añadido', 'Cerrar', {
      duration: 1000,
    });
  }

  editMarcador( marcador: Marcador) {
    const dialogRef = this.dialog.open( EditMarcadorComponent , {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe((result: Marcador) => {

      if ( !result ) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.saveStorage();

      this.snackBar.open('Marcador actualizado!', 'Cerrar', {
        duration: 1000,
      });

    });
  }

}
