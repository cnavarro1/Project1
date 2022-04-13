var myMap;
function initMap() {
  myMap = new google.maps.Map(document.getElementById('myMap'), {
    center: {lat: 19.40982, lng: -98.62399},
    zoom: 9
  });
 
  var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(19.07620, -98.30227),
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/marge.png'
  });
  
  var contentString1 = '<h1>Cholula</h1><p>You may love the hot sauce, but this is the place it comes from. My mother&rsquo;s hometown in Puebla.</p>';
  
  var infoWindow1 = new google.maps.InfoWindow({
      content: contentString1
  });
  
  google.maps.event.addListener(marker1, 'mouseover', function() {
      infoWindow1.open(myMap, marker1);
  });
  
  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(19.75464, -98.86797),
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/sun.png'
  });
 
  var contentString2 = '<h1>Teotihuacan</h1><p>This is the location of the sun pyramid from the Aztecs.</p>';
  
  var infoWindow2 = new google.maps.InfoWindow({
      content: contentString2
  });
  
  google.maps.event.addListener(marker2, 'mouseover', function() {
      infoWindow2.open(myMap, marker2);
  });

}
google.maps.event.addDomListener(window, 'load', initMap);