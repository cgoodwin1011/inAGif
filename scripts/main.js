// Charles Goodwin, 2018 cgoodwin2127@gmail.com
var kirk = {
  name: "Captain Kirk",
  phrase: "To boldy go ...",
}

var spock = {
  name: "Spock",
  phrase: "Fascinating."
}

var lucille = {
  name: "Lucille Ball",
  phrase: "The producer, really!"
}

var gene = {
  name: "Gene Roddenberry",
  phrase: "The creator"
}

var majel = {
  name: "Majel Barrett",
  phrase: "The 1st No. 1"
}

var pricard = {
  name: "Captain Picard",
  phrase: "Make it so!"
}

var dummyName = true;
var dummyPhrase = true;
var charactersAll = [];
var character = {
  name: '',
  phrase: '',
}

function makeBtn(inPerson, inPhrase) {
  theHTML = "<button data-person='"+inPerson+"' class='btn-gif'>"+inPhrase+"</button>"
  $("#buttons-holder").append(theHTML);
}

function addCharacter(inputName, inputPhrase, characterArray) {
  var characterEntry = {
    person: inputName,
    phrase: inputPhrase,
  }
  characterArray.push(characterEntry);
  console.log(characterArray)
}

function toggleMotion(inputEvent) {
  var currentState = $(event.target).attr("data-state");
  if (currentState == 'still') {
    var movingGif = $(event.target).attr('data-animate')
    $(event.target).attr('src', movingGif);
    $(event.target).attr('data-state', 'animate');
  } else {
    var stillGif = $(event.target).attr('data-still');
    $(event.target).attr('src', stillGif);
    $(event.target).attr('data-state', 'still');
  }
}

function handleBtnClick(inputBtn) {
  // In this case, the "this" keyword refers to the button that was clicked
  var person = inputBtn.attr("data-person");
  getCharacterGifs(person);
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
      console.log("getting gifs")
      // Storing an array of results in the results variable
      var results = response.data;
      // var screenedResults = [];

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

        // screen out inappropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          console.log("results[i] is"+results[i])

          var gifDiv = $("<div class='item'>");
          gifDiv.attr('id', i + "-set");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("<p class='rating'>").text("Rating: " + rating);

          // get name to display
          var name = "<p>" + inPerson + "</p>";

          // Creating an image tag
          var personImage = $("<img>");

          // acquiring info for still/antimated gifs
          personImage.attr("data-animate", results[i].images.fixed_height.url);
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-state", "still");
          personImage.addClass("clicking-photo");


          gifDiv.append(name);
          gifDiv.append(personImage);
          gifDiv.append(p);

          // Prepending the gifDiv
          $("#gif-holder").prepend(gifDiv);
          var instuctions = "<h2>" + $("#instructions").html("click picture to<br>toggle animation") + "</h2>";
          $("#instructions").css("font-size", "1.5em")
          $("#instructions").css('text-align', 'right')
          $("#gif-holder").prepend($("#instructions"))
        }
      }
    });
}



  // function displayCharacterArray(inputCharacterArray) {
  //   // var characterIndex = 0;
  //   debugger;
  //   console.log("inputCharacterArray is "+inputCharacterArray[0]);
  //   for (var characterIndex = 0; characterIndex < inputCharacterArray.length; characterIndex++ ) {
  //     for (var i = 0; i < inputCharacterArray.length; i++) {

  //       // screen out inappropiate conents
  //       if (inputCharacterArray[i].rating !== "r" && inputCharacterArray[i].rating !== "pg-13") {

  //         // Creating a div with the class "item"
  //         var gifDiv = $("<div class='item'>");
  //         gifDiv.attr('id', i + "-set");

  //         // Storing the result item's rating
  //         var rating = inputCharacterArray[i].rating;

  //         // Creating a paragraph tag with the result item's rating
  //         var p = $("<p class='rating'>").text("Rating: " + rating);

  //         // get name to display
  //         var name = "<p>" + inputCharacterArray[i].person + "</p>";

  //         // Creating an image tag
  //         var personImage = $("<img>");

  //         // acquiring info for still/antimated gifs
  //         // personImage.attr("src", results[i].images.fixed_height.url);
  //         personImage.attr("data-animate", inputCharacterArray[i].images.fixed_height.url);
  //         personImage.attr("src", inputCharacterArray[i].images.fixed_height_still.url);
  //         personImage.attr("data-still", inputCharacterArray[i].images.fixed_height_still.url);
  //         personImage.attr("data-state", "still");
  //         personImage.addClass("clicking-photo");

  //         gifDiv.append(name);
  //         gifDiv.append(personImage);
  //         gifDiv.append(p);

  //         // Prepending the gifDiv to the "#gifs-appear-re" div in the HTML
  //         $("#gif-holder").prepend(gifDiv);
  //         var instuctions = "<h2>" + $("#instructions").html("click picture to<br>toggle animation") + "</h2>";
  //         // $("#instructions").attr('id', 'instructions');
  //         $("#instructions").css("font-size", "1.5em")
  //         $("#instructions").css('text-align', 'right')
  //         $("#gif-holder").prepend($("#instructions"))
  //       }
  //     }
  //   }
  // }
