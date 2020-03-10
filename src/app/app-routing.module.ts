import { PrimoComponent } from './components/primo/primo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotasComponent } from './components/notas/notas.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"calculadora", component: CalculadoraComponent},
  {path:"notas", component: NotasComponent},
  {path:"", component: PrimoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
