
/* PRIMERA PARTE DEL DESAFIO---------------------------------------------------------------- */

/* EJERCICIO 1 -------------------------------------*/

/* const numero = parseInt (prompt('Ingresa un número'));

if (numero > 0) {
    alert ('El número ingresado is positivo')
}

else {
    alert ('El número ingresado es negativo')
} */


/* EJERCICIO 2 -------------------------------------*/

/* const number = parseInt (prompt ('Ingresa un número por favor'));

if (number % 2 === 0) {
    alert ('El número es divisible entre dos')}

else {
    alert ('El número no es divisible entre dos')
} */
    
/* EJERCICIO 3 --------------------------------------*/

/* const consulta = prompt ('Ingrese el primer número por favor');
const consultaDos = prompt ('Ingrese el segundo número por favor');

if (consulta < consultaDos) {
    alert ('El número ' +  consulta + ' es el menor');
}

else {
    alert ('El número ' +  consultaDos + ' es el menor');
} */

/* EJERCICIO 4 ----------------------------------------- */



/* EJERCICIO 5 ----------------------------------------- */

/* const fechaNacimiento = parseInt (prompt ('En qué año nació el trabajador'));
const ayoActual = 2023;

const edadDelPostulante = ayoActual - fechaNacimiento;

console.log(`La persona tiene ${edadDelPostulante}`) */


/* EJERCICIO 6 ----------------------------------------- */

/* const number1 = prompt ('Ingresa el primer número');
const number2 = prompt ('Ingresa el segundo número');
const number3 = prompt ('Ingresa el tercer número');

if (number1 >= number2 && number1 >= number3){
    alert (`El ${number1} es el mayor`);
}  

else if (number2 >= number1 && number2 >= number3){
    alert (`El ${number2} es el mayor`);
}

else {
    alert (`El ${number3} es el mayor`);
} */
 
/* EJERCICIO 7 ----------------------------------------- */

/* const diaSemana = prompt ('Ingresar un día de la semana').toLowerCase();

if (diaSemana === "lunes"){
    alert ('Buen inicio de semana')
}

else if (diaSemana === "viernes"){
    alert ('Buen viernes')
}

else if (diaSemana === "sabado" || diaSemana === "domingo") {
    alert ('Buen fin de semana')
}

else {
    alert ('Hoy es un lindo día')
}  */


/* EJERCICIO 8 ----------------------------------------- */



/* EJERCICIO 9 ----------------------------------------- */

/* const edadVotar = parseInt (prompt ('Ingrese su edad por favor'));

if (isNaN (edadVotar)){
    alert ('Ingrese un número válido')
}

else if (edadVotar >= 18) {
    alert ('Usted puede votar');
}

else {
    alert ('usted no puede votar')
} */

/* EJERCICIO 11 ----------------------------------------- */

/* const antiguedad = parseInt(prompt('Ingresar el tiempo de antiguedad del trabajador en años'))

let bono = 0;

if (antiguedad === 1) {
    bono = 100;
}

else if (antiguedad === 2) {
        bono = 200;
}

else if (antiguedad === 3) {
    bono = 300;
}

else if (antiguedad === 4) {
    bono = 400;
}

else if (antiguedad === 5) {
    bono = 500;
}

else if (antiguedad > 5){
    bono = 1000;
}

console.log(`El empleado obtendrá ${bono} de bono`); */


/* EJERCICIO 12 ------------------------------------------------------- */


/* EJERCICIO 13 ------------------------------------------------------- */

/* const precioBasico = 50;

const toppingSeleccionado = prompt("¿Qué topping desea añadir a su pedido (oreo, kitkat o brownie?").toLowerCase();

let precioTopping = 0;


if (toppingSeleccionado === 'oreo' || toppingSeleccionado === 'kitkat' || toppingSeleccionado === 'brownie') {

    if (toppingSeleccionado === 'oreo'){
        precioTopping = 10;
    }
    
    else if (toppingSeleccionado === 'kitkat'){
        precioTopping = 15;
    }
    
    else if (toppingSeleccionado === 'brownie'){
        precioTopping = 20;
    }

    let precioTotal = precioBasico + precioTopping;
    alert(`${precioTotal}`);
}

else {
    alert('No tenemos este topping , lo sentimos.');
    alert (`El precio del helado sin topping es de ${precioBasico}`);   
}
 */
