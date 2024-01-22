import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  service = inject(GlobalService);
  logo: string;
  linkers: linkerList[];
  hamburgerIcon: string;

  constructor() {
    this.logo = './assets/shared/logo.svg';
    this.hamburgerIcon = './assets/shared/icon-hamburger.svg';
    this.linkers = [
      {
        name: 'HOME',
        num: 0,
        path: '/home',
      },
      {
        name: 'DESTINATION',
        num: 1,
        path: '/destination',
      },
      {
        name: 'CREW',
        num: 2,
        path: '/crew',
      },
      {
        name: 'TECHNOLOGY',
        num: 3,
        path: 'technology',
      }
    ];
  }
}

interface linkerList {
  name: string;
  num: number;
  path: string;
}
