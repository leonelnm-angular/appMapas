import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Marcador } from 'src/app/clases/marcador.class';

@Component({
  selector: 'app-edit-marcador',
  templateUrl: './edit-marcador.component.html',
  styleUrls: ['./edit-marcador.component.css']
})
export class EditMarcadorComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditMarcadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Marcador ) {

      console.log(data);

      this.forma = formBuilder.group({
        'titulo': data.titulo,
        'desc': data.desc
      });

    }

  ngOnInit() {
  }


  saveChanges() {

    this.dialogRef.close( this.forma.value );

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
