// function saludar(nombre) {
//     console.log("Hola" + "")
// }

// function capturarNombreUsuario (callback) {
//     let dato = prompt('Ingresa tu Nombre')
//     callback(dato)
// }
// capturarNombreUsuario(saludar)

const suma = (mole, atole) => {
    return mole+atole
}
 const isNumber = (suma, mole, atole) => {
     if (isNaN(mole||atole)) {
        console.log('no es un numero')
     }else {
        console.log(suma(mole, atole))
     }
 }

 isNumber(suma, 7, 33)

//  console.log(isNumber(suma(5, "a")))

// function greeting(name) { //funcion Fx = name... esta funcion se llama greeting y contiene como argumento el nombre
//     alert('hello' + " " + name); //Fx = K + name... falta definir el nombre, se realizara a travez de un prompt en la siguiente funcion
// }

// function processUserInput(callback) { // Fx = callback donde callback define su valor a travez de un prompt. toda esta funcion se llama processUserInput
//     let name = prompt("Ingresa tu nombre"); //abre la ventanilla prompt
//     callback(name); //para mandarla llamar la funcion donde el argmento de callback es name
// }
// processUserInput(greeting); // esto es para mandar llamar la funcion donde greeting pasa a ser un argumento de processUserInput



// const userName = names;
// names = alert(prompt("Ingresa tu nombre"));
// alert("Bienvenido" + " " + names)

//crear dos funciones. 1 con donde se defina el alert y mensaje y otra donde se defina el nombre
// function greetings(name) {
//     alert(prompt("Bienvenido" + " " + name));
// }

// function userName(user) {
//     let name = alert(prompt("Introduce tu Nombre"));
// }


// const saludar = (saludo, str) => {
//     let strtoUpper = str.toUpperCase();
//     return saludo(strtoUpper)
// }

// const printGreetings = strtoUpper => {
//     console.log(strtoUpper);
// }

// saludar(printGreetings, "maick")


// let printName = (nombre) => {
//     console.log(nombre);
// }

// let userName = (printCB, string) => {
//     let nombre = string.toUpperCase();
//     return printCB(nombre)
// }
// userName(printName, "hola");

const saludar = (printCB, string) => {
    let stringUCase = string.toUpperCase();
    return printCB(stringUCase);
}

const greetings = (stringUCase) => {
    console.log(stringUCase);
}

setTimeout(() => {saludar(greetings, "que ondas!!")}, 3000);








//ahora agregar en la funcion saudar un setTimeOut de 4 segundos
//dentro del setTimeOut agregar el resultado que se pasa al callback
//mandar a llamar la funcion saludar
//debajo de la funcion saludar agregar un console.log el cual debe decir "final"
//cual fue el ultimo mensaje en la consola?
setTimeout(() => {
    console.log("Hola Miguel");
}, 3000);



