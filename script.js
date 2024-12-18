const select = document.querySelector("select");
const iframe = document.querySelector("iframe");

select.addEventListener("change", setIframe)

function setIframe() {
    const choice = select.value;

    if (choice === "basic/index.html") {
        iframe.src = this.value;
        iframe.style.height = "800px";
    } else if (choice === "transform/index.html") {
        iframe.src = this.value;
        iframe.style.height = "800px";
    } else if (choice === "advanced/index.html") {
        iframe.src = this.value;
        iframe.style.height = "800px";
    } else {
        iframe.src = "";
    }
}