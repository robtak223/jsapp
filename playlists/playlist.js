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
    else if(localStorage.getItem('sbstate')  === 'close'){
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

document.addEventListener("DOMContentLoaded", function(event) { 
    readState();
});