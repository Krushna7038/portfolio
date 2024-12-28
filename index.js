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

// let error_message = document.getElementById("formerror");
// let error_message1 = document.getElementById("formerror1");
// let error_message2 = document.getElementById("formerror2");
// let error_message3 = document.getElementById("formerror3");

// let returnvalue = true;
// function validateForm() {

//     let valid_name = /^[A-Za-z" "]+$/;
//     // let valid_email = /^[a-z_0-9]+$/;
//     let valid_subject = /^[A-Za-z" "]+$/;
//     let valid_message = /^[A-Za-z0-9_" "]+$/;
    
//     // name

//     let val1 = document.forms['myForm']["fname"].value;
//     if (val1.match(valid_name)) {
//         if (val1.length<8) {
//             error_message.innerHTML = "**Please enter full name";
//             error_message.style.marginLeft = "2%";
//             returnvalue = false;
//         }else{
//             returnvalue = true;
//             error_message.style.display = "none";
//         }
//     }else if (val1.length>8 && val1.match(/^[A-Za-z0-9_" "]+$/)) {
//         error_message.innerHTML = "**Numbers are not allowed.";
//         returnvalue = false;
//     }else {
//         error_message.innerHTML = "**Please enter valid name";
//         returnvalue = false;
//     }

//     // email

//     let val2 = document.forms['myForm']["femail"].value;
//     // if (val2.match(valid_email)) {
//     //     returnvalue;
//     //     error_message1.style.display = "none";
//     // } else {
//     //     error_message1.innerHTML = "**Please enter valid email.";
//     // }

//     // subject

//     let val3 = document.forms['myForm']["fsubject"].value;
//     if (val3.match(valid_subject)) {
//         if (val3.length<30) {
//             error_message2.innerHTML = "**Subject should be minimum of 30 characters.";
//             returnvalue = false;
//         } else {
//             returnvalue = true;
//             error_message2.style.display = "none";
//         }
//     } else {
//         error_message2.innerHTML = "**Please enter valid subject.";
//         returnvalue = false;
//     }

//     // message

//     let val4 = document.forms['myForm']["ftextarea"].value;
//     if (val4.match(valid_message)) {
//         if (val4.length<50) {
//             error_message3.innerHTML = "**Message should be minimum of 50 characters.";
//             returnvalue = false;
//         } else {
//             returnvalue = true;
//             error_message3.style.display = "none";
//         }
//     } else {
//         error_message3.innerHTML = "**Please enter valid message.";
//         returnvalue = false;
//     }
// }

// finalvalue = true;
// function checkOut() {
//     if (returnvalue==true) {
//         finalvalue;
//     } else {
//         finalvalue = false;
//         alert("Please enter all valid data.");
//     }
// }

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