import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, User, Users, ChartColumnBig, CircleX, Menu } from 'lucide-angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    LucideAngularModule, RouterLinkActive, RouterLink, CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent implements OnInit {
  readonly User = User;
  readonly Users = Users;
  readonly ChartColumnBig = ChartColumnBig;
  readonly CircleX = CircleX;
  readonly Menu = Menu;
  isSidebarOpen: boolean = true;
  isSmallScreen: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1024px)'])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
        if (this.isSmallScreen) {
          this.isSidebarOpen = false;
        }
      });
  }
}