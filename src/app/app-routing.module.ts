import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestadoresComponent } from './pages/prestadores/prestadores.component';
import { AfiliadoComponent } from './pages/afiliado/afiliado.component';

const routes: Routes = [
  { path: 'prestadores', component: PrestadoresComponent },
  { path: 'afiliado'   , component: AfiliadoComponent },
  { path: '', redirectTo: 'prestadores', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  declarations: [],
})

export class AppRoutingModule { }
