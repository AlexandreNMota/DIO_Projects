/*
function calculadora(){
    const  operacao = prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n   3- multiplicação (*)\n  4 - Divisão (/)\n  5 - Divisão inteira (%)\n   6 - Potenciação (**)\n");
    let n1 = prompt(" Input a value");
    let n2 = prompt("Input a value");
    let resultado;

    if (!operacao || operacao>=7){
        alert("Operação inválida - Primeiro erro");
        calculadora();
    }

    if (!n1 || !n2){
        alert("Operação inválida- Segundo Erro");
        calculadora();
    }

    function soma(){
        resultado = Number(n1) + Number(n2);
        console.log(resultado);
        alert(String(n1) + '+' +  String(n2) +  '=' + String(resultado) );
        novaop();
        }

    function subtracao(){
        resultado = Number(n1) - Number(n2);
        console.log(resultado);
        alert(String(n1) + '-' +  String(n2) +  '=' + String(resultado) );
        novaop();
        }

    function multiplicacao(){
        resultado = Number(n1) * Number(n2);
        console.log(resultado);
        alert(String(n1) + '*' +  String(n2) +  '=' + String(resultado) );
        novaop();
        }
    function divisaoReal(){
        resultado = Number(n1) / Number(n2);
        console.log(resultado);
        alert(String(n1) + '/' +  String(n2) +  '=' + String(resultado) );
        novaop();
        }
    function divisaoInteira(){
        resultado = Number(n1) % Number(n2);
        console.log(resultado);
        alert(String(n1) + '%' +  String(n2) +  '=' + String(resultado) );
        novaop();
        }
    function potenciacao(){
        resultado = Number(n1) ** Number(n2);
        console.log(resultado);
        alert(n1 + '**' +  n2 +  '=' + String(resultado) );
        novaop();
        }

    function novaop(){
        let opcao = prompt("Deseja fazer outra operação?\n 1 - SIM \n 2 - NÃO");

        if (opcao == 1){
            calculadora();
        } else if (opcao == 2){
            alert("Tchau")
        }
        else{
            alert("Deu Ruim");
            novaop();
        }
    }
    
    
    
    switch(operacao){
        case '1':
            soma();
            console.log("Opção 1");
            break;
        case '2':
            subtracao();
            break;
        case '3':
            multiplicacao();
            break;
        case '4':
            divisaoReal();
            break;
        case '5':
            divisaoInteira();
            break;
        case '6':
            potenciacao();
            break;
    }  
}
    
    




calculadora();
*/
var listanumeros = [];
var result;
function numberattribute(parametro){
    let arraynumerico = ['0','1','2','3','4','5','6','7','8','9'];    
    if (parametro in arraynumerico){    
        let x = Number(parametro);  
        listanumeros.push(x);  
        console.log(listanumeros);      
    } 
    else{
        switch(parametro){
            case '+':
                result = listanumeros.reduce((a,b)=> a+b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case '-':
                result = listanumeros.reduce((a,b)=> a-b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case '*':
                result = listanumeros.reduce((a,b)=> a*b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case '**':
                result = listanumeros.reduce((a,b)=> a**b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case '/':
                result = listanumeros.reduce((a,b)=> a/b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case '%':
                result = listanumeros.reduce((a,b)=> a%b);
                spanvisor = document.getElementById('visorspan');
                spanvisor.innerHTML = result;
                listanumeros = [];
                listanumeros.push(result);
                console.log(listanumeros);
                break;
            case 'C':
                listanumeros = [];
                spanvisor.innerHTML = 0;
        }
    }   
}
