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

var picard = {
  name: "Captain Picard",
  phrase: "Make it so!"
}

var dummyName = true;
var dummyPhrase = true;
var charactersAll = [kirk, spock, lucille, gene, majel, picard];
var character = {
  name: '',
  phrase: '',
}
var maxLevel = 'PG';

var slateTheme = {
  c00LightGrayRgb: 'rgb(211,211,211)',
  c00LightGrayHex: '#d3d3d3',
  c01BaseColorRgb: 'rgb(112,128,114)',
  c01BaseColorHex: '#708090',
  c02HighlightColorRgb: 'rgb(122,187,255)',
  c02HighlightColorHex: '#7ABBFF',
  c03LightColorRgb: 'rgb(198, 226, 255)',
  c03LightColorHex: '#C6E3FF',
  c04DarkColorRgb: 'rgb(61, 93, 127)',
  c04DarkColorHex: '#3D5D7F',
  c05NeutralColorRgb: 'rgb(159,181,204)',
  c05NeutralColorHex: '#9FB5CC',
}

var wowMan = {
  c00LightGrayRgb: 'rgb(255,255,00)',
  c00LightGrayHex: '#FFFF00',
  c01BaseColorRgb: 'rgb(255,117,76)',
  c01BaseColorHex: '#FF474C',
  c02HighlightColorRgb: 'rgb(232,82,69)',
  c02HighlightColorHex: '#E85245',
  c03LightColorRgb: 'rgb(255, 89, 125)',
  c03LightColorHex: '#FF597D',
  c04DarkColorRgb: 'rgb(232,69,187',
  c04DarkColorHex: '#E845BB',
  c05NeutralColorRgb: 'rgb(233,76,255)',
  c05NeutralColorHex: '#E94CFF',
}

var klingonTheme = {
  c00LightGrayRgb: 'rgb(204,0,0)',
  c00LightGrayHex: '#CC0000',
  c01BaseColorRgb: 'rgb(127,0,0)',
  c01BaseColorHex: '#7F0000',
  c02HighlightColorRgb: 'rgb(255,76,76)',
  c02HighlightColorHex: '#FF4C4C',
  c03LightColorRgb: 'rgb(255, 0, 0)',
  c03LightColorHex: '#FF0000',
  c04DarkColorRgb: 'rgb(127,38,38',
  c04DarkColorHex: '#7F2626',
  c05NeutralColorRgb: 'rgb(204,0,0)',
  c05NeutralColorHex: '#CC0000',
}

function changeColorScheme(inputScheme) {
  inputScheme = eval(inputScheme);
  c00rgb = inputScheme.c00LightGrayRgb;
  c00hex = inputScheme.c00LightGrayHex;
  c01rgb = inputScheme.c01BaseColorRgb;
  c01hex = inputScheme.c01BaseColorHex;
  c02rgb = inputScheme.c02HighlightColorRgb;
  c02hex = inputScheme.c02HighlightColorHex;
  c03rgb = inputScheme.c03LightColorRgb;
  c03hex = inputScheme.c03LightColorHex;
  c04rgb = inputScheme.c04DarkColorRgb;
  c04hex = inputScheme.c04DarkColorHex;
  c05rgb = inputScheme.c05NeutralColorRgb;
  c05hex = inputScheme.c05NeutralColorHex;

  $("#banner").css('color', c05hex);

  $("body").css('background-color', c04hex);

  $(".btn-submit").css('color', c05hex);

  $(".btn-gif").css('color', c05hex);

  $(".btn-submit").css('border', '1px '+c01hex+' solid');

  $(".col-border:before").css('border-left', '1px '+c03hex+' solid');

  $("#everything").css('background-color', c04hex);

  $("#explainer").css('color', 'black');

  $("#form-label").css('color', c05hex);

  $("#gif-holder").css('background-color', c04hex);

  $("header").css('min-height', '5em');
  $("header").css('background-color', c00hex);

  $("#instructions").css('color', c02hex);

  $(".item").css('color', 'black');
  $(".item").css('background-color', 'none');

  $("#logo").css('color', 'black');
  $("#logo").css('background-color', 'none');

  $("#logo-name").css('color', 'black');
  $("#logo-name").css('background-color', 'none');

  $("#name-box").css('color', c04hex);
  $("#name-box").css('border', '1px'+ c04hex +'solid');
  $("#name-box").css('background-color', c03hex);

  $("#phrase-box").css('color', c04hex);
  $("#phrase-box").css('border', '1px'+ c04hex +'solid');
  $("#phrase-box").css('background-color', c03hex);

  $("#sidebar-right").css('background-color', c01hex);
}


