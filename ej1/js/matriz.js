"use strict";

const filas  = 99 ;
const columnas = 99;

let matriz = [];
for(let i = 0; i <= columnas; i++) {
    matriz[i] = [];

    for (let j=0; j <= columnas; j++ ){
        matriz[i][j] = Math.floor(Math.random() * 100);
    }

}
console.log (matriz);

maximo(matriz);

function maximo(){
    let maximo = 0;
    for(let i =0; i<filas; i++){
        for(let j=0; j< columnas; j++){
            if(matriz[i][j] > maximo){
                maximo = array[i][j];
            }
        }
    } 
    console.log(maximo);
}

function maximo_pares(){
    let maximo = 0;
    let minimo = 0;
    for(let i =0; i< filas; i++){
        for(let j=0; j< columnas; j++){
            if(i%2 == 0 && matriz[i][j] > maximo){
                maximo = array[i][j];
            }else if (i%2 != 0 && matriz[i][j] < minimo || minimo == 0){
                minimo = matriz[i][j];
            }
        }
    } 
    console.log("maximo:" + maximo );
    console.log("minimo:" + minimo );
}