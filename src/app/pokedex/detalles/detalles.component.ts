import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"
import { PokedexService } from '../services/pokedex.service';
import { PokedexResponse } from '../models/pokedex.model';

import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  private param: string = '';
  pokemons: any[] = [];
  estadisticas: any[] = []
  constructor( public id: ActivatedRoute, private pokeService: PokedexService ) { }

  ngOnInit(): void {
    this.id.params.subscribe( (params: Params) => {
      this.param = params['id'];
      this.getPokemon(this.param);
    });
  }

  getPokemon( id: string ) {
    let pokemon;
    let estadistica;
    this.pokemons = [];
    this.estadisticas = [];
    this.pokeService.getPokemon( id ).subscribe( (resp: PokedexResponse) => {
      pokemon = {
        nombre: resp.name,
        id: resp.id,
        tipo: resp.types,
        orden: resp.order,
        sprite: resp.sprites.other?.dream_world.front_default,
        habilidades: resp.abilities,
        experiencia_base: resp.base_experience,
        altura: resp.height,
        ancho: resp.weight,
        estadisticas: resp.stats,
        movimientos: resp.moves,
        cp: resp.base_experience
      };
      estadistica = {
        1: resp.stats[1].base_stat,
        2: resp.stats[0].base_stat,
        3: resp.stats[2].base_stat,
        4: resp.stats[3].base_stat,
        5: resp.stats[4].base_stat,
        6: resp.stats[5].base_stat,
      }
      this.pokemons.push(pokemon);
      console.log(this.pokemons);

      this.estadisticas.push(estadistica)
    });
  }

  // Radar
  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public radarChartLabels: string[] = [ 'HP', 'Ataque', 'Defensa', 'Ataque especial', 'Defensa especial', 'Velocidad'];
  public data: number[] = [];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [
      { data: this.data, label: 'Estadisticas' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
