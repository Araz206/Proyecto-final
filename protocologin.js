function valida_login(form){
	$("#btnEntrar").prop("disabled", true);
	if(document.login.txtICorreo.value!="saraiarenivar@gmail.com"|| /\S+@\S+\.\S+/.test(login.txtICorreo.value)==false){
		$("#btnEntrar").prop("disabled", false);
		document.login.txtICorreo.focus();
		alert('No has escrito un correo v\u00E1lido...'); 
		return false;
	}
	if(document.login.IPassword.value!="Arenivar"){
		$("#btnEntrar").prop("disabled", false);
		document.login.IPassword.focus();alert('No has escrito tu password...');
		return false;
		}
	return true;
	
}
function valida_envia(form) {
	$("#btnRegistrarme").prop("disabled", true);
	if(regusuario.txtNombre.value==0) { 
		regusuario.txtNombre.focus();
		$("#btnRegistrarme").prop("disabled", false);
		alert('No has escrito tu nombre');
		return false;
	}
	if(regusuario.txtApellido.value==0) {
		regusuario.txtApellido.focus();
		$("#btnRegistrarme").prop("disabled", false);
		alert('No has escrito tu apellido');
		return false;
	}
	if (regusuario.txtCorreo.value==0 || /\S+@\S+\.\S+/.test(regusuario.txtCorreo.value)==false) { 
		regusuario.txtCorreo.focus();
		$("#btnRegistrarme").prop("disabled", false);
		alert('No has escrito un correo v\u00E1lido al cual te enviaremos tus datos');
		return false;
	}
	if(regusuario.txtPass1.value!== regusuario.txtPass2.value || regusuario.txtPass1.value == 0) {
		regusuario.txtPass1.focus();
		$("#btnRegistrarme").prop("disabled", false);
		alert("Debes escribir contrase\u00f1as v\u00E1lidas iguales, \nRecuerda que deben de coincidir...");
		return false;
	}
	
	if (regusuario.birthday.value == 0) {
		regusuario.birthday.focus();
		$("#btnRegistrarme").prop("disabled", false);
		alert("Selecciona tu fecha de nacimiento");
		return false;
	}
	var radio_choice = false;
	for (counter = 0; counter <regusuario.genero.length; counter++){
		if(regusuario.genero[counter].checked)
			radio_choice = true;
	}
	if(!radio_choice) {
		$("#btnRegistrarme").prop("disabled", false);
		alert("Debe marcar una casilla de genero");
		return false;
	}
	return true; 
}