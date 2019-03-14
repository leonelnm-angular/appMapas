import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Angular Material
import { MaterialModule } from './material.module';

// Angular Maps
import { AgmCoreModule } from '@agm/core';

// Componentes
import { MapaComponent } from './components/mapa/mapa.component';
import { EditMarcadorComponent } from './components/mapa/edit-marcador.component';

// Reactive Foms
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    EditMarcadorComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    EditMarcadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDwgiNVBbRSzEBSvmbXP9QLcSprC9VHp7M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
