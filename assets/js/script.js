function current(){
   var url ='https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="moraabad,uo"&format=json';
   var request = new XMLHttpRequest();
   request.onreadystatechange = function() {
       if (request.readyState == 4 && request.status == 200) {
          var data = JSON.parse(request.responseText);
             console.log(data);
          var tempr = data.query.results.channel.item.condition.temp;
                 tempr=(5*(tempr-32))/9;
          var wind = data.query.results.channel.wind.speed;
          var humidity = data.query.results.channel.atmosphere.humidity;
          var forecast = data.query.results.channel.item.forecast;
             var high = forecast[0].high;
             high=(5*(high-32))/9;
             var low=forecast[0].low;
             low=(5*(low-32))/9;
           var city =  data.query.results.channel.location.city;
           var rise =  data.query.results.channel.astronomy.sunrise;
           var set =  data.query.results.channel.astronomy.sunset;
           var cloud = data.query.results.channel.item.forecast;
              var clouds = forecast[0].text;

             document.getElementById('city').innerHTML=  city;
             document.getElementById('temp').innerHTML=  Math.floor(tempr) + '&deg;'+'C';
             document.getElementById('wind').innerHTML=  Math.floor(wind) + 'mph';
             document.getElementById('humidity').innerHTML=  Math.floor(humidity) + '%';
             document.getElementById('high').innerHTML=  Math.floor(high) + '&deg;'+'C';
             document.getElementById('low').innerHTML=  Math.floor(low) + '&deg;'+'C';
             document.getElementById('rise').innerHTML= "Sunrise  -"+" "+rise;
             document.getElementById('set').innerHTML= "Sunset  -"+" "+set;
             document.getElementById('cloud').innerHTML= clouds;
       }
     };
     request.open('GET',url,true);
     request.send();

}






function report() {

var location = document.getElementById('text').value;
var url ='https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + location + '")&format=json';
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
       var data = JSON.parse(request.responseText);
          console.log(data);
       var tempr = data.query.results.channel.item.condition.temp;
              tempr=(5*(tempr-32))/9;
       var wind = data.query.results.channel.wind.speed;
       var humidity = data.query.results.channel.atmosphere.humidity;
       var forecast = data.query.results.channel.item.forecast;
          var high = forecast[0].high;
          high=(5*(high-32))/9;
          var low=forecast[0].low;
          low=(5*(low-32))/9;
        var city =  data.query.results.channel.location.city;
        var rise =  data.query.results.channel.astronomy.sunrise;
        var set =  data.query.results.channel.astronomy.sunset;
        var cloud = data.query.results.channel.item.forecast;
           var clouds = forecast[0].text;

          document.getElementById('city').innerHTML=  city;
          document.getElementById('temp').innerHTML=  Math.floor(tempr) + '&deg;'+'C';
          document.getElementById('wind').innerHTML=  Math.floor(wind) + 'mph';
          document.getElementById('humidity').innerHTML=  Math.floor(humidity) + '%';
          document.getElementById('high').innerHTML=  Math.floor(high) + '&deg;'+'C';
          document.getElementById('low').innerHTML=  Math.floor(low) + '&deg;'+'C';
          document.getElementById('rise').innerHTML= "Sunrise  -"+" "+rise;
          document.getElementById('set').innerHTML= "Sunset  -"+" "+set;
          document.getElementById('cloud').innerHTML= clouds;
    }
  };
  request.open('GET',url,true);
  request.send();
  return false;
}


  function my(){
document.getElementById('text').value="";
}
