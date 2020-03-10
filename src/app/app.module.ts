import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimoComponent } from './components/primo/primo.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { NotasComponent } from './components/notas/notas.component';
import { FormsModule } from "@angular/forms";
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    NotasComponent,
    CalculadoraComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
