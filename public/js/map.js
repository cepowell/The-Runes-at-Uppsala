var panorama,
    map,
    start = {
        lat: latitude,
        lng: longitude
    },
    precitaCoords = {
        lat: 37.7471689,
        lng: -122.4105643
    },
    ballroomCoords = {
        lat: 34.0997227,
        lng: -117.7127581
    },
    crookshankCoords = {
        lat: 34.0996878,
        lng: -117.715882
    },
    bridgesCoords = {
        lat: 34.0976102,
        lng: -117.7126333
    },
    southCoords = {
        lat: 34.0966444,
        lng: -117.7164043
    },
    villageCoords = {
        lat: 34.0955353,
        lng: -117.7179313
    },
    houseCoords = {
        lat: 34.1042505,
        lng: -117.7149702
    },
    mallotCoords = {
        lat: 34.1026561,
        lng: -117.7114809
    },
    tollCoords = {
        lat: 34.1053374,
        lng: -117.7108656
    },
    libraryCoords = {
        lat: 34.1016433,
        lng: -117.713038
    },
    foothillCoords = {
        lat: 34.1070394,
        lng: -117.7223872
    },
    cathedralCoords = {
        lat: 59.8579499,
        lng: 17.6324979
    };

function initialize() {

    /* CREATE MAP */
    map = new google.maps.Map(document.getElementById('map'), {
        center: start,
        zoomControl: true,
        zoom: 15
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

    // when the help button is clicked, display help window
    $("#map-help-popup").dialog({
        autoOpen: false,
        draggable: true,
        resizeable: true,
        width: "400px",
        maxHeight: 500,
        minHeight: 200
    });
    $("#help-button").click(function() {
        $("#map-help-popup").dialog("open");
    });

    // GET STREET VIEW OF MAP
    panorama = new google.maps.StreetViewPanorama(
        document.getElementById('panorama'), {
            position: start,
            fullscreenControl: false,
            pov: {
                heading: heading,
                pitch: 0
            }
        });
    map.setStreetView(panorama);

    /* RESIZEABLE MAPS */
    /*function debounce(func, wait, immediate) {
    	var timeout;
    	return function() {
    		var context = this, args = arguments;
    		var later = function() {
    			timeout = null;
    			if (!immediate) func.apply(context, args);
    		};
    		var callNow = immediate && !timeout;
    		clearTimeout(timeout);
    		timeout = setTimeout(later, wait);
    		if (callNow) func.apply(context, args);
    	};
    };

    var resize = debounce(function() {
      google.maps.event.trigger(map, "resize");
    }, 400);

    $("#panorama").resizable({ ghost: true });
    $("#map").resizable({ ghost: true });

    $("#panorama").resize(resize);
    $("#map").resize(resize);*/

    /* ADD POEM POP-UPS AND LISTENERS */
    var precita = new google.maps.Marker({
        position: precitaCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Precita'
    });

    var precita_street = new google.maps.Marker({
        position: precitaCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    precita.addListener('click', function() {
        $("#precita-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#precita-popup").dialog("open");
    });

    var ballroom = new google.maps.Marker({
        position: ballroomCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Ballroom'
    });

    var ballroom_street = new google.maps.Marker({
        position: ballroomCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    ballroom.addListener('click', function() {
        $("#ballroom-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#ballroom-popup").dialog("open");
    });

    var crookshank = new google.maps.Marker({
        position: crookshankCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Crookshank'
    });

    var crookshank_street = new google.maps.Marker({
        position: crookshankCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    crookshank.addListener('click', function() {
        $("#crookshank-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#crookshank-popup").dialog("open");
    });

    var bridges = new google.maps.Marker({
        position: bridgesCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Bridges'
    });

    var bridges_street = new google.maps.Marker({
        position: bridgesCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    bridges.addListener('click', function() {
        $("#bridges-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#bridges-popup").dialog("open");
    });

    var south = new google.maps.Marker({
        position: southCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'South'
    });

    var south_street = new google.maps.Marker({
        position: southCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    south.addListener('click', function() {
        $("#south-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#south-popup").dialog("open");
    });

    var village = new google.maps.Marker({
        position: villageCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Village'
    });

    var village_street = new google.maps.Marker({
        position: villageCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    village.addListener('click', function() {
        $("#village-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#village-popup").dialog("open");
    });

    var house = new google.maps.Marker({
        position: houseCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'House with the Shutters'
    });

    var house_street = new google.maps.Marker({
        position: houseCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    house.addListener('click', function() {
        $("#house-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#house-popup").dialog("open");
    });

    var mallot = new google.maps.Marker({
        position: mallotCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Mallot'
    });

    var mallot_street = new google.maps.Marker({
        position: mallotCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    mallot.addListener('click', function() {
        $("#mallot-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#mallot-popup").dialog("open");
    });

    var toll = new google.maps.Marker({
        position: tollCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Toll'
    });

    var toll_street = new google.maps.Marker({
        position: tollCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    toll.addListener('click', function() {
        $("#toll-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#toll-popup").dialog("open");
    });

    var library = new google.maps.Marker({
        position: libraryCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Precita'
    });

    var library_street = new google.maps.Marker({
        position: libraryCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    library.addListener('click', function() {
        $("#library-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#library-popup").dialog("open");
    });

    var foothill = new google.maps.Marker({
        position: foothillCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Foothill'
    });

    var foothill_street = new google.maps.Marker({
        position: foothillCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    foothill.addListener('click', function() {
        $("#foothill-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#foothill-popup").dialog("open");
    });

    var cathedral = new google.maps.Marker({
        position: cathedralCoords,
        map: panorama,
        icon: '../img/location.png',
        title: 'Cathedral'
    });

    var cathedral_street = new google.maps.Marker({
        position: cathedralCoords,
        map: map,
        icon: '../img/location-small.png'
    });

    cathedral.addListener('click', function() {
        $("#cathedral-popup").dialog({
            autoOpen: false,
            draggable: true,
            resizeable: true,
            width: "auto",
            maxHeight: 500,
            minHeight: 200
        });
        $("#cathedral-popup").dialog("open");
    });
}
