import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Glasses, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-recomendacion-test',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './recomendacion-test.component.html',
  styleUrl: './recomendacion-test.component.css'
})
export class RecomendacionTestComponent {
  readonly Glasses = Glasses;
}
