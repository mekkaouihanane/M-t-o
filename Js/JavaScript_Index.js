 function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);

  } else { 
  	P1.style.visibility="visible";
    P1.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
 sessionStorage.setItem("latitude", position.coords.latitude);
 sessionStorage.setItem("longitude", position.coords.longitude);
document.location.href="./Acceuil.html";
   
}
function SeConnecter()
{
	var login=document.getElementById("userName").value;
var PassWord=document.getElementById("password").value;
 var P1=document.getElementById("p1");


if(login=="" && PassWord=="")
{
      
   P1.style.visibility="visible";
   P1.innerHTML=" Merci de Remplir les Champs!";
       
}
else if(login=="" && PassWord !=""){

   P1.style.visibility="visible";
   P1.innerHTML=" Merci de Remplir le Champ nom utlisateur  ! ";
    
}
else if(login !="" && PassWord ==""){

   P1.style.visibility="visible";
   P1.innerHTML=" Merci de Remplir le Champ  mot de passe ! ";
   
}

else{

  if(login=="Amine" && PassWord=="Amine123")
{
        // Store UserName
       sessionStorage.setItem("UserName", "Amine");
        getLocation();
        
}
else{ 
    
   P1.style.visibility="visible";
   P1.innerHTML="le mot de passe ou nom utlisateur incorrect !";
  
}

}




}