var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('canvas'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}