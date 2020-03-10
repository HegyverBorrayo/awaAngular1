import { Component, OnInit } from '@angular/core';
import { Notas } from '../../models/Notas';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.sass']
})
export class NotasComponent implements OnInit {

	notas: Notas[];


  constructor() { }

  ngOnInit(): void {
  	this.notas = [];
  }

  agregaInformacion(materia: string, punteo:number){
  	let elemento: Notas = {materia: materia,punteo:punteo };
  	this.notas.push(elemento);
  }

}
