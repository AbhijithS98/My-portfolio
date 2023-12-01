var nameError = document.getElementById('name-error');
var PhoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var meassageError = document.getElementById('meassage-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  var name = document.getElementById('contact-name').value;

  if(name.length == 0){
     nameError.innerHTML = 'Name is reqired';
     return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = '<i class="fa fa-solid fa-circle-check"></i>';
  return true;
}

function validatePhone(){
  var phone = document.getElementById('contact-phone').value;

  if(phone.length == 0){
    PhoneError.innerHTML = 'Phone no is required'
    return false;
  }
  if(phone.length !== 10){
    PhoneError.innerHTML = 'Phone no should be 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    PhoneError.innerHTML = 'Only digits';
    return false;
  }
  PhoneError.innerHTML = '<i class="fafa-solid fa-circle-check"></i>';
  return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email is required'
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email Invalid'
    return false;
  }

  emailError.innerHTML = '<i class="fa fa-solid fa-circle-check"></i>';
  return true;
}