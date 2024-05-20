//Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
// Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay.
import * as rls from "readline-sync";
let numElegidos:number=rls.questionInt(`Indique la cantidad de numeros del arreglo : `);
let tamanioArreglo:number[]=new Array(numElegidos);
let indice:number;
let numPositivos:number=0;
let numNegativos:number=0;
let numCero:number=0;

for(let indice = 0; indice<numElegidos; indice++){
    tamanioArreglo[indice]=rls.questionInt(`Inserte los numeros : `);
}; 

for (indice=0; indice<numElegidos;indice++){
    if (tamanioArreglo[indice] <0){
        numNegativos++;
    } else if (tamanioArreglo[indice]==0){
        numCero++;
    }else {
        numPositivos++;
    }
    
};

console.log(`Hay ${numNegativos} negativos, ${numPositivos} positivos y ${numCero} ceros.`);
