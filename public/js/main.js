

function doOther() {
    let nam = prompt("enter");
    document.querySelector("h1").textContent = nam;
}

let but = document.querySelector("h1");

but.addEventListener("click", doOther);