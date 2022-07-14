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
  public estadisticas: number[] = [];
  pieChartData = [120, 150, 180, 90, 85, 59]
  etiquetas: string[] = ['HP','Ataque','Defensa','A-Especial', 'D-Especial', 'Velocidad']

  typeColor = [
    { normal: 'Lavender', border: 'Gainsboro'},
    { lucha: 'Firebrick', border: 'Darkred'},
    { veneno: 'Mediumpurple', border: 'Blueviolet'},
    { roca: 'Peru', border: 'Chocolate'},
    { bicho: 'YellowGreen', border: 'OliveDrab'},
    { fantasma: 'Purple', border: 'Indigo'},
    { acero: 'LightGrey', border: 'Silver'},
    { agua: 'RoyalBlue', border: 'MediumSlateBlue'},
    { dragón: 'MediumSlateBlue', border: 'SlateBlue'},
    { electrico: 'Yellow', border: 'Gold'},
    { fuego: 'Crimson', border: 'Firebrick'},
    { hada: 'rgb(255, 136, 238)', border: 'rgb(255, 187, 238)'},
    { hielo: 'AquaMarine', border: 'PaleTurquoise'},
    { planta: 'Lime', border: 'Limegreen'},
    { psiquico: 'Violet', border: 'Plum'},
    { siniestro: 'SlateGray', border: 'Darkslategray'},
    { tierra: 'BurlyWood', border: 'Tan'},
  ]
  constructor( public id: ActivatedRoute, private pokeService: PokedexService ) {}

  ngOnInit(): void {
    this.id.params.subscribe( (params: Params) => {
      this.param = params['id'];
      this.getPokemon(this.param);
    });
  }

  getPokemon( id: string ) {
    let pokemon;
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
        peso: resp.weight,
        estadisticas: resp.stats,
        movimientos: resp.moves,
        cp: resp.base_experience
      };

      resp.stats.map((stats) => {
        this.estadisticas.push(stats.base_stat)
      });

      this.pokemons.push(pokemon);
      console.log(this.pokemons);

    });
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public radarChartData: ChartData<'radar'> = {
    labels: this.etiquetas,
    datasets: [
      { data: this.pieChartData, label: 'Estadisticas' },
    ]
  };
  public radarChartType: ChartType = 'radar';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
