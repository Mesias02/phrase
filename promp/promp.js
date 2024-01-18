'use strict'

// Vector de estudiantes
let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

// Ingresar un nombre con prompt
let userInput = prompt("Ingrese un nombre:");

// Verificar si el nombre ingresado se encuentra en el vector
if (students.includes(userInput)) {
  alert("El nombre se encuentra en el vector.");
} else {
  alert("El nombre no se encuentra en el vector.");
}