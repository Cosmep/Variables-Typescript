//Practica 1. 

//Ejercicio 1: Declarar Variables con Tipos Básicos. Objetivo: Declarar variables utilizando los tipos básicos en TypeScript (string, number, boolean) y observar la inferencia de tipos.

//Declara una variable nombre de tipo string y asignale tu nombre.
let nombre: string = "Cosme";

//Declara una variable edad de tipo number asignale tu edad.
let edad: number = 42;

//Declara una variable estaActivo tipo boolean para indicar si estas activo o no.
let estaActivo: boolean = true;

console.log((nombre), (edad), (estaActivo));

//Ejercicio 2: Uso de const y let. Objetivo: Practicar la declaración de variables con const y let, entendiendo cuándo utilizar cada uno.

//Declara una constante PI de tipo number y asígnale el valor 3.14.
const pi = (3.14)

//Intenta reasignar un nuevo valor a PI y observa el error.
//const pi = (2.0) ERROR: No se puede volver a declarar la variable con ámbito de bloque pi

//Declara una variable contador con let que inicialmente sea 0 y luego increméntala.
let contador: number = 0;

contador++;

console.log((pi), (contador));

//Ejercicio 3: Tipos Unión. Objetivo: Entender y aplicar los tipos unión para permitir múltiples tipos en una variable.

//Declara una variable identificador que pueda ser tanto number como string.
//Asigna un número y luego un string a identificador.

let number_string: any = 2;
number_string = 5;
number_string = "hola mundo,";

// Otra forma
let identificador: number | string;

identificador = 100;
identificador = "Te cambie de number a string ";

console.log((number_string), (identificador));

//Ejercicio 4: Arrays y Tuplas. Objetivo: Declarar un array y una tupla, comprendiendo sus diferencias y casos de uso.

//Declara un array hobbies que contenga strings.
let hobbies: string[] = ["Montar MTB", "Video Juegos", "Correr"];

//Declara una tupla usuario que contenga un string(nombre) y un number(edad).
let usuario: [string, number] = ["Cosme", 42];

console.log((hobbies), (usuario));

