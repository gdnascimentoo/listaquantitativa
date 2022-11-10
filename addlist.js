var orderin = document.getElementById('order-register');
window.addEventListener('keydown', addItem)
orderin.addEventListener('focus', attorder)
var order = 1;

var listItem = [""];
var listQuantity = [0];



function addItem(){

    let itemout, qttout, addrow;
    let table = document.getElementById('tabelaitens');
    let itemin = document.getElementById('itemin');
    let qttin = document.getElementById('qttin');
    let key = event.key;

    if(key == "Enter"){

        if(itemin.value != ""){
            itemout = itemin.value;
        }else{
            //adicionar dropdown falando sobre ser obrigatório
        }

        if(qttin.value > 0){
            qttout = qttin.value;
        }else{
            //adicionar dropdown falando sobre ser obrigatório
        }

        if((itemout != undefined) && (qttout != undefined)){

            addrow = "<td class=\"order\">" + order + "</td><td class=\"item\">" + itemout + "</td><td class=\"quantity\">" + qttout + "</td>";

            table.innerHTML += addrow;

            
        }
        
    }

    

}

function attorder(){

    order++;
    orderin.innerHTML = order;

}