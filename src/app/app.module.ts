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



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDwgiNVBbRSzEBSvmbXP9QLcSprC9VHp7M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
