let cartasMostrar = 0;
let cartas1 = null;
let cartas2 = null;
let resultado1 = null;
let resultado2 = null;
let cards;
let cartas;

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
let animales = ["Perro","Perro","Gato","Gato","Pajaro","Pajaro","Tortuga","Tortuga","Conejo","Conejo","Pez","Pez","Loro","Loro","Ratón","Ratón"]
let ingles = ["Red","Red","Yellow","Yellow","Blue","Blue","Green","Green","Black","Black","Orange","Orange","Pink","Pink","Purple","Purple"]
let catalan = ["Llimona","Llimona","Poma","Poma","Síndria","Síndria","Cireres","Cireres","Raïms","Raïms","Maduixas","Maduixas","Taronja","Taronja","Plàtan","Plátan"]


cards = numeros;
cards = cards.sort(()=>{return Math.random()-0.5});

function mostrar(id){
    console.log(id)
    console.log(cards)
    
    cartasMostrar++;
    
    if(cartasMostrar == 1){
        cartas1 = document.getElementById(id);
        resultado1 = cards[id];
        cartas1.innerHTML = resultado1;
        cartas1.disabled=true;

    }else if(cartasMostrar == 2){
        cartas2 = document.getElementById(id);
        resultado2 = cards[id];
        cartas2.innerHTML = resultado2;
        cartas2.disabled=true;

        if(resultado1 == resultado2){
        cartasMostrar = 0;
        } else{
            setTimeout(()=>{
                cartas1.innerHTML = '';
                cartas2.innerHTML = '';
                cartas1.disabled = false;
                cartas2.disabled = false;
                cartasMostrar = 0;
            },300);
        }
    }
}

function toAnimales(){
    reset();
    cards=animales;
    cards.sort(()=>{return Math.random()-0.5});
    
}

function toNumbers(){
    reset();
    cards=numeros;
    cards.sort(()=>{return Math.random()-0.5});
}

function toIngles(){
    reset();
    cards=ingles;
    cards.sort(()=>{return Math.random()-0.5});
}

function toCatalan(){
    reset();
    cards = catalan;
    cards.sort(()=>{return Math.random()-0.5});
}
function reset(){
    cards.sort(()=>{return Math.random()-0.5});

    cartas=document.querySelectorAll(".carta");

    cartasMostrar = 0;

    cartas.forEach(carta => {
        carta.innerHTML = '';
        carta.disabled = false;

    });
    
    
}