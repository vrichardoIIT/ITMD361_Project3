
function initMap() {
  var map = new google.maps.Map(document.getElementById('canvas'), {
    center: {lat: 41.83500496774838, lng: -87.62698444559126},
    zoom: 12,
  });

  var iitmarker = new google.maps.Marker({
    map: map,
    position: {lat: 41.83500496774838, lng: -87.62698444559126},
    icon: {
      url: 'images/iitmarker.png',
      scaledSize: new google.maps.Size(35, 35)
    }
  });

  var attraction1 = new google.maps.Marker({ //navypier
    map: map,
   position: {lat: 41.89297772271981, lng: -87.60547120429153},
    icon: {
      scaledSize: new google.maps.Size(35, 35)
    }
  });

  var attraction2 = new google.maps.Marker({ //willis tower
    map: map,
    position: {lat: 41.88020403610816, lng: -87.63577343268534},
    scaledSize: new google.maps.Size(35, 35)
  });

  var attraction3 = new google.maps.Marker({ //beach
    map: map,
    position: {lat: 41.91848901133404, lng: -87.62685577148729},
    scaledSize: new google.maps.Size(35, 35)
  });

  var attraction4 = new google.maps.Marker({ //bean
    map: map,
    position: {lat: 41.88267233772173,lng: -87.62330830078363},
    scaledSize: new google.maps.Size(35, 35)
  });

  var attraction5 = new google.maps.Marker({ //fountain
    map: map,
    position: {lat: 41.87621826089041,lng: -87.61879210548973},
    scaledSize: new google.maps.Size(35, 35)
  });

  var iitInfo = new google.maps.InfoWindow({
    content: '<p>Illinois Institute of Technology, commonly referred to as Illinois Tech, is a private research university in Chicago, Illinois</p>'
  });

  var navy = new google.maps.InfoWindow({
    content: '<p>Navy Pier is a 3,300-foot-long pier on the shoreline of Lake Michigan, located in the Streeterville neighborhood of the Near North Side community area in Chicago, Illinois, United States.</p>'
  });

  var tower = new google.maps.InfoWindow({
    content: '<p>The Willis Tower, originally the Sears Tower, is a 110-story, 1,451-foot skyscraper in the Loop community area of Chicago in Illinois, United States.</p>'
  });

  var beach = new google.maps.InfoWindow({
    content: '<p>North Avenue Beach</p>'
  });

  var bean = new google.maps.InfoWindow({
    content: '<p>Cloud Gate, aka “The Bean”, is one of Chicago`s most popular sights. The monumental work of art anchors downtown Millennium Park and reflects the city`s famous skyline and the surrounding green space.</p>'
  });

  var fountain = new google.maps.InfoWindow({
    content: '<p>Buckingham Fountain is a Chicago Landmark in the center of Grant Park, between Queen`s Landing and the end of Ida B. Wells Drive. Dedicated in 1927 and donated to the city by philanthropist Kate S. Buckingham, it is one of the largest fountains in the world.</p>'
  });

  iitmarker.addListener('click', function(){
    iitInfo.open(map,iitmarker)
  });

  attraction1.addListener('click', function(){
    navy.open(map,attraction1)
  });

  attraction2.addListener('click', function(){
    tower.open(map,attraction2)
  });

  attraction3.addListener('click', function(){
    beach.open(map,attraction3)
  });

  attraction4.addListener('click', function(){
    bean.open(map,attraction4)
  });

  attraction5.addListener('click', function(){
    fountain.open(map,attraction5)
  });

}