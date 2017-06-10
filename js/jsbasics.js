start();

function start() {
    var insertButton = document.getElementById('insert');
    insertButton.onclick = insertElement;
}

function insertElement() {
    var nameInputText = document.getElementById('name');
    var newListItem = document.createElement('li');
    var newTextNode = document.createTextNode(nameInputText.value);
    newListItem.appendChild(newTextNode);
    var list = document.getElementById('list');
    list.appendChild(newListItem);
    nameInputText.value = null;
    nameInputText.focus();
}