const names = [];
window.onload = PrintNames()

function PrintNames(){
    let box = '';
    if(document.getElementById("you").addEventListener(onclick)){
        for(let i = 0; i < names.length; i++){
            box += "You:" + ' ' + names[i] + '<br>';
        }
    }
    if(document.getElementById("tulga").addEventListener(onclick)){
        for(let i = 0; i < names.length; i++){
            box += "Tulga:" + ' ' + names[i] + '<br>';
        }
    }
    document.getElementById('list').innerHTML = box;

}
function SaveName(){
    let newname = document.getElementById('newname').value;
    names.push(newname)
    PrintNames()
    document.getElementById(newname).value = " ";
}