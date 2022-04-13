var myMap;
function initMap() {
  alert('it works');
  myMap = new google.maps.Map(document.getElementById('myMap'), {
    center: {lat: 41.835471, lng: -87.625888},
    zoom: 16
  });
 
  
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(41.835471, -87.625888),
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/marge.png'
  });
  
  var contentString = '<h1>This Place</h1><p>This is a place</p>';
  
  var infoWindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
  });
}
google.maps.event.addDomListener(window, 'load', initMap;