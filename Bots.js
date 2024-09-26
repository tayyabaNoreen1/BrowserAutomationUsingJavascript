//Every object in JavaScript is a function.
//A function is also essentially an array.
//Following will get all the properties on autoTodo
//this is using array indexing as elemtns of array.
//So to access all functions in
//autoToDo, we can use following which will print 
//names of all functions in autoTodo:

for (var prop in autoTodo) {
    if (typeof autoTodo[prop] == 'function') { console.log(prop) }
}

//Creating bot that will wrap all functions
//of autoTodo

var rando = new function () {

    //Private function to generate random number
    function getRandomInt(x) {
        return Math.floor(Math.random() * x);
    }

    //Private function to get random item from list  
    function getRandomItemIndex() {
        max = document.querySelectorAll("ul.todo-list li").length;
        if (max === 0) {
            console.log("no items to choose from");
            return 0;
        }
        x = getRandomInt(max) + 1;
        return x;
    }


    //Public wrapper functions for all properties of autoTodo

    this.selectRandomItem = function () {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("select item " + x);
            autoTodo.selectItemX(x);
        }
    }

    this.toggleAll = function () {
        ;
        console.log("toggle all");
        autoTodo.toggleAll();
    }

    this.deleteRandomItem = function () {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("delete item " + x);
            autoTodo.deleteItemX(x);
        }
    }

    this.clearCompleted = function () {
        console.log("clear completed");
        autoTodo.clearCompleted();
    }

    this.filterAll = function () {
        console.log("filter all");
        autoTodo.filterAll();
    }

    this.filterActive = function () {
        console.log("filter active");
        autoTodo.filterActive();
    }

    this.filterCompleted = function () {
        console.log("filter completed");
        autoTodo.filterCompleted();
    }

    this.createRandomTodo = function () {
        console.log("create todo");
        autoTodo.createTodo("random todo " + Date.now());
    }

    this.amendRandomTodo = function () {
        x = getRandomItemIndex();
        if (x > 0) {
            console.log("amend todo" + x);
            autoTodo.updateItemX(x, "amended random todo " + Date.now());
        }
    }

}

//Creating bot that will randomly execute
//functions of rando bot:

var theFunctions = [];

for (var prop in rando) {
    if (typeof rando[prop] == 'function') {
        theFunctions.push(prop)
    }
}

var randomFunctionIndex = Math.floor(Math.random() * theFunctions.length);

//Torandomly execute a function of rando bot:
//rando[theFunctions[randomFunctionIndex]](); 


//To randomly execute functions of rando bot after set ineterval:

var randoBot = setInterval(function () {

    var theFunctions = [];

    for (var prop in rando) {
        if (typeof rando[prop] == 'function') {
            theFunctions.push(prop)
        }
    }

    var randomFunctionIndex = Math.floor(Math.random() * theFunctions.length);

    rando[theFunctions[randomFunctionIndex]]();

}, 1000);


//Use this is console to stop  the bot:
//clearInterval(randoBot)
