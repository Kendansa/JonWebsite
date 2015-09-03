new GMaps({
  div: '#googlemaps',
  lat: 38.122432,
  lng: -85.4223895,
  width: 100%,
  height: 100%,
});
 
map = new GMaps({
  div: '#googlemaps',
  zoom: 12,
  lat: 38.122432,
  lng: -85.4223895
  }
});

map.addMarker({
  lat: -12.043333,
  lng: -77.028333,
  title: 'Lima',
  click: function(e) {
    alert('You clicked in this marker');
  }
  infoWindow: {
  content: '<p>HTML Content</p>'
}
});