import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FileChartColumnIncreasing, Glasses, LucideAngularModule, Users } from 'lucide-angular';

@Component({
  selector: 'app-perfil-entreno',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './perfil-entreno.component.html',
  styleUrl: './perfil-entreno.component.css'
})
export class PerfilEntrenoComponent {
  readonly Glasses = Glasses;
  readonly FileChartColumnIncreasing = FileChartColumnIncreasing;
  readonly Users = Users;
}
