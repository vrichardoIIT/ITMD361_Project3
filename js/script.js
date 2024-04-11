var map;
var iitmarker;
var attraction1;
var attraction2;
var attraction3;
var attraction4;
var attraction5;

function initMap() {
  map = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: 41.83500496774838, lng: -87.62698444559126},
    zoom: 12,
  });

  iitmarker = new google.maps.Marker({
    map: map,
    position: {lat: 41.83500496774838, lng: -87.62698444559126},
    icon: {
      url: 'images/iitmarker.png',
      scaledSize: new google.maps.Size(35, 35)
    }
  });

  attraction1 = new google.maps.Marker({
    map: map,
    position: {lat: 41.89297772271981, lng: -87.60547120429153},
    icon: {
      scaledSize: new google.maps.Size(35, 35) // Adjust the size as needed
    }
  });

  attraction2 = new google.maps.Marker({
    map: map,
    position: {lat: 41.88020403610816, lng: -87.63577343268534},
    scaledSize: new google.maps.Size(35, 35)
  });

  attraction3 = new google.maps.Marker({
    map: map,
    position: {lat: 41.91848901133404, lng: -87.62685577148729},
    scaledSize: new google.maps.Size(35, 35)
  });

  attraction4 = new google.maps.Marker({
    map: map,
    position: {lat: 41.88267233772173,lng: -87.62330830078363},
    scaledSize: new google.maps.Size(35, 35)
  });

  attraction5 = new google.maps.Marker({
    map: map,
    position: {lat: 41.87621826089041,lng: -87.61879210548973},
    scaledSize: new google.maps.Size(35, 35)
  });
}