function initMap() {
  var mapOptions = {
      center: { lat: 41.83509826660156, lng: -87.62693786621094 },
      zoom: 14,
      mapId: 'DEMO_MAP_ID'
  };
  var map = new google.maps.Map(document.getElementById('canvas'), mapOptions);
  var marker = new google.maps.Marker({
      position: { lat: 41.83509826660156, lng: -87.62693786621094 },
      map: map,
      title: 'My Location'
  });
}