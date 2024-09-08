import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MisEquiposComponent } from '../mis-equipos/mis-equipos.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [SidebarComponent, MisEquiposComponent, NavbarComponent, RouterOutlet],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.css'
})
export class MainlayoutComponent {

}
