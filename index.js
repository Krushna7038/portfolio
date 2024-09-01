let sec_element_0 = document.getElementById("section1");
let sec_element_1 = document.getElementById("section2");
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

let main_element_1 = document.getElementById("main_link1");
let main_element_2 = document.getElementById("main_link2");
let page_element_1 = document.getElementById("page_link1");
let page_element_2 = document.getElementById("page_link2");
let page_element_3 = document.getElementById("page_link3");
let page_element_4 = document.getElementById("page_link4");

function getProfile() {
    element_0.style.display = "none";
    element_1.style.display = "none";
    element_2.style.display = "none";
    element_3.style.display = "none";
    main_element_1.style.display = "none";
    sec_element_1.style.display = "none";
    page_element_1.style.display = "none";
    page_element_2.style.display = "none";
    page_element_3.style.display = "none";
    page_element_4.style.display = "none";
    sec_element_0.style.display = "flex";
    main_element_2.style.display = "block";
}

function getSection() {
    sec_element_0.style.display = "none";
    main_element_2.style.display = 'none';
    sec_element_1.style.display = "flex";
    element_0.style.display = "flex";
    main_element_1.style.display = "block";
    page_element_1.style.display = "block";
    page_element_2.style.display = "block";
    page_element_3.style.display = "block";
    page_element_4.style.display = "block";
}
