import { Routes } from '@angular/router';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { MisEquiposComponent } from './components/mis-equipos/mis-equipos.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { TestComponent } from './components/test/test.component';
import { TestVelocidadComponent } from './components/test-velocidad/test-velocidad.component';
import { TestVelocidadTablaComponent } from './components/test-velocidad-tabla/test-velocidad-tabla.component';
import { TestFuerzaComponent } from './components/test-fuerza/test-fuerza.component';
import { PerfilEntrenoComponent } from './components/perfil-entreno/perfil-entreno.component';
import { TestFuerzaTablaComponent } from './components/test-fuerza-tabla/test-fuerza-tabla.component';
import { RecomendacionTestComponent } from './components/recomendacion-test/recomendacion-test.component';

export const routes: Routes = [
  {
    path:'',
    component: MainlayoutComponent,
    children:[
      { path:'inicio', component:MisEquiposComponent},
      { path:'equipo', component:EquiposComponent},
      { path:'test', component:TestComponent},
      { path:'testvelocidad', component:TestVelocidadComponent},
      { path:'testvelocidadtabla', component:TestVelocidadTablaComponent},
      { path:'testfuerza', component:TestFuerzaComponent},
      { path:'testfuerzatabla', component:TestFuerzaTablaComponent},
      { path:'perfilentreno', component:PerfilEntrenoComponent},
      { path:'recomendacion', component:RecomendacionTestComponent},
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
];
