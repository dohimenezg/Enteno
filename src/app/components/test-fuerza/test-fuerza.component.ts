import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, NotebookPen } from 'lucide-angular';

@Component({
  selector: 'app-test-fuerza',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './test-fuerza.component.html',
  styleUrl: './test-fuerza.component.css'
})
export class TestFuerzaComponent {
  readonly NotebookPen = NotebookPen;
}
