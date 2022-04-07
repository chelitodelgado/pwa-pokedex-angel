import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbar = [
    {
      item: 'Perfil',
      url: '/perfil'
    },
    {
      item: 'Pokedex',
      url: '/'
    },
    {
      item: 'Poratafolio',
      url: '/portafolio'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
