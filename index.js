let element = document.getElementById("section2");
let element_0 = document.getElementById("inner_section1");
let element_1 = document.getElementById("inner_section2");
let element_2 = document.getElementById("inner_section3");
let element_3 = document.getElementById("inner_section4");

function getHome() {
    element_1.style.display = "none";
    element_2.style.display = "none";
    element_3.style.display = "none";
    element_0.style.display = "flex";
}

function getInfo() {
    element_0.style.display = "none";
    element_2.style.display = "none";
    element_3.style.display = "none";
    element_1.style.display = "flex";
    element_1.style.marginTop = "0vh";
    element_1.style.fontWeight = "bolder";
    element_1.style.fontSize = "30px";
    element_1.style.color = "green";
}

function getContact() {
    element_0.style.display = "none";
    element_1.style.display = "none";
    element_3.style.display = "none";
    element_2.style.display = "flex";
    element_2.style.marginTop = "0vh";
}

function getResume() {
    element_0.style.display = "none";
    element_1.style.display = "none";
    element_2.style.display = "none";
    element_3.style.display = "flex";
    element_3.style.marginTop = "0px";
}