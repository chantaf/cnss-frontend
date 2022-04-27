import {authentification} from "./class.js";

//authentification
document.querySelector("#login").addEventListener("click",async()=>{
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let cnie=document.getElementById("cnie").value;
    let role=document.getElementsByName("role");
    if(role[0].checked){
      role="patients"
    }else{
      role="agents"
    }

    let auth=new authentification();
    let getJson= await auth.authentification(email,password,role,cnie);

     if(getJson){
       if(role=="agents"){
        window.location.href="../../pages/dashboard.html";
       }else{
        window.location.href="../../pages/consulterpatient.html";
       }
    }else {  
      window.location="../../../index.html";
    }

});


document.getElementById("patient").addEventListener("click",()=>{
  document.getElementById("cnie").style.display="block"
})

document.getElementById("agent").addEventListener("click",()=>{
  document.getElementById("cnie").style.display="none"
})