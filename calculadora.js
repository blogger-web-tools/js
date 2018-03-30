var numero1 = 0;
var numero2 = 0;
var operacion;

//cuando se apreta un numero, esta funcion lo recibe.
function asignarNumero(numero){
    if(document.getElementById("txtNumero").value == "0" || numero1==0){
        numero1 = numero;
    }else{
        numero1 += numero;
    }
        document.getElementById("txtNumero").value = numero1;
}

//Funcion tecla C.
function teclaC(){
	numero1 = 0;
	numero2 = 0;
	document.getElementById("txtNumero").value = 0;
}


//Esta funcion se llama cada vez que se presiona un boton de operacion.
function operar(valor){
	if (numero1 == 0){
		resultado = parseInt(document.getElementById("txtNumero").value);
	}
	numero2 = parseInt(numero1);
	numero1= 0;
	operacion = valor;
}

function esIgual(){
    numero1 = parseInt(numero1);
	switch (operacion){
		case 1:
			numero1 += numero2;
		break;
		case 2:
			numero1 = numero2 - numero1;
		break;
		case 3:
			numero1 *= numero2;
		break;
		case 4:
			numero1 = numero2 / numero1;
		break;
		case 5:
			numero1 = Math.pow(numero2, numero1);
		break;
	}
	document.getElementById("txtNumero").value = numero1;
	numero2 = parseInt(numero1);
}