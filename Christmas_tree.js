"use strict"

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней

for (let i = 0; i <= lines; i++){
    for(let j = lines; j > i; j--){
        result = result + ' ';
    }
    for(let k = 0; k <= i*2; k += 1)
    {
        result = result + '*';
    }
    
    result = result + '\n';
}
console.log(result);