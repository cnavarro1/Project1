function init() {
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(41.835117, -87.627130);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_Center
    }
  });

  var  marker = new google.maps.marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'marge.png'
  });
  
  google.maps.evemt.addListener(marker, 'mouseover', function() {
      infowindow.open(myMap, marker);
    });
    
    
)

google.maps.event.addDomListener(window, 'load', init);