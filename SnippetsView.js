//Snippets view features:
//(i) IT does not provide code completion but console does.
//(ii) Snippet view can make code prettier by clicking []
//(iii) Code debuggingcan be done in snippet view


//Practice run for Toggle all items in Snippet view and debugging code
var toggles = document.querySelectorAll('.toggle');

for (togglePos = 0; togglePos < toggles.length; togglePos++) {
    toggles[togglePos].click();
}