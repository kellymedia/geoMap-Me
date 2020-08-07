console.log("CONNECTED!");

/* global moment */

function errorCallback(position) {
  alert("Oops! Please go to your settings and allow us to use your location.");
}

// When user clicks form button
  $("#mapMe-submit").on("click", function(event) {
    event.preventDefault();

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
    function successCallback(pos) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
  
      // Make a newMap object
      var newMap = {
        author: $("#author").val().trim(),
        body: $("#map-box").val().trim(),
        latitude: lat,
        longitude: lon,
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
      };
  
      console.log(newMap);
    
      // Send an AJAX POST-request with jQuery
      $.post("/api/new", newMap)
        // On success, run the following code
        .then(function() {
    
          var row = $("<div>");
          row.addClass("mapMe");
    
          row.append("<p>" + newMap.author + " Mapped: </p>");
          row.append("<p>" + newMap.body + "</p>");
          row.append("<p>" + newChirp.latitude + "</p>");
          row.append("<p>" + newChirp.longitude + "</p>");
          row.append("<p>At " + moment(newMap.created_at).format("h:mma on dddd") + "</p>");
    
          $("#map-area").prepend(row);
    
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
  
      }
  
    }
  
  });
  