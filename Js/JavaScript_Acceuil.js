function Deconnecter()
{    var Dc=document.getElementById("dec");
	sessionStorage.clear();
	Dc.href='./Index.html';
	//Dc.setAttribut("href","./Index.html");
  // document.location.href="./Index.html"; 


}

const weathericon={

	"Rain":"wi wi-day-rain",
	"Clouds":"wi wi-day-cloudy",
	"clear":"wi wi-day-sunny",
	"Snow":"wi wi-day-snow",
	"mist":"wi wi-day-fog",
	"Drizzle":"wi wi-day-sleet",
}

function capital(chaine){
  return chaine[0].toUpperCase()+chaine.slice(1);
}

  function meteo(){

var latitude=sessionStorage.getItem("latitude");
var longitude=sessionStorage.getItem("longitude");

     fetch('http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=858044516ecf50294db4aec6cc00ed06&lang=fr&units=metric')
	.then(res=>res.json())
	.then(resjson=>{
      const ville=resjson['name'];
      const degre=resjson['main']['temp'];
      const description=resjson['weather'][0]['description'];
      const icon=resjson['weather'][0]['main'];


       document.querySelector('#ville').innerHTML=ville;
       document.querySelector('#description').innerHTML=capital(description);
        document.querySelector('#degre').innerHTML=Math.round(degre);

        document.querySelector('i.wi').className=weathericon[icon];
	}
      

		);

	console.log(resjson);

     
}


	
         


