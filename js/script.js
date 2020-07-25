window.addEventListener('load', function(){

	var formulario = document.querySelector('#formulario');
	var mensajeDatos = document.querySelector('#alerta');

	var error_rut = document.querySelector('#error_rut');
	var error_nombre = document.querySelector('#error_nombre');
	var error_apellidos = document.querySelector('#error_apellidos');
    var error_edad = document.querySelector('#error_edad');
    var error_email = document.querySelector('#error_email');
    var error_especialidad = document.querySelector('#error_especialidad');
    var error_fecha = document.querySelector('#error_fecha');
    var error_hora = document.querySelector('#error_hora');

    mensajeDatos.style.display = 'none';
    error_rut.style.display = 'none';
	error_nombre.style.display = 'none';
	error_apellidos.style.display = 'none';
    error_edad.style.display = 'none';
    error_email.style.display = 'none';
    error_especialidad.style.display = 'none';
    error_fecha.style.display = 'none';
    error_hora.style.display = 'none';
    
	formulario.addEventListener('submit', function(event){

    var rut = document.querySelector('#rut').value;
	var nombre = document.querySelector('#nombre').value;
	var apellidos = document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;
    var email	= document.querySelector('#email').value;
    var especialidad = document.querySelector('#especialidad').value;
    var fecha	= document.querySelector('#fecha').value;
    var hora = document.querySelector('#hora').value;

const patrones = {
    correo: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
    
};
	  
	if(nombre.trim() == null || nombre.trim().length == 0){
	  	alert('Debe ingresar sus nombres');
	  	error_nombre.innerHTML ='El campo está vacio';
	  	error_nombre.style.display = 'block';
	  	return false;
	  }else{
	  	error_nombre.style.display = 'none';
	}
	 
	if(apellidos.trim() == null || apellidos.trim().length == 0){
	  	alert('Debe ingresar sus apellidos');
	  	error_apellidos.innerHTML ='El campo está vacio';
	  	error_apellidos.style.display = 'block';
	  	return false;
	  }else{
	  	error_apellidos.style.display = 'none';
    }
      
    if(rut == null || rut <= 0 || isNaN(rut)){
        alert('Debe ingresar un RUT válido');
        error_rut.innerHTML ='Error al ingresar RUT';
        error_rut.style.display = 'block';
        return false;
    }else{
        error_rut.style.display = 'none';
    }
	 
	if(edad == null || edad <= 0 || isNaN(edad)){
	  	alert('La edad no es valida');
	  	error_edad.innerHTML ='La edad no es valida';
	  	error_edad.style.display = 'block';
	  	return false;
	  }else{
	  	error_edad.style.display = 'none';
      }
    
    
     if(!email.match(patrones.correo)){
        alert('El correo no es válido');
        error.email.innerHTML ='El correo no es válido';
        error_email.style.display = 'block';
        return false;
    }else{
        error_email.style.display = 'none';
    }

	  
	if(especialidad.trim() == null || especialidad.trim().length == 0){
        alert('La especialidad no es valida');
        error.especialidad.innerHTML ='La especialidad no es valida';
        error.especialidad.style.display = 'block';
        return false;
    }else{
        error_especialidad.style.display = 'none';
    }

      mensajeDatos.style.display = 'block';

      var p_rut = document.querySelector('#p_rut span');
	  var p_nombre = document.querySelector('#p_nombre span');
	  var p_apellidos = document.querySelector('#p_apellidos span');
      var p_edad = document.querySelector('#p_edad span');
      var p_email = document.querySelector('#p_email span');
      var p_especialidad = document.querySelector('#p_especialidad span');
      var p_fecha = document.querySelector('#p_fecha span');
      var p_hora = document.querySelector('#p_hora span');

      p_rut.innerHTML = rut;
      p_nombre.innerHTML = nombre;
	  p_apellidos.innerHTML = apellidos;
      p_edad.innerHTML 	= edad;
      p_email.innerHTML = email;
      p_especialidad.innerHTML = especialidad;
      p_fecha.innerHTML = fecha;
      p_hora.innerHTML = hora;



	});

});