//We dont want to define functions using javascript which have same 
//name to the functions in code because then our functions could overwrite the code.
// To avoid that we create objects.
//Objects are simply functions in javascript.



var autoTodo = new function () {

    /* A private function that will only run within the autoTodo and 
    it is not accessible anywhere outside:

    function clickItem(item) {
        item.click();
    }
        */

    //Making clickItem public function
    this.clickItem = function (item) {
        item.click();
    }


    //Public function to toggle all items
    this.toggleAll = function () {
        document.querySelector('#toggle-all').click();
    }

    //Public function to select particular item in the list
    this.selectItemX = function (x) {
        document.querySelector("ul.todo-list > li:nth-child(" + x + ") input.toggle").click();
    }

    //Public function to delete particular item from the list
    this.deleteItemX = function (x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy').click();

    }


    //Public function to clear completed items
    this.clearCompleted = function () {
        document.querySelector('.clear-completed').click();
    }


    //Public function to filter completed items
    this.filterCompleted = function () {
        location.hash = "/completed";
    }


    //Public function to filter all items
    this.filterAll = function () {
        location.hash = "/";
    }


    //Public function to filter active items
    this.filterActive = function () {
        location.hash = "/active";
    }


    //Public function to create new item
    this.createTodo = function (name) {
        document.querySelector('input.new-todo').value = name;
        document.querySelector('input.new-todo').dispatchEvent(new Event('change', { 'bubbles': true }));
    }


    //Public function to update an item
    this.updateItemX = function (x, name) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', { 'bubbles': true }));
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = name;
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
    }


    //Public function to add more text to existing item name
    this.addNameItemX = function (x, name) {
        const currentValue = document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').textContent;
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') > div > label').dispatchEvent(new Event('dblclick', { 'bubbles': true }));
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').value = currentValue + ' ' + name;
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') .edit').dispatchEvent(new Event('blur'));
    }

}




//Now we can call any of the functions of autoToDo object in console like this:
autoTodo.clearCompleted()


