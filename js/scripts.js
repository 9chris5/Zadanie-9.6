var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(e) {
    var element = document.createElement('li');
    var listItems = document.getElementsByTagName('li');
    element.innerHTML = 'item ' + listItems.length;
    list.appendChild(element);
});