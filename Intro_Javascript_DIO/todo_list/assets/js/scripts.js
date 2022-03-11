
var form = document.getElementById('tarefa-form');

function mypopup(){  


    var atividade = document.createElement("input");
    atividade.type = "text";
    atividade.id = "atividadeListada";     
     
}





function adicionarTarefa(){
    var lista = document.getElementById("lista-de-itens");
    var li = document.createElement("li");
    li.className = "item-da-todo-list";
    
    var checkbox = document.createElement('input');    
    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "listatodocheck[]";
    checkbox.className = "checkbox";

    var linha = document.createElement("hr");

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode("Create a To Do List"));
    lista.appendChild(li);
    lista.append(linha);
}