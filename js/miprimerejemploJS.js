function feliz() {
    document.getElementById('estado').src = 'Imagenes/h.jpg';
    alert("Ahora te encuentras felizz!! :D");
}

function triste() {
    document.getElementById('estado').src = 'Imagenes/s.jpg';
    alert("Oh no, por que estas triste bro? :(");
}

function cambiarColor() {
    document.getElementById('subtitulo').style.color = 'red';
}

function cambiarTexto() {
    document.getElementById('subtitulo').textContent = "YA LE SÉ AL JS :D";
    document.getElementById('encabezado').style.background = '#ff45b6';
}

function mostrarMensaje() {
    console.log("Hola mundo");
    alert("HOLA MUNDO TENGAN BUEN DÍA");
    let A = 3;
    let B = 4;
    alert(A + B);
}
