//Using if statement to toggle even number items in the to do list
var toggles = document.querySelectorAll('.toggle');

for (togglePos = 0; togglePos < toggles.length; togglePos++) {
    if (togglePos % 2 != 0) {
        toggles[togglePos].click();
    }

}


//Using For loop without if statement to toggle even number items in the to do list
var toggles = document.querySelectorAll('.toggle');

for (togglePos = 1; togglePos < toggles.length; togglePos += 2) {
    toggles[togglePos].click();
}


//Another if statement to toggle even number items in the to do list
var toggles = document.querySelectorAll('.toggle');
var toggleIt = false;
for (togglePos = 0; togglePos < toggles.length; togglePos++) {
    if (toggleIt) {
        toggles[togglePos].click();
    }
    toggleIt = !toggleIt;
}