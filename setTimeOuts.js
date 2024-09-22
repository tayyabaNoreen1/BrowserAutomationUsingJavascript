//If we run code to create large number of items in todo
//It can create multiple items with same id when id should be unique
//This happens because we created multiple items in milliseconds using code
//We need to add delays to avoid this


//Function that will create duplicate items
for (x = 1; x <= 100; x++) {
    autoTodo.createTodo("todo " + x)
}

//Example of setTimeout to print text in console after 1000 ms
setTimeout(function () { console.log('hello') }, 1000);


//Following is call to function and not the function itself
//we call the function to create the todo; then, 
//in 1,000 milliseconds time we will call the return value from that function.
//There wasn't one.
setTimeout(autoTodo.createTodo("hello again"), 1000)


//To call function correctly
setTimeout(autoTodo.createTodo, 1000, "hello again again again")


//To create 100 todos with setTimeout
for (x = 1; x <= 100; x++) {
    setTimeout(autoTodo.createTodo, x * 100, "todo " + x)
}


//Code to create 100 items without helper object
function createTodo(name) {
    document.querySelector(`input.new-todo`).value = name;
    document.querySelector(`input.new-todo`).dispatchEvent(new Event('change', { 'bubbles': true }))
}

for (x = 1; x <= 100; x++) {
    setTimeout(createTodo, x * 100, "todo " + x)

}



//Self-contained code
for (x = 1; x <= 100; x++) {
    setTimeout(
        function (name) {
            document.querySelector("input.new-todo").value = name;
            document.querySelector("input.new-todo").dispatchEvent(new Event('change', { 'bubbles': true }))
        }
        , x * 100, "todo " + x)
}

