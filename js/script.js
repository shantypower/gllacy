function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.938143, 30.327466)
  }
  var map = new google.maps.Map(document.getElementById("map__canvas"),
                                mapOptions);
  var image = "img/pin.svg";
  var myLatLng = new google.maps.LatLng(59.938625, 30.322938);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);


