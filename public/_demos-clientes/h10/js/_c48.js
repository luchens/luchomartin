$(function() {
  if($("#c48_mapa").length){
    includeJs("https://maps.googleapis.com/maps/api/js?key=AIzaSyDu31N5fuFw9jjsju2bwlwUQF38zgF6-7o&callback=initMap_c48");
  }
});

function includeJs(jsFilePath) {
  var js = document.createElement("script");
  js.type = "text/javascript";
  js.src = jsFilePath;
  document.body.appendChild(js);
}

function initMap_c48() {
  if(!document.getElementById('c48_mapa')){ return false; }

  var styles = [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#e9e9e9"
      }, {
        "lightness": 17
      }
    ]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 20
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 17
      }
    ]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 29
      }, {
        "weight": 0.2
      }
    ]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 18
      }
    ]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#ffffff"
      }, {
        "lightness": 16
      }
    ]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#f5f5f5"
      }, {
        "lightness": 21
      }
    ]
  }, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [{
        "color": "#dedede"
      }, {
        "lightness": 21
      }
    ]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
      }, {
        "color": "#ffffff"
      }, {
        "lightness": 16
      }
    ]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
      }, {
        "color": "#333333"
      }, {
        "lightness": 40
      }
    ]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
      "color": "#f2f2f2"
    }, {
      "lightness": 19
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
      "color": "#fefefe"
    }, {
      "lightness": 17
    }, {
      "weight": 1.2
    }]
  }];

  styles = "";

  map = new google.maps.Map(
    document.getElementById("c48_mapa"), {
      center: { lat: ubicaciones[0][1], lng: ubicaciones[0][2] },
      zoom: 14,
      scrollwheel:!1
    }
  );

  map.setOptions({styles: styles, mapTypeControl: false, streetViewControl: false, fullscreenControl: false, scaleControl: false, disableDefaultUI: false });

  setMarkers(map);
}

const ubicaciones = [
  ["", 41.39418536942018, 2.1928291132392177, 3, '']
];

function setMarkers(map) {
  var map;
  var marker = [];
  //var infowindow = [];
  var content = [];

  var images = [{
    url: "../../icons/pin_drop.png",
    size: new google.maps.Size(39, 49),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(39, 49),
  }];

  /* ------------------------------------------------------------------------------------------ */

  for (var i = 0; i < ubicaciones.length; i++) {
    var content_ = "<div class='marker-holder'>";
        content_ += ubicaciones[i][3];
        content_ += "</div>";

    //infowindow[i] = new google.maps.InfoWindow();

    marker[i] = new google.maps.Marker({
      position: { lat: ubicaciones[i][1], lng: ubicaciones[i][2] },
      map,
      icon: images[0]
    });

    //infowindow[i].setContent(content_);
    //infowindow[i].open(map, marker[i]);

    //console.log(content[i]);
  }

  //infowindow.setContent(content[1]);
  //infowindow.open(map, marker[1]);
}
