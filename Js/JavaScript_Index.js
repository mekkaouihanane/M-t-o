 

function SeConnecter()
{var login=document.getElementById("userName").value;
var PassWord=document.getElementById("password").value;
 var P1=document.getElementById("p1");
if(login=="Hanane" && PassWord=="0903")
{
        // Store
       sessionStorage.setItem("UserName", "Hanane");
       document.location.href="./Acceuil.html"; 
     

}
else{ 
   document.location.href="#"; 
   P1.style.visibility="visible";
   P1.innerHTML="le mot de passe ou nom utlisateur incorrect !";

}


}