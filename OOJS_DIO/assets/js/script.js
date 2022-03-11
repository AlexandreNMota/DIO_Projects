
/*
class ContaBancaria{
    constructor(
        agencia,
        numero,
        tipo){
            this.agencia = agencia;
            this.numero = numero;
            this.tipo = tipo;
            this._saldo = 0;
        }


        // getter and Setter de Saldo
        get saldo(){
            return this._saldo;
        }

        set saldo(newSaldo){
            if (newSaldo !== typeof(1)){
                throw 'Entre com um saldo válido'
            }
            this._saldo = newSaldo;
        }

        // Método Sacar
        sacar(valor){
            if (valor > this._saldo){
                return "Operação negada"
            }            
            this._saldo =   this._saldo - valor;
            return this._saldo;
        }

        // método depositar
        depositar(valor){
            this._saldo = this._saldo + valor;
            return this._saldo;
        }

};
// classe filha
class ContaCorrente extends ContaBancaria{
    constructor( agencia,numero, cartaoCredito, tipo='corrente'){
        super(agencia,numero);
        this.tipo = tipo;
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
};


class ContaPoupanca extends ContaBancaria{
    constructor( agencia,numero, tipo='poupança'){
        super(agencia,numero);
        this.tipo = tipo;        
    };    
};

class ContaUniversitaria extends ContaBancaria{
    constructor( agencia,numero, tipo='universitaria'){
        super(agencia,numero);
        this.tipo = tipo;        
    };  
    
    sacar(valor){        
        if (valor >= 500){
            return 'Limite máximo de 499,99 reais'
        }
        this._saldo = this._saldo - valor;
        return this._saldo;        
    };
};
*/
let maca = {
    value : 2,
}

let laranja = {
    value : 3,
}

let nums = [1, 2];
function mapComThis(array, thisArg){
    return array.map(function (item){
        return item * this.value;
    }, thisArg);
}
console.log('this -> maçã',  mapComThis(nums, maca));
console.log('this -> laranja',  mapComThis(nums, laranja));

function mapSemThis(array){
    return array.map(function (item){
        return item * 2;
    });
}
const newnums = [2,4,6,8,10];

console.log(mapSemThis(newnums));

function filtraPares (array){
    return array.filter(function (item){
        return item % 2 === 0;
    })
}

const baseArray = [1,2,3,4,5,6,7,8,9,10];

console.log('filtrado',mapSemThis(filtraPares(baseArray)));

// reduce
function somaValores (array){
    return array.reduce(function (prev, current){
       return prev + current; 
    });
}

console.log(somaValores([1,2,3]));

const carrinho = [
    {
        name : 'sabao em po',
        preco : 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name:'toalha',
        preco: 30
    }
];

saldoDisponivel = 100;

function compra (saldoDisponivel, carrinho){
    return carrinho.reduce( function (prev, current){
        return prev - current.preco;

    }, saldoDisponivel);
};



console.log(compra(saldoDisponivel, carrinho));

let arrayTags = document.getElementsByTagName('h1');
arrayTags = [...arrayTags];

arrayTags.map((item)=> item.addEventListener("mouseover", corAzul));
arrayTags.map((item)=> item.addEventListener("mouseout", corVermelha));

function corAzul (){
    return arrayTags.map(function (item){
        return item.style.color = 'blue';        
   });
};

function corVermelha (){
    return arrayTags.map(function (item){
        return item.style.color = 'red';        
    });
};
