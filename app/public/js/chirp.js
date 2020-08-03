function errorCallback(position) {

  const lat = 0;
  return lat;

}

$("#chirp-submit").on("click", function(event) {

  event.preventDefault();

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  
  function successCallback(pos) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;

    var newChirp = {
      author: $("#author").val().trim(),
      body: $("#chirp-box").val().trim(),
      tag: $("#cool-tags").val().trim(),
      latitude: lat,
      longitude: lon,
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };

    console.log(newChirp);

// Send an AJAX POST-request with jQuery
    $.post("/api/new", newChirp)
// On success, run the following code
    .then(function() {

      var row = $("<div>");
      row.addClass("chirp");

      console.log("new Chirp: ",newChirp);

      row.append("<p>" + newChirp.author + " chirped: </p>");
      row.append("<p>" + newChirp.body + "</p>");
      row.append("<p>" + newChirp.tag + "</p>");
      row.append("<p>" + newChirp.latitude + "</p>");
      row.append("<p>" + newChirp.longitude + "</p>");
      row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
      $("#chirp-area").prepend(row);

    });
    // Empty each input box by replacing the value with an empty string
  $("#author").val("");
  $("#chirp-box").val("");

  } 
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      console.log(data[i]);
      console.log(data[i].latitude);

      var row = $("<div>");
      row.addClass("chirp");
      row.append("<p>" + data[i].author + " pinned.. </p>");
      row.append("<p>" + data[i].body + "</p>");
      row.append("<p>" + data[i].tag + "</p>");
      row.append("<p>" + data[i].latitude + "</p>");
      row.append("<p>" + data[i].longitude + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $("#chirp-area").prepend(row);

    }

  }

});