const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const textareaJS = document.querySelector(".playable-js");
const reset = document.getElementById("reset");

let jsCode = textareaJS.value;

function fillCode() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    eval(textareaJS.value);
}

reset.addEventListener("click", () => {
    textareaJS.value = jsCode;
    fillCode();
});

textareaJS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);