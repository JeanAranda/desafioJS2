//Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo(){
    console.log("¡Hola, mundo!");
}
saludo();
//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function nombre(){
    let name = prompt('Ingrese su nombre: ');
    console.log(`¡Hola, ${name}!`);
}
nombre();
//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function calcularDoble(numero) {
    return numero * 2;
  }
  
  let resultadoDoble = calcularDoble(5);
  console.log(resultadoDoble);
//Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(a, b, c) {
    return (a + b + c) / 3;
  }
  
  let promedio = calcularPromedio(4, 7, 10);
  console.log(promedio);
//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function encontrarMayor(a, b) {
    return a > b ? a : b;
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);
//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero) {
    return numero * numero;
  }
  
  let resultado = cuadrado(2);
  console.log(resultado);