/* SEGUNDA PARTE DEL DESAFIO--------------------------------------------------


EJERCICIO 1---------------------------------------------------------------- */

/* const contrasenaUsuario = "carlos";
const contrasenaTipeada = prompt("Ingrese su contraseña");

if (contrasenaUsuario.toLowerCase() === contrasenaTipeada.toLowerCase()) {
    alert("La contraseña es correcta")
}

else {
    alert("La contraseña es incorrecta. Inténtelo de nuevo por favor");
} */

/* EJERCICIO 2------------------------------------------------------- */

/* const edad = parseInt(prompt('Por favor, ingrese su edad'));
const ingresosMes = parseFloat(prompt('Por favor, ingrese su sueldo mensual'));

if (edad >= 18 && ingresosMes >= 1000) {
 alert ('Usted puede tributar');
}

else {
    alert ('Usted no puede tributar');
}
 */
/* EJERCICIO 3 --------------------------------------------------------- */

/* const nombre = prompt("Ingresa tu nombre");
const sexo = prompt("Ingresa tu sexo (Indica si eres mujer u hombre)").toLowerCase();

let grupo;

if ((sexo === "mujer" && nombre < 'm') || (sexo === "hombre" && nombre >= 'n') ) {
    grupo = 'A';
}

else {
    grupo = 'B';
}

if (grupo === 'A'){
    alert("Eres parte del grupo A");
}

if (grupo === 'B'){
    alert("Eres parte del grupo B");
} */

/* EJERCICIO 4 --------------------------------------------------------- */

// Pedir al usuario dos números enteros

/* const numero1 = parseInt(prompt("Ingrese el primero número entero"));
const numero2 = parseInt(prompt("Ingrese el segundo número entero"));

if (numero1 % numero2 === 0){

    console.log('El número 1 es mayor y múltiplo de 2');

}

else if (numero2 % numero1 ===0){
    console.log('El número 2 es mayor y múltiplo de 1');
}

else {
    console.log('Los números no son múltiplos');
} */


/* EJERCICIO 5 --------------------------------------------------------- */

/* const tarifaGratis = 0;
const tarifaMenor = 5;
const tarifaMayor = 10;

const edad  = parseInt(prompt("Ingrese su edad"));

if (edad < 4) {
    alert("Usted puede entrar gratis :)");
}

else if (edad > 4 && edad <= 18) {
    alert(`El precio de su entrada es de ${tarifaMenor}`);
}

else if (edad > 18) {
    alert(`El precio de su entrada es de ${tarifaMayor}`);
}

else{
    alert("Ingrese una edad valida")
} */

/* EJERCICIO 6 --------------------------------------------------------- */

/* Crea un programa que pida al usuario el diámetro de una rueda y su grosor (en metros) y a través de condicionales if realice las siguientes operaciones: a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje “La rueda es para un vehículo pequeño”. b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado” */


const diametroRueda = parseFloat(prompt('¿Cuál es el diámetro de la rueda'));
const grosorRueda = parseFloat(prompt('¿Cuál es el grosor de la rueda'));

/* EJERCICIO A */

/* if (diametroRueda > 1.4){
    alert("La rueda es para un vehículo grande");
}

else if (diametroRueda <= 1.4 && diametroRueda > 0.8){
    alert("La rueda es para un vehículo mediano")
}

else {
    alert("La rueda es para un vehículo pequeño")
} */


/* EJERCICIO B */

if (diametroRueda > 1.4 && grosorRueda < 0.4 || diametroRueda <= 1.4 && diametroRueda > 0.8 && grosorRueda < 0.25){
    alert("El grosor de esta rueda es inferior al recomendado");
}




