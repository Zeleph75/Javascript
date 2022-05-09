// JavaScript source code
const txtToAdd = document.querySelector('#txt-to-add');
const pList = document.querySelector('#myList p');
const pArray = document.querySelector('#myArray p');
const myArray = ['une ligne','autre chose'];

function addText() {
    if (txtToAdd.value !== '') {
        pList.innerText += txtToAdd.value+ '\n'
        txtToAdd.value = '';
        
    }
    else {
        alert('Veuillez entrez un texte')
    }
    txtToAdd.focus();
}

