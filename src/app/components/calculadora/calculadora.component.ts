import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.sass']
})
export class CalculadoraComponent implements OnInit {

	operando1;
	operando2;
	showMessage;
	resultado;
  constructor() { }

  ngOnInit(): void {
  	this.operando1 = this.operando2 = 0;
  	this.showMessage = false;
  	this.resultado = 0;
  }

  	realizarOperacion(operador:string){
  		let resultado = 0;
	  	switch (operador) {
	  		case "+":
	  			resultado = this.operando1 + this.operando2;
	  			break;
	  		case "-":
	  			resultado = this.operando1 - this.operando2;
	  			break;
	  		case "*":
	  			resultado = this.operando1 * this.operando2;
	  			break;
	  		case "/":
	  			resultado = (this.operando2 == 0) ? 0: this.operando1 / this.operando2;
	  			break;
  		}
  		this.resultado = resultado;
	  	this.showMessage = true;
  	}

}
