var map;
var iitmark;

function initMap() {
  map = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: 41.83500496774838, lng: -87.62698444559126},
    zoom: 12,
  });

  iitmark = new google.maps.Marker({
    map: map,
    position: {lat: 41.83500496774838, lng: -87.62698444559126}
  });
}