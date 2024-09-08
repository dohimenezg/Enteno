import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Glasses, LucideAngularModule, NotebookPen, NotepadText } from 'lucide-angular';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent {
  readonly NotebookPen = NotebookPen;
  readonly Glasses = Glasses;
  readonly NotepadText = NotepadText;
}
