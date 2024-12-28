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

let clear_name = document.getElementById("nameid");
let name_id = document.getElementById("name_1");
let clear_email = document.getElementById("emailid");
let email_id = document.getElementById("email_1");
let clear_subject = document.getElementById("subjectid");
let subject_id = document.getElementById("subject_1");
let clear_message = document.getElementById("textareaid");
let message_id = document.getElementById("textarea_1");

let input_box = document.getElementById("input_box1");

function nameError() {
    clear_name.innerHTML = "";
    name_id.style.border = "2px solid green";
    input_box.style.height = "6vh";
}

function emailError() {
    clear_email.innerHTML = "";
    email_id.style.border = "2px solid green";
    input_box.style.height = "6vh";
}

function subjectError() {
    clear_subject.innerHTML = "";
    subject_id.style.border = "2px solid green";
}

function messageError() {
    clear_message.innerHTML = "";
    message_id.style.border = "2px solid green";
}

function validateForm() {
    var name_format = /^[A-Za-z" "]+$/;
    var email_format = /^[a-z_0-9.]{3,}@['gmail']{5,}[.]{1}['com']{3}$/;
    var subject_format = /^[A-Za-z" "]+$/
    var message_format = /^[A-Za-z_0-9" "]+$/

    var returnValue = true;
    nameError();
    emailError();
    subjectError();
    messageError();

                    // name validation
    let name_value = document.forms['myForm']["fname"].value;
    if (name_value.length<1) {
        clear_name.innerHTML = "Name field can not be empty.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        input_box.style.height = "9vh";
        returnValue = false;
    }else if(name_value.length<6 && name_value.length>=1){
        clear_name.innerHTML = "Please enter name and surname.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        input_box.style.height = "9vh";
        returnValue = false;
    }else if(name_value.match(name_format)){
        returnValue;
    } else {
        clear_name.innerHTML = "Please enter valid name.";
        clear_name.style.color = "red";
        name_id.style.border = "2px solid red";
        input_box.style.height = "9vh";
        returnValue = false;
    }

                        // email validation
    let email_value = document.forms['myForm']["femail"].value;
    if (email_value.length<1) {
        clear_email.innerHTML = "Email field can not be empty.";
        clear_email.style.color = "red";
        email_id.style.border = "2px solid red";
        input_box.style.height = "9vh";
        returnValue = false;
    }else if(email_value.match(email_format)){
        returnValue;
    } else {
        clear_email.innerHTML = "Please enter valid email.";
        clear_email.style.color = "red";
        email_id.style.border = "2px solid red";
        input_box.style.height = "9vh";
        returnValue = false;
    }

                        // subject validation
    let subject_value = document.forms['myForm']["fsubject"].value;
    if (subject_value.length<1) {
        clear_subject.innerHTML = "Subject field can not be empty.";
        clear_subject.style.color = "red";
        subject_id.style.border = "2px solid red";
        returnValue = false;
    }else if(subject_value.length>=1 && subject_value.length<20){
        clear_subject.innerHTML = "Atleast 20 characters are required.";
        clear_subject.style.color = "red";
        subject_id.style.border = "2px solid red";
        returnValue = false;
    }else if(subject_value.match(subject_format)){
        returnValue;
    } else {
        clear_subject.innerHTML = "Please enter valid subject.";
        clear_subject.style.color = "red";
        subject_id.style.border = "2px solid red";
        returnValue = false;
    }

                        // message validation
    let message_value = document.forms['myForm']["ftextarea"].value;
    if (message_value.length<1) {
        clear_message.innerHTML = "Message field can not be empty.";
        clear_message.style.color = "red";
        message_id.style.border = "2px solid red";
        returnValue = false;
    }else if(message_value.length>=1 && message_value.length<50){
        clear_message.innerHTML = "Atleast 50 characters are required.";
        clear_message.style.color = "red";
        message_id.style.border = "2px solid red";
        returnValue = false;
    }else if(message_value.match(message_format)){
        returnValue;
    } else {
        clear_message.innerHTML = "Please enter valid message.";
        clear_message.style.color = "red";
        message_id.style.border = "2px solid red";
        returnValue = false;
    }
}