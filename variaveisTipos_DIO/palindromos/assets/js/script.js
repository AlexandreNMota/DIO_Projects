
/*
// Solução 1 p/ Palíndromo
function getPalindromo (string){
    
    if(!string || typeof(string) === typeof(1)){
        return "String inexistente";
    }

    return string.split("").reverse().join("") === string;

}
console.log(getPalindromo('ovo'));

// Solução 2 p/ Palíndromo
function getPalindromo2(string){
    if(!string || typeof(string) === typeof(1)){
        return "String Inexistente";
    }
    let reversedString = [];
    for (let i =0; i< string.length; i++){        
        reversedString.unshift(string[i]);
    }
    return reversedString.join("") === string;
}

console.log(getPalindromo2("gato"));

// Solução 1 - Substituir números pares
function replaceEvenNumbers(array){
    if(!array){
        return -1;
    }
    for (i=0; i<array.length; i++){
        if (array[i] % 2 === 0){
            array[i] = 0;
        }        
    }
    return array;
}

console.log(replaceEvenNumbers(null));
*/
/*
// Auto-invocável
const soma3 = (
    function(a,b){        
        return a+ b;
    }
)(1,2);

console.log(soma3);


// Callbacks and Spread
const calculo = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const newSoma = function(num1, num2){
    return num1 + num2;
}
let spreadTest = [1,12]
let somaTeste = calculo(newSoma, ...spreadTest);
console.log(somaTeste);

// rest teste

const subtracao = function(...args){
    let total = 0;
    for (let number of args){
        total -= number;
    }
    return total;
}

let restTest = calculo(subtracao, 2, 3);
console.log(restTest);


console.log(this.document.body.innerHTML)

// call p/ usar this

const myObj = {
    firstNumber: 2,
    secondNumber: 4,
}

function anotherSoma(a,b){
    console.log(this.firstNumber + this.secondNumber + a + b);
}

anotherSoma.call(myObj, 1, 5);
anotherSoma.apply(myObj, [1, 5]);

// BIND

const retornaNomes = function(){
    return this.nome;
};

let alexandre = retornaNomes.bind({nome: 'Alexandre'});

console.log(alexandre())
*/
// Prática média alunos
/*
let alunos = [
    {
        nome: 'Alexandre',
        media: 100},
    {
        nome: 'Helena',
        media: 100},
    {
        nome: 'João',
        media: 50}
    ];

function alunosAprovados(array, notaCorte){
    let aprovados = []
    for (let i of alunos){
        const {media, nome} = i
        if (media >= notaCorte){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 90));
*/
// Aula prática map e set
/*
let users = new Map([
    ['Alexandre', 'admin'],
    ['Helena', 'filha'],
    ['Sandro', 'pai']
]);
function getAdmins(map){
    let admins = [];
    for (let i of map){
        if (i[1] === 'admin'){
            admins.push(i);
        }          
    }
    return admins;
};

let admins = getAdmins(users);
console.log(admins);
// Set Exercise
let array = [30, 30,  40, 5, 223, 2049, 3034, 5];
let mySet = new Set(array);
console.log(mySet);
*/
/*
const MEU_ERRO = new Error('Mensagem Inválida');
MEU_ERRO.name = "InvalidMessage";
throw MEU_ERRO;
*/
function verificaTamanhoArray(array, num){
    
    try{
        if (!array || !num){
            const SEM_ARRAY = new ReferenceError("Nenhum array ou número verificador enviado como parâmetro de entrada da função");            
            throw SEM_ARRAY
        }
        
        if (typeof(array) !== 'object' ){
            const TIPO_ARRAY = new TypeError("Array precisa ser do tipo object");            
            throw TIPO_ARRAY;
        }
        
        if (typeof(num) !== 'number'){
            const TIPO_NUMBER = new TypeError("Precisa ter um número de entrada");
            throw TIPO_NUMBER;
        }

        if (array.length !== num){
            throw new RangeError('Tamanho inválido');
        }
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um reference error');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log('Este erro é um type error');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log('Este erro é um range error');
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else{
            console.log("Tipo de erro não localizado" +  e);
        }
    }
    return array;
}

console.log(verificaTamanhoArray());





