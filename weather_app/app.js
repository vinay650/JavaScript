const form =  document.querySelector('.btn');
form.addEventListener('click',search);

function search(event){
   event.preventDefault();
   const apiKey = "04dc52a9966b714dbafde1f89ebbc2eb";
   const inputVal = document.querySelector('#city');
   const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + inputVal.value+ '&appid=' + apiKey;
   var show=document.querySelectorAll('.show');

   var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
   request.open('GET', url, true)

   request.onload = function () {
  // Begin accessing JSON data here
  try {
  var data = JSON.parse(request.response)
  show[1].innerHTML = data['weather'][0]['main']
  show[2].innerHTML = String((Math.round(parseFloat(data['main']['temp'])-273.15)))+"°C"
  show[3].innerHTML= data['name'];
  var icon=data['weather'][0]['icon'];
  show[0].innerHTML='<img src=" http://openweathermap.org/img/wn/' + icon+ '@2x.png" />';
   }
  catch{
     show[0].innerHTML="Enter Valid City Name";
     show[1].innerHTML ="";
     show[2].innerHTML= "";
     show[3].innerHTML="";
  }
  
}
   
// Send request
   request.send()
   
   
  
  
}