document.getElementById('enviar').addEventListener('click', function(){
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    console.log('Te quiere contactar: '+nombre);
    console.log('y su e-mail es: '+email);

    document.getElementById('enviar').style.display = 'none';
    document.getElementById('formcontacto').style.display = 'none';
    document.getElementById('contenedorDatos').innerHTML = "<div class='enviado'>Datos enviados, en breve nos pondremos en contacto!<div>";

});
