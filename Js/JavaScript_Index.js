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

if(login=="Hanane" && PassWord=="0903")
{
        // Store UserName
  
       sessionStorage.setItem("UserName", "Hanane");
        getLocation();

       

}
else{ 
   document.location.href="#"; 
   P1.style.visibility="visible";
   P1.innerHTML="le mot de passe ou nom utlisateur incorrect !";

}


}