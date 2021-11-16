  function volver(){
  	alert("Serás redireccionado a la página inicial");
  	window.location.href = "login.html";
  }

  function notaIngresada(){
    alert("Datos ingresados exitosamente");
    window.location.href = "notas.html";
  }

  function alumnoIngresado(){
    alert("Datos ingresados exitosamente");
    window.location.href = "alumnos.html";
  }

  function nuevoAlumno(){
    window.location.href = "nuevo_alumno.html";
  }

  function nuevaNota(){
    window.location.href = "nueva_nota.html";
  }


  function login(){
  	var usuario = document.frmLogin.txtUsername.value;	
  	var pass = document.frmLogin.txtPassword.value;
  	var url = "";

  	if(usuario == "jbilbao"){
  		url = "alumnos.html";
  	}

  	if(usuario == "msoto"){
  		url = "notas.html";
  	}

  	document.frmLogin.action = url;
  	document.frmLogin.submit();

  }

  function promedio() {
    var n1 = parseFloat(document.formnota.Nota1.value);
    var n2 = parseFloat(document.formnota.Nota2.value);
    var n3 = parseFloat(document.formnota.Nota3.value);
    var promnotas = (n1+n2+n3) / 3;

    document.getElementById("idPromedio").innerHTML = parseInt(promnotas);
  }

  function limpiar() {
    alert("Se han limpiado todos los campos");
    document.formnota.Alumno.value = "";
    document.formnota.Nota1.value = "";
    document.formnota.Nota2.value = "";
    document.formnota.Nota3.value = "";
    document.getElementById("idPromedio").innerHTML = "";
  }

  function limpiarNuevoAlumno() {
    alert("Se han limpiado todos los campos");
    document.formalumno.nombreAlumno.value = "";
    document.formalumno.edad.value = "";
    document.formalumno.curso.value = "";
    document.formalumno.rut.value = "";
    document.formalumno.pais.value = "";
  }