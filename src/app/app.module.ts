import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { PokedexModule } from './pokedex/pokedex.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pokedex/home/home.component';
import { NavbarComponent } from './pokedex/share/navbar/navbar.component';
import { NetworkComponent } from './pokedex/share/network/network.component';
import { DetallesComponent } from './pokedex/detalles/detalles.component';

import { NgChartsModule } from 'ng2-charts';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NetworkComponent,
    DetallesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexModule,
    NgChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
