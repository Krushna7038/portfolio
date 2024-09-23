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

// VALIDATION

let error_message = document.getElementById("formerror");
let error_message1 = document.getElementById("formerror1");
let error_message2 = document.getElementById("formerror2");
let error_message3 = document.getElementById("formerror3");

function validateForm() {

    let valid_name = /^[A-Za-z" "]+$/;
    // let valid_email = /^[a-z_0-9]+$/;
    let valid_subject = /^[A-Za-z" "]+$/;
    let valid_message = /^[A-Za-z0-9_" "]+$/;
    let returnvalue = true;

    let val1 = document.forms['myForm']["fname"].value;
    if (val1.match(valid_name)) {
        if (val1.length<8) {
            error_message.innerHTML = "**Please enter full name";
            // alert("**Please enter full name.");
            returnvalue = false;
        }else{
            returnvalue;
            error_message.style.display = "none";
        }
    } else {
        error_message.innerHTML = "**Please enter valid name";
        // alert("**Please enter valid name.");
    }

    let val2 = document.forms['myForm']["femail"].value;
    // if (val2.match(valid_email)) {
    //     returnvalue;
    //     error_message1.style.display = "none";
    // } else {
    //     error_message1.innerHTML = "**Please enter valid email.";
    // }

    let val3 = document.forms['myForm']["fsubject"].value;
    if (val3.match(valid_subject)) {
        if (val3.length<20) {
            error_message2.innerHTML = "**Subject should be minimum of 20 characters.";
            returnvalue = false;
        } else {
            returnvalue;
            error_message2.style.display = "none";
        }
    } else {
        error_message2.innerHTML = "**Please enter valid subject.";
    }

    let val4 = document.forms['myForm']["ftextarea"].value;
    if (val4.match(valid_message)) {
        if (val4.length<50) {
            error_message3.innerHTML = "**Subject should be minimum of 50 characters.";
            returnvalue = false;
        } else {
            returnvalue;
            error_message3.style.display = "none";
        }
    } else {
        error_message3.innerHTML = "**Please enter valid message.";
    }
}