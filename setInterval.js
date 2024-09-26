//setTimeOut runs code after a specific time
//setInterval runs same block of code repeatedly after set interval
//setInterval can be used for autonomous bots
//setInterval is assigned to a variable so that it can be stopped

var sayHello = setInterval(function () { console.log('hello'), 1000 })
clearInterval(sayHello) //Run this to stop running sayHello or 
//refresh page to stop it



//Creating 100 todos using setInterval
var botTodoCount = 0;

var creatorBot = setInterval(function () {

    document.querySelector("input.new-todo").value = 'todo ' + botTodoCount;
    document.querySelector("input.new-todo").dispatchEvent(new Event('change', { 'bubbles': true }))

    botTodoCount++;

    if (botTodoCount >= 100) {
        clearInterval(creatorBot);
    }

}, 500)