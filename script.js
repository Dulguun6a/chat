const names = [];
window.onload = PrintNames()

function PrintNames(){
    let box = ' ';
    let box2 = ' ';
        for(let i = 0; i < names.length; i++){
            box += "You:" + ' ' + names[i] + '<br>';
        }
    document.getElementById('list').innerHTML = box;
        for(let i = 0; i < names.length; i++){
            box2 += "Dulguun:" + ' ' + names[i] + '<br>';
        }
    document.getElementById('list2').innerHTML = box2;
    }
function PrintNames2(){
        let box = ' ';
        let box2 = ' ';
            for(let i = 0; i < names.length; i++){
                box += "Orgil:" + ' ' + names[i] + '<br>';
            }
        document.getElementById('list').innerHTML = box;
            for(let i = 0; i < names.length; i++){
                box2 += "You:" + ' ' + names[i] + '<br>';
            }
        document.getElementById('list2').innerHTML = box2;
        }
function SaveName(){
    let newname = document.getElementById('newname').value;
    names.push(newname)
    PrintNames()
    document.getElementById('newname').value = "";
}
function SaveName2(){
    let newname2 = document.getElementById('newname2').value;
    names.push(newname2)
    PrintNames2()
    document.getElementById('newname2').value = "";
}