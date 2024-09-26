//Go to sources > page > exmples folder > app.js
//There is a todo object but if we use it in console,
//we cannot access it
//To access it, set breakpoint in here at var todo
//Refresh page and now step over the breakpoint
//Now access todo in console, it is accessible
//If u run the source code till end, it will not remain accessible
//To keep it accessible, store it in a variable

myTodo = todo;

//now todo will remain accessible. so now run code till end.


//controller.js in source code, it can add item
//Write this in console to add item using this controller:

myTodo.controller.addItem('hello there');

//Using above, we are no longer triggering external events
//we are using the source code
//But after page refresh, we will loose this access
//This we we are not interacting with GUI like users do
//Use of events was on GUI
//But this way of directly using code is helpful in setting up
//lots of data