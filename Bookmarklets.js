//Bookmarklets in chrome are synced across different browsers
//when logged in. Create a Bookmarklet in following format
//then save it in the bookmarks of browser

javascript: (function () { alert('hello'); })()



//Bookmarklet for creating 100 todos

javascript: (function () {

    for (x = 1; x <= 100; x++) {
        setTimeout(
            function (name) {
                document.querySelector("input.new-todo").value = name;
                document.querySelector("input.new-todo").dispatchEvent(new Event('change', { 'bubbles': true }))
            }
            , x * 100, "todo " + x)
    }

})()


//Creating todos with user prompt

javascript: (function () {

    max = prompt('how many?');
    if (max) {
        for (x = 1; x <= max; x++) {
            setTimeout(
                function (name) {
                    document.querySelector("input.new-todo").value = name;
                    document.querySelector("input.new-todo").dispatchEvent(new Event('change', { 'bubbles': true }))
                }
                , x * 100, "todo " + x)
        }
    }

})()