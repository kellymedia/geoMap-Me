console.log("CONNECTED!");

/* global moment */

// When user clicks form button
$("#mapMe-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newMap object
    var newMap = {
      author: $("#author").val().trim(),
      body: $("#map-box").val().trim(),
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
        row.append("<p>At " + moment(newMap.created_at).format("h:mma on dddd") + "</p>");
  
        $("#map-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#map-box").val("");
  });
  
  // When the page loads, grab all of our mapMes
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  
        var row = $("<div>");
        row.addClass("mapMe");
  
        row.append("<p>" + data[i].author + " mapped.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#map-area").prepend(row);
  
      }
  
    }
  
  });
  