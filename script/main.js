
var signUpForm = document.getElementById("registerationForm");
var signName = document.getElementById('signName');
var nameAlert = document.getElementById('nameAlert');
var signEmail = document.getElementById('signEmail');
var emailAlert=document.getElementById('emailAlert');
var signPassword=document.getElementById('signPassword');
var passwordAlert=document.getElementById('passwordAlert');
var existAlert=document.getElementById('existAlert');
var successAlert=document.getElementById('successAlert');
var allUsers=[];
if(localStorage.getItem('allUsers')!=null){
  allUsers = JSON.parse(localStorage.getItem('allUsers'))
}




signUpForm.addEventListener('submit',function(e){
  e.preventDefault();

  if(checkAllInputAreValid()){
    addUser()
  }

  
})


function addUser(){
  var newUser ={
    name:signName.value,
    email:signEmail.value,
    password:signPassword.value,
    
  }
  if(isAlreadyExist(newUser) == true){
    
    existAlert.classList.replace('d-none','d-block')
  }else{
    existAlert.classList.replace('d-block','d-none');
    successAlert.classList.replace('d-none','d-block');
    setTimeout(function(){window.location.href="../../login/index.html"},2500);
    
allUsers.push(newUser);
console.log(allUsers)
localStorage.setItem('allUsers',JSON.stringify(allUsers));
}
}

function isAlreadyExist(newUser){
 for(var i=0 ; i< allUsers.length;i++){
  if(allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()){
    
   return true
  }
 }

}

 
//validate inputs
function validateInput(Regex,element,alertEl){
  var pattern=Regex;
  if(pattern.test(element.value)){
    
   alertEl.classList.replace('d-block','d-none');
   element.classList.remove('is-invalid');
   element.classList.add('is-valid');
return true
  }else{
    
    alertEl.classList.replace('d-none','d-block');
    element.classList.remove('is-valid');
    element.classList.add('is-invalid');
 return false
  }

}


//validate all inputs together
function checkAllInputAreValid(){
  if(  validateInput(/^[a-zA-Z0-9$_]{2,}$/,signName,nameAlert) == true && 
   validateInput( /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,signEmail,emailAlert) == true && 
     validateInput(/^(?=.*[A-Z])(?=.*[\W_])(?=.*\d).*$/,signPassword,passwordAlert)== true){
    
    return true
  }
  else{
    
    return false
  }
}
























