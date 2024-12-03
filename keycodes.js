document.addEventListener("keydown", processKeyEvent);
const code = document.getElementById("code");
const which = document.getElementById("which");
const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");
const keyPressed = document.getElementById("key-pressed");

function processKeyEvent(e) {
    // console.log(e);
    // if (e.code == "Enter") {
    //     document.body.style.backgroundColor = "lightcoral"; 
    // }
    if (e.code) {
        code.innerText = e.code;
    }
    if (e.which) {
        which.innerText = e.which;
    }
    if (e.key) {
        keyPressed.style.fontSize = "100px";
        key.innerText = e.key;
        if (e.key == "Enter") {
            keyPressed.innerText = "↵";
        }
        // else if (e.key == "ArrowUp") {
        //     keyPressed.innerText = "⇧";
        // }
        // else if (e.key == "ArrowLeft") {
        //     keyPressed.innerText = "⇦";
        // }
        // else if (e.key == "ArrowDown") {
        //     keyPressed.innerText = "⇩";
        // }
        // else if (e.key == "ArrowRight") {
        //     keyPressed.innerText = "⇨";
        // }
        else {
            if (e.key.length > 1) {
                keyPressed.style.fontSize = "30px";
            } 
            keyPressed.innerText = e.key;
        }
    }
    if (e.keyCode) {
        keyCode.innerText = e.keyCode;
    }
}
