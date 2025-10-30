let cartasMostrar = 0;
let cartas1 = null;
let cartas2 = null;
let resultado1 = null;
let resultado2 = null;
let cards;
let cartas;

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let animales = ["Perro","Perro","Gato","Gato","Pajaro","Pajaro","Tortuga","Tortuga","Conejo","Conejo","Pez","Pez","Loro","Loro","Ratón","Ratón"];
let ingles = ["Red","Red","Yellow","Yellow","Blue","Blue","Green","Green","Black","Black","Orange","Orange","Pink","Pink","Purple","Purple"];
let catalan = ["Llimona","Llimona","Poma","Poma","Síndria","Síndria","Cireres","Cireres","Raïms","Raïms","Maduixes","Maduixes","Taronja","Taronja","Plàtan","Plátan"];

cards = numeros;
cards.sort(() => Math.random() - 0.5);

function mostrar(id){
    cartasMostrar++;
    
    if(cartasMostrar === 1){
        cartas1 = document.getElementById(id);
        resultado1 = cards[id];
        cartas1.innerHTML = resultado1;
        cartas1.disabled = true;

    } else if(cartasMostrar === 2){
        cartas2 = document.getElementById(id);
        resultado2 = cards[id];
        cartas2.innerHTML = resultado2;
        cartas2.disabled = true;

        if(resultado1 === resultado2){
            // Marcar cartas correctas en verde
            cartas1.classList.add('correcta');
            cartas2.classList.add('correcta');
            cartasMostrar = 0;
        } else {
            setTimeout(() => {
                cartas1.innerHTML = '';
                cartas2.innerHTML = '';
                cartas1.disabled = false;
                cartas2.disabled = false;
                cartasMostrar = 0;
            }, 500); // un poco más de tiempo para ver la carta
        }
    }
}

// Funciones para cambiar de tipo de juego
function toAnimales(){
    reset();
    cards = animales;
    cards.sort(() => Math.random() - 0.5);
}

function toNumbers(){
    reset();
    cards = numeros;
    cards.sort(() => Math.random() - 0.5);
}

function toIngles(){
    reset();
    cards = ingles;
    cards.sort(() => Math.random() - 0.5);
}

function toCatalan(){
    reset();
    cards = catalan;
    cards.sort(() => Math.random() - 0.5);
}

// Reinicia el juego
function reset(){
    cartas = document.querySelectorAll(".carta");
    cartasMostrar = 0;
    cartas.forEach(carta => {
        carta.innerHTML = '';
        carta.disabled = false;
        carta.classList.remove('correcta'); // eliminar color verde
    });
}
