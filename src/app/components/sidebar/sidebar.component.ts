import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, User, Users, ChartColumnBig } from 'lucide-angular';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LucideAngularModule, RouterLinkActive, RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly User = User;
  readonly Users = Users;
  readonly ChartColumnBig = ChartColumnBig;
}
