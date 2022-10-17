var signInData = JSON.parse(localStorage.getItem("signInData")) || [];

document.querySelector("myForm").addEventListener("submit", getData);

function getData(){
  event.preventDefault();
  var data= {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    pass: document.getElementById("pass").value,
   
    
  };
  var flag = false;
  for(var i=0;i<signInData.length;i++){
    if(data.email === signInData[i].email){
      flag = true;
      break;
    }
  }
  if(flag == true){
    alert("User already exists !");
  }
  else{
    signInData.push(data);
    localStorage.setItem("signInData", JSON.stringify(signInData));
    window.location.href = "sign-in.html";
  }
}

