import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primo',
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.sass']
})
export class PrimoComponent implements OnInit {

	numeroPrimo;
	showMessage;
  constructor() { }

  ngOnInit(): void {
  	this.numeroPrimo = 2;
  	this.showMessage = true;
  }

  muestraResultado(){
  	let numeroPrimo = this.numeroPrimo;
  	let primo = true;
  	for (let i = 2; i < numeroPrimo; i++) {
  		if (numeroPrimo%i === 0) {
  			primo = false;
  		}
  	}
	this.showMessage = primo;
  }

}