function originalColorScheme() {

  $(body).css('background-color', 'darkColorHex')

  $(".btn-submit").css('color', '#9FB5CC')

  $(".btn-gif").css('color', '#9FB5CC')

  $(".btn-submit").css('border', '1px #708090 solid')

  $(".col-border:before").css('border-left', '1px #C7E2FF solid')

  $("#everything").css('background-color', 'slategray')

  $("#explainer").css('color', 'black')

  $("#form-label").css('color', '#9FB5CC')

  $("#gif-holder").css('background-color', 'darkColorHex')

  $("header").css('min-height', '5em')
  $("header").css('background-color', 'lightgray')

  $("#instructions").css('color', '#C7E2FF')

  $(".item").css('color', 'black')
  $(".item").css('background-color', 'none')

  $("#logo").css('color', 'black')
  $("#logo").css('background-color', 'none')

  $("#logo-name").css('color', 'black')
  $("#logo-name").css('background-color', 'none')

  $("#name-box").css('color', 'darkColorHex')
  $("#name-box").css('border', '1px #3D5D7F solid')
  $("#name-box").css('background-color', '#C6E3FF')

  $("#phrase-box").css('color', 'darkColorHex')
  $("#phrase-box").css('border', '1px #3D5D7F solid')
  $("#phrase-box").css('background-color', '#C6E3FF')

  $("#sidebar-right").css('background-color', 'slategray')
}

function resetTextFields() {
  dummyName = true;
  dummyPhrase = true;
  $("#name-box").css('color', 'darkColorHex');
  $("#name-box").css('background-color', '#C6E3FF');
  $("#phrase-box").css('color', 'darkColorHex');
  $("#phrase-box").css('background-color', '#C6E3FF');
  $("#name-box").val('character name');
  $("#phrase-box").val('button phrase');
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

function makeBtn(inPerson, inPhrase) {
  theHTML = "<button data-person='"+inPerson+"' class='btn-gif'>"+inPhrase+"</button>"
  $("#buttons-holder").append(theHTML);
}

function initialize(characterArray) {
  for (i=0; i < characterArray.length; i++) {
    makeBtn(characterArray[i].name, characterArray[i].phrase)
  }
}

function addCharacter(inputName, inputPhrase, characterArray) {
  var characterEntry = {
    person: inputName,
    phrase: inputPhrase,
  }
  characterArray.push(characterEntry);
  console.log(characterArray)
}

function tooHot(maxAllowedLevel, thisGifLevel) {
  switch(maxAllowedLevel) {
    case 'R' || 'X':
      return false;
      break;
    case 'PG-13':
      if (thisGifLevel == 'r') {
        return true;
      } else {
        return false;
      };
      break;
    case 'PG':
      if (thisGifLevel == 'r' || thisGifLevel == 'pg-13') {
        return true;
      } else {
        return false;
      };
      break;     
    case 'G':
      if (thisGifLevel != 'g') {
        return false;
      } else {
        return true;
      }
      break;
  }
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
      // console.log("getting gifs")
      // Storing an array of results in the results variable
      var results = response.data;

      // Loop over results
      for (var i = 0; i < results.length; i++) {

        // screen out inappropriate rating
        // if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        if (!tooHot(maxLevel, results[i].rating)) {
          // console.log("results[i] is"+results[i])

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