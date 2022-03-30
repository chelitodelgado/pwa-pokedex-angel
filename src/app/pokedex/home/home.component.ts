import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../services/pokedex.service';
import { PokedexResponse } from '../models/pokedex.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
