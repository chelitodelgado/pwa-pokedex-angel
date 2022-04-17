import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Servicios
import { PokedexService } from './services/pokedex.service';

// Componentes
import { CardComponent } from './share/card/card.component';
import { BuscadorComponent } from './share/buscador/buscador.component';
import { PerfilComponent } from './perfil/perfil.component';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';

// Angular Material
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    CardComponent,
    BuscadorComponent,
    FilterPipe,
    PerfilComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonToggleModule
  ],
  providers: [
    PokedexService
  ],
  exports: [
    CardComponent,
    BuscadorComponent,
    MatButtonToggleModule
  ]
})
export class PokedexModule { }
