import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';

@NgModule({
  imports:      [ BrowserModule, SidebarComponent, MainlayoutComponent ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }