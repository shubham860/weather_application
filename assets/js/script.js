
function report() {
var url ='https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22moradabad%2C%20india%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
       var data = JSON.parse(request.responseText);
       var tempr = data.query.results.item.condition.temp;
              tempr=(5*(tempr-32))/9;
          document.getElementById('temp').innerHTML= tempr;
    }
  };
  request.open('GET',url,true);
  request.send();
}
