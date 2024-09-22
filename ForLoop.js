//Simple For loop to print on console
for (var counter = 1; counter <= 10; counter++) {
    console.log("hello " + counter);
}


//For loop to toggle all items in the list
var toggles = document.querySelectorAll('.toggle');

for (togglePos = 0; togglePos < toggles.length; togglePos++) {
    toggles[togglePos].click();
}