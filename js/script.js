"use strict";

// start downdrop section 

let goPro = document.getElementById("go-down");
let pro = document.getElementById("pro");

goPro.onclick = function () {
    if (pro.style.display === "none") {
        pro.style.display = "flex";
        busi.style.display = "none";
        res.style.display = "none";
        about.style.display = "none";
    }
    else {
        pro.style.display = "none";
    }
}

let goBusi = document.getElementById("go-busi");
let busi = document.getElementById("busi");

goBusi.onclick = function () {
    if (busi.style.display === "none") {
        busi.style.display = "flex";
        pro.style.display = "none";
        about.style.display = "none";
        res.style.display = "none";
    }
    else {
        busi.style.display = "none";
    }
}

let goAbout = document.getElementById("go-about");
let about = document.getElementById("about");

goAbout.onclick = function () {
    if (about.style.display === "none") {
        about.style.display = "flex";
        pro.style.display = "none";
        busi.style.display = "none";
        res.style.display = "none";
    }
    else {
        about.style.display = "none";
    }
}

let goRes = document.getElementById("go-res");
let res = document.getElementById("res");

goRes.onclick = function () {
    if (res.style.display === "none") {
        res.style.display = "flex";
        pro.style.display = "none";
        busi.style.display = "none";
        about.style.display = "none";
    }
    else {
        res.style.display = "none";
    }
}

// mobile menu buttun

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";


}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";

}