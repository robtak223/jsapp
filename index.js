const headers = ["Upbeat", "Unwind", "Feeling Lucky", "Video", "About", "Genres", "Decades", "Artists", "Venues", "Venue Map"];

function openCloseNav() {
    if (document.getElementsByClassName("side-bar")[0].style['width'] === "200px") {
        document.getElementsByClassName("side-bar")[0].style['width'] = "60px";
        document.getElementsByClassName("main")[0].style['marginLeft'] = "75px";

        sbbtns = document.getElementsByClassName("side-bar-text");
        sbancs = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbancs[i].style['padding-left'] = "0px"
            sbbtns[i].style['padding-left'] = "0px"

            sbancs[i].style['justify-content'] = "center"
            sbbtns[i].textContent = ""
        }

        localStorage.setItem("sbstate", "close")
    }
    else {
        document.getElementsByClassName("side-bar")[0].style['width'] = "200px";
        document.getElementsByClassName("main")[0].style['marginLeft'] = "215px";

        sbbtns = document.getElementsByClassName("side-bar-text");
        sbancs = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbancs[i].style['padding-left'] = "20px"
            sbbtns[i].style['padding-left'] = "10px"

            sbancs[i].style['justify-content'] = "flex-start"
            sbbtns[i].textContent = headers[i]
        }

        localStorage.setItem("sbstate", "open")
    }
}

function readState() {
    if (localStorage.getItem('sbstate') === null) {

    }
    else if (localStorage.getItem('sbstate') === 'close') {
        document.getElementsByClassName("side-bar")[0].style['width'] = "60px";
        document.getElementsByClassName("main")[0].style['marginLeft'] = "75px";

        sbbtns = document.getElementsByClassName("side-bar-text");
        sbancs = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbancs[i].style['padding-left'] = "0px"
            sbbtns[i].style['padding-left'] = "0px"

            sbancs[i].style['justify-content'] = "center"
            sbbtns[i].textContent = ""
        }

        localStorage.setItem("sbstate", "close")
    }
    else {
        document.getElementsByClassName("side-bar")[0].style['width'] = "200px";
        document.getElementsByClassName("main")[0].style['marginLeft'] = "215px";

        sbbtns = document.getElementsByClassName("side-bar-text");
        sbancs = document.getElementsByClassName("side-bar-button");
        for (let i = 0; i < sbbtns.length; i++) {
            sbancs[i].style['padding-left'] = "20px"
            sbbtns[i].style['padding-left'] = "10px"

            sbancs[i].style['justify-content'] = "flex-start"
            sbbtns[i].textContent = headers[i]
        }

        localStorage.setItem("sbstate", "open")
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    readState();
});


var waiting = false;
function navHighlighter() {
    if (!waiting) {
        waiting = true;
        setTimeout(navHighlighterHelper, 100)
    }
}


function navHighlighterHelper() {
    const sections = document.querySelectorAll("section");
    const navMenu = document.getElementsByClassName("side-bar-text");
    const navMenu2 = document.getElementsByClassName("side-bar-icon");
    const main = document.getElementsByClassName("main")[0];

    let first = true;

    for (let i = sections.length - 1; i >= 0; i--) {
        curr = sections[i]
        const distToTop = main.scrollTop - curr.offsetTop

        if (main.scrollHeight - main.scrollTop - main.clientHeight < 1 && first) {
            navMenu[i].style.color = "#ffffff";
            navMenu2[i].style.color = "#ffffff";
            first = false;
        } else if (distToTop >= -90 && first) {
            navMenu[i].style.color = "#ffffff";
            navMenu2[i].style.color = "#ffffff";
            first = false;
        } else if (i == 0 && first) {
            navMenu[i].style.color = "#ffffff";
            navMenu2[i].style.color = "#ffffff";
            first = false;
        } else {
            navMenu[i].style.color = "#a3a3a3";
            navMenu2[i].style.color = "#a3a3a3";
        }
    }

    waiting = false;
}