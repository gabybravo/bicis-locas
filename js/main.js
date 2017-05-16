function validateForm(){
//Capturo los valores que ingresa el usuario con el id y el value de cada campo:
var nombre = document.getElementById("name").value
var apellido = document.getElementById("lastname").value;
var correo = document.getElementById("input-email").value;
var pass = document.getElementById("input-password").value;
var select = document.getElementsByTagName("select");

//Genero funciones para cada campo que hay que validar, dentro de estas están las condicionales que se deben cumplir para que se consideren correctos:
function name(){
	if (nombre == null || nombre.length == 0) {
		var caja = document.getElementsByClassName('name-container')[0];
		var etiqueta = document.createElement('span'); 
		var textoError = document.createTextNode('Debe ingresar su nombre, por favor.'); 
		etiqueta.appendChild(textoError); 
		caja.appendChild(etiqueta);
		return false;
	} else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()) { 
		var caja = document.getElementsByClassName('name-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('La primera letra debe ser en mayúscula.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);				
		return false;
	} else if ( /[0-9]/.test(nombre)) { 
		var caja = document.getElementsByClassName('name-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Solo debe ingresar letras en este campo.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);			
		return false;
	} else {
		return true;
		}
}

function lastname(){
	if (apellido === null || apellido.length === 0) {
		var caja = document.getElementsByClassName('lastname-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Debe ingresar su apellido, por favor.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);			
		return false;
	} else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()) {
		var caja = document.getElementsByClassName('lastname-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('La primera letra debe ser en mayúscula.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);			
		return false;
	} else if (/[0-9]/.test(apellido)) { 
		var caja = document.getElementsByClassName('lastname-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Solo debe ingresar letras en este campo.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);			
		return false;			
	} else {
		return true;
		}
}		

function email(){
	var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/; //acepta todo tipo de correo incluidos puntos entremedio
	if (correo === null || correo.length === 0) {
		var caja = document.getElementsByClassName('email-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Debe ingresar un correo, por favor.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);				
		return false;
	} else if (verificar.test(correo)) {
		return true;
	} else {
		var caja = document.getElementsByClassName('email-container')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Ingrese un correo válido, por favor.');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);			
		return false;
		}
} 

function password(){
	if (pass === null || pass.length === 0){
		var caja = document.getElementsByClassName('form-group')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Debe escribir una contraseña, por favor');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);				
		return false;
	} else if (pass.length < 6) { 
		var contenedor = document.getElementsByClassName('form-group')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('La contraseña debe tener al menos 6 caracteres');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);				
		return false;
	} else if (pass === 'password' || pass === '123456' || pass === '098754'){ 
		var caja = document.getElementsByClassName('form-group')[0];
		var etiqueta = document.createElement('span');
		var textoError = document.createTextNode('Contraseña inválida');
		etiqueta.appendChild(textoError);
		caja.appendChild(etiqueta);				
		return false;
	} else {
		return true;			
	}

}

function bici(){
	for (var i = 0; i < select.length; ++i){ 
		if (select[i].value === "0"){
			var ag = document.getElementsByClassName('form-group input-box')[1].classList.add('seleccion');
			var caja = document.getElementsByClassName('seleccion')[0];
			var etiqueta = document.createElement('span');
			var textoError = document.createTextNode('Debe seleccionar una opción');
			etiqueta.appendChild(textoError);
			caja.appendChild(etiqueta);											
			return false;
			}
		} 
		return true;
	}


name();
lastname();
email();
password();
bici();

}

//A pesar de que se pongan los campos de manera correcta, los span una vez que aparecen no se eliminan al comprobar que el 
//campo está bien ingresado. Habría que hacer otra condicional o función que logre eliminar el span una vez que se llena correctamente el campo.








