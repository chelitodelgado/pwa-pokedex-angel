import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { PokedexResponse } from '../../models/pokedex.model';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  pokemons: any[] = [];
  constructor( private pokeService: PokedexService ) { }

  ngOnInit(): void {
    this.getCatalogo();
  }

  buscar( poke: string ) {
    let pokemon;
    this.pokemons = [];
    if (poke == '') {
      this.getCatalogo()
    } else {
      this.pokeService.getPokemon(poke).subscribe( (resp: PokedexResponse) => {
        pokemon = {
          nombre: resp.name,
          id: resp.id,
          tipo: resp.types,
          orden: resp.order,
          sprite: resp.sprites.other?.dream_world.front_default,
        }
        this.pokemons.push(pokemon);
      });
    }
  }

  getCatalogo() {
    let pokemon;
    this.pokemons = [];
    for (let i = 0; i < 20; i++) {
      this.pokeService.getCatalogo(i+1).subscribe( (data: PokedexResponse) => {
        pokemon = {
          nombre: data.name,
          id: data.id,
          tipo: data.types,
          orden: data.order,
          sprite: data.sprites.other?.dream_world.front_default
        };
        this.pokemons.push(pokemon);
      });
    }

  }

}


