
function errorCallback(position) {
  alert("Oops! Please go to your settings and allow us to use your location.");
}

// When user clicks form button
  $("#geoMap-form").on("submit", function(event) {
    event.preventDefault();

    console.log("test");

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
    function successCallback(pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
  
      // Make a newMap object
      var newMapMe = {
        author: $("#author").val().trim(),
        body: $("#map-box").val().trim(),
        latitude: lat,
        longitude: lon,
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
      };
  
      // console.log(newMap);
    
      // Send an AJAX POST-request with jQuery
      $.post("/api/new", newMapMe)
        // On success, run the following code
        .then(function() {
    
          var row = $("<div>");
          row.addClass("mapMe");
    
          row.append("<p>" + newMap.author + " Mapped: </p>");
          row.append("<p>" + newMap.body + "</p>");
          row.append("<p>" + newMap.latitude + "</p>");
          row.append("<p>" + newMap.longitude + "</p>");
          row.append("<p>At " + moment(newMap.created_at).format("h:mma on dddd") + "</p>");
    
          $("#map-area").prepend(row);
          //add one marker with new map.lat/lon
    
        });
    
      // Empty each input box by replacing the value with an empty string
      $("#author").val("");
      $("#map-box").val("");
      
    }
  });
  
  // When the page loads, grab all of our mapMes
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("mapMe");
  
        row.append("<p>" + data[i].author + " mapped.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>" + data[i].latitude + "</p>");
        row.append("<p>" + data[i].longitude + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#map-area").prepend(row);

//         //create marker
//        var marker = new mapboxgl.Marker()
//        .setLngLat([30.5, 50.5])
//        .addTo(map); // add the marker to the map
  
      }
  
    }
  
  });
  