// get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//  form submission by button
form.addEventListener('submit', function (event) {
    event.preventDefault(); // no page load
    // input data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone number').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // shown resume
    var resumeHTML = "\n      <h2><b>Editable Resume</b></h2>\n\n      <h3>Personal Information</h3>\n      <p><b>Name : </b>\n      <span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email : </b>\n      <span contenteditable=\"true\">").concat(email, "</span></p>\n      <p><b>Phone Number : </b>\n      <span contenteditable=\"true\">").concat(phone, "</span></p>\n   \n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</P>\n      \n      \n      <h3>Experience</h3>\n      <p contenteditable=\"true\">").concat(experience, "</p>\n\n\n      <h3>Skills</h3>\n      <p contenteditable=\"true\">").concat(skills, "</p>  ");
    //   to Display Resume      
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Resume Missing.');
    }
});
