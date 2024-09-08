import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, NotepadText } from 'lucide-angular';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [LucideAngularModule, RouterLinkActive, RouterLink],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  readonly NotepadText = NotepadText;
}
