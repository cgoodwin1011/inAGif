function handleBtnClick(inputBtn) {
  // In this case, the "this" keyword refers to the button that was clicked
  var person = inputBtn.attr("data-person");
 
}

function getCharacterGifs(inPerson) {
  // Constructing a URL to search Giphy for the name of the person who said the quote
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    inPerson + "&api_key=NLxjdcO4JQ8nb9OxWKIS5lWQVaIwmxUn&limit=10";

  // Performing our AJAX GET request
  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data comes back from the API
    .then(function (response) {
      // Storing an array of results in the results variable
      var results = response.data;
      var screenedResults = [];
      // Looping over every result item
      for (var i = 0; i < results.length; i++) {
        // console.log(results[i]);

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div with the class "item"
          screenedResults.push(results[i]);
          var gifDiv = $("<div class='item'>");
          gifDiv.attr('id', i + "-set");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p class='rating'>").text("Rating: " + rating);

          // get name to display
          var name = "<p>" + person + "</p>";

          // Creating an image tag
          var personImage = $("<img>");

          // acquiring info for still/antimated gifs
          // personImage.attr("src", results[i].images.fixed_height.url);
          personImage.attr("data-animate", results[i].images.fixed_height.url);
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-state", "still");
          personImage.addClass("clicking-photo");
          // console.log(personImage)

          gifDiv.append(name);
          gifDiv.append(personImage);
          gifDiv.append(p);

          // Prepending the gifDiv to the "#gifs-appear-re" div in the HTML
          $("#gif-holder").prepend(gifDiv);
          var instuctions = "<h2>" + $("#instructions").html("click picture to<br>toggle animation") + "</h2>";
          // $("#instructions").attr('id', 'instructions');
          $("#instructions").css("font-size", "1.5em")
          $("#instructions").css('text-align', 'right')
          $("#gif-holder").prepend($("#instructions"))
        }
        return screenedResults;
      }
    });
  // }
}