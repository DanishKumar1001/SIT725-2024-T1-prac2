var initialText = "SIT 725";

function changeText() {
    var heading = document.getElementById("heading");
    heading.textContent = "Task Requirements fulfilled.!";
}

function resetText() {
    var heading = document.getElementById("heading");
    heading.textContent = initialText;
}