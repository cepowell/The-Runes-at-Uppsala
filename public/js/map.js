var panorama;
var map;
var start = {lat: latitude, lng: longitude};
var precitaCoords = {lat: 37.7471689, lng: -122.4105643};

function initialize() {

  /* CREATE MAP */
  map = new google.maps.Map(document.getElementById('map'), {
     center: start,
     zoom: 18,
     streetViewControl: false,
     addressControl: false,
     fullscreenControl: false
   });

   // When the reset button is clicked, re-center map
   var reset = document.getElementById('reset-button');
   reset.addEventListener('click', function() {
     var reset = map.getStreetView();
     reset.setPosition(start);
   });

   // When the home button is clicked, return to home page
   var home = document.getElementById('home-button');
   home.addEventListener('click', function() {
     window.location.href = "/";
   });

   /* ADD POEM POP-UPS AND LISTENERS */
   var precita = new google.maps.Marker({
        position: precitaCoords,
        map: map,
        icon: '../img/location.png',
        title: 'Precita'
    });

    precita.addListener('click', function() {
      $("#precita-popup").dialog({
        autoOpen: false,
        draggable: true,
        resizeable: true,
        maxHeight: 500,
        minHeight: 200
      });
      $("#precita-popup").dialog("open");
      console.log('Clicked');
    });

    // GET STREET VIEW OF MAP
    var panoramaOptions = {
      fullscreenControl: false,
      enableCloseButton: false,
    };
    panorama = map.getStreetView();
    panorama.setPosition(start);
    panorama.setPov(({
      heading: heading,
      pitch: 0
    }));
    panorama.setOptions(panoramaOptions);
    panorama.setVisible(true);

}
