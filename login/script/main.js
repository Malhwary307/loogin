var loginForm = document.getElementById('loginForm');
var signEmail=document.getElementById('signEmail');
var signPassword=document.getElementById("signPassword");

var allUsers=[];

// to bring all saved data
if(localStorage.getItem('allUsers')!=null){
  allUsers= JSON.parse(localStorage.getItem('allUsers'))
}


loginForm.addEventListener('submit',function(e){
  e.preventDefault();
  login()
})

//to login
function login(){
  var userData = {
    email: signEmail.value,
    password: signPassword.value,
    
  }

  if(isLoginValid(userData)==true){
    
    alertLogin.classList.replace('d-block','d-none')
    setTimeout(function(){window.location.href="../../welcome/index.html"},2000);
  }
  else {
    alertLogin.classList.replace('d-none','d-block')
    
  }
}
 



// to check if email and password are matching 
function isLoginValid(userData){
for(var i=0; i<allUsers.length;i++){
  if(allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&allUsers[i].password== userData.password){
   
   localStorage.setItem('userName',allUsers[i].name)
   return true 
  }

  }
}




















