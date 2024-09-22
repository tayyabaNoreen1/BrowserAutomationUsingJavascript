//Helpers file in snippet view

//Function to click an item
function clickItem(item) {
    item.click();
}

//Function to toggle all items
function toggleAll() {
    document.querySelector('#toggle-all').click();
}

//Function to select particular item in the list
function selectItemX(x) {
    document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
}

//Function to delete particular item from the list
function deleteItemX(x) {
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy').click();

}


//Function to clear completed items
function clearCompleted() {
    document.querySelector('.clear-completed').click();
}


//Function to filter completed items
function filterCompleted() {
    location.hash = "/completed";
}


//Function to filter all items
function filterAll() {
    location.hash = "/";
}


//Function to filter active items
function filterActive() {
    location.hash = "/active";
}


//Function to create new item
function createTodo(name) {
    document.querySelector('input.new-todo').value = name;
    document.querySelector('input.new-todo').dispatchEvent(new Event('change', { 'bubbles': true }));
}


//Function to update an item
function updateItemX(x, name) {
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', { 'bubbles': true }));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = name;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}


//Function to add more text to existing item name
function addNameItemX(x, name) {
    const currentValue = document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').textContent;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', { 'bubbles': true }));
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = currentValue + ' ' + name;
    document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
}



//==================
//Calling the functions in Console


//Calling clickItem() to toggle all items
var toggles = document.querySelectorAll('.toggle');
toggles.forEach(clickItem)


//Calling selectItemX() function
selectItemX(1)


//Calling deleteItemX() function
deleteItemX(2)


//Calling clearCompleted() function
clearCompleted()


//Calling filterCompleted() function
filterCompleted()


//Calling filterAll() function
filterAll()


//Calling filterActive() function
filterActive()


//Calling createTodo(name) function
createTodo('item2')


//Calling updateItemX(x, name) function
updateItemX(2, 'itemUpdated')


//Calling addNameItemX(x, name) function
addNameItemX(5, ' with more text')