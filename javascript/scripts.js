var segundos = 0;
function temporizador(){
    segundos = segundos + 1; // segundos =+ 1; segundos++;
    document.getElementById("contador").innerHTML = segundos;
    }
setInterval(temporizador, 1000);
function iniciar() {
    setInterval(temporizador, 1000);
}
function parar() {
    clearInterval();
}