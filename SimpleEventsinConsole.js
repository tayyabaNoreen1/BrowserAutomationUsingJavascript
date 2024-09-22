//To click on Toggle all button
document.querySelector('#toggle-all').click()

//Find element by id and click it
document.getElementById('toggle-all').click()

//To check/uncheck specific item in todo list
document.querySelector('ul.todo-list > li:nth-child(2) input.toggle').click()

//To delete item in todo list without hovering over the delete button
document.querySelector('ul.todo-list > li:nth-child(2) button.destroy').click()

//To click on 'Clear completed' button
document.querySelector('button.clear-completed').click()

//Apply filter 'All' to view all items in the list
document.querySelector('ul.filters > li:nth-child(1) > a').click()

//Apply filter 'Active' to view active items in the list
document.querySelector('ul.filters > li:nth-child(2) > a').click()

//Apply filter 'Completed' to view done items in the list
document.querySelector('ul.filters > li:nth-child(3) > a').click()

//To apply filters using hash change event i.e. event that changes fragment of url when fired
location.hash = "/"
location.hash = "/active"
location.hash = "/completed"
