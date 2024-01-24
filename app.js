let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafio';

function muestraConsola(){
    alert('El botón console fue clicado');
};

function insertaPromp(){
    ciudad = prompt('Ingresa el nombre de una ciudad de Perú');    
    alert(`Estuve en ${ciudad} y me acordé de ti`);
};

function alertJS(){
    alert('Yo amo JS');
}

function botonSuma(){
    sumar1 = parseInt(prompt('Escribe el primer número'));
    sumar2 = parseInt(prompt('Escribe el segundo número'));
    resultado = sumar1+sumar2;
    alert(`El resultado de la suma de, ${sumar1}+${sumar2}=${resultado}`);
}