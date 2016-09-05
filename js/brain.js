var CHESSY = (function () {
  // Module
  // ------
  // Create the module we'll export
  var chessyModule = {};
  // returns a number that is random within range
  function randomNum(highNum) {
    return Math.floor(Math.random() * parseInt(highNum));
  }
  // return a name that sounds chessy
  function createChessName() {
    // First syllables(ish)
    var names_first = [
      "Bot",
      "Bant",
      "Ban",
      "Bam",
      "Che",
      "Ni",
      "Nu",
      "Swe",
      "Nor",
      "Ear",
      "Ma",
      "Well",
      "Dam",
      "Dan",
      "Dal",
      "Dol",
      "La",
      "Lan",
      "Lam",
      "Lol",
      "Al",
      "Am",
      "An",
      "Ba",
      "Bo",
      "Nitt",
      "Mi",
      "Mi",
    ];
    // Second and Third syllables(ish)
    var names_second = [
      "ov",
      "ski",
      "wate",
      "ate",
      "te",
      "er",
      "isk",
      "it",
      "ter",
      "bal",
      "fal",
      "tal",
      "wi",
      "zo"
    ];
    var names_third = [
      "son",
      "sson",
      "orn",
      "is",
      "es",
      "ns",
      "ms",
      "wood",
      "e",
      "er",
      "man",
      "sun",
      "ig",
      "ing",
      "ting",
      "wes",
      "ien"
    ];
    // return three syllables - 15% chance
    if(randomNum(100) < 15) {
      return names_first[randomNum(names_first.length)] + names_second[randomNum(names_second.length)] + names_third[randomNum(names_third.length)];
    }
    // otherwise just return two
    return names_first[randomNum(names_first.length)] + names_third[randomNum(names_third.length)];
  }
  // return a chess opening or defense
  function createChessOpeningName() {
    // Variable for returning the opening name
    var openingName = "";
    // Create arrays for seeds
    var chess_base = [
      // All the chess pieces
      "Pawn's",
      "Knight's",
      "Bishop's",
      "Rook's",
      "Queen's",
      "King's",
      // random funny words
      "Rocketship",
      "Elephant",
      "Vampire's",
      "Vampire",
      "Halloween",
      "Pumpkin",
      "Pumpkin Spice", // This one's seasonal
      "Scotch",
      "Vodka",
      "Dragon",
      "Rainbow",
      "Rainbow Road",
      "Martini",
      "French Fry",
      "Vinegar",
      "Spider",
      "Snake",
      "Mantis"
    ];
    // Prefixes
    var chess_prefix = [
      "Modern",
      // Locations
      "French",
      "Dutch",
      "Spanish",
      "American",
      "English",
      "Native American",
      "Indian",
      "Icelandic",
      "Jew",
      "Latvian",
      "Bosnian",
      "German",
      "Japanese",
      "Chinese",
      "Thai",
      "Mongolian",
      "Canadian",
      "Khazakh"
    ];
    // Random opening/defense sounding words
    var chess_words = [
      // Chess openings
      "Gambit",
      "Defense",
      "Opening",
      "Attack",
      "Countergambit",
      "Deflection",
      "Overload",
      "Sacrifice",
      //"X-Ray",
      "System",
      "Game",
      "Trap"
    ];
    // Suffixes
    var chess_modifiers = [
      "Declined",
      "Reversed"
    ];
    // Now assemble the actual opening/defense name.
    // 65% chance we'll have a piece or territory as the base.
    if(randomNum(100) < 65) {
      // If we're using a piece, 40% chance to start with our prefix!
      if(randomNum(100) < 40) {
        openingName = chess_prefix[randomNum(chess_prefix.length)];
      }
      openingName += " " + chess_base[randomNum(chess_base.length)];
    }
    // We could have player's name be the base as well.
    else {
      // 10% chance we'll have one name
      if(randomNum(100) < 10) {
        openingName += " " + createChessName();
      }
      // 90% chance we could have two hyphenated names
      else {
        openingName += " " + createChessName() + "-" + createChessName();
      }
    }
    // Add your "opening type"
    openingName += " " + chess_words[randomNum(chess_words.length)];
    // And optionally (10% chance), add your suffix
    if(randomNum(100) < 10) {
      openingName += " " + chess_modifiers[randomNum(chess_modifiers.length)];
    }
    // Return the opening/defense!
    return openingName;
  }
  // return a chess sounding event
  function createChessEvent() {
    var event = "";
    var cities = [
      "Chicago",
      "New York City",
      "Seattle",
      "St. Louis",
      "Baku",
      "St. Petersburg",
      "Moscow",
      "Dubai",
      "Madrid",
      "London",
      "Rio",
      "Hong Kong",
      "Shanghai",
      "Tokyo"
    ];
    var suffix = [
      "Classic",
      "Open",
      "Tournament",
      "Memorial"
    ]
    // Start with generating a year
    var year = randomNum(9) + 10;
    var year_suffix = randomNum(9).toString() + randomNum(9).toString();
    year += year_suffix;
    // Now take a city or name
    // 80% chance it's a city
    if(randomNum(100) < 80) {
      event += cities[randomNum(cities.length)] + " " + suffix[randomNum(suffix.length)];
    }
    else {
      event += createChessName()+ " " + suffix[randomNum(suffix.length)];
    }
    // And return the event!
    return "The " + event + " (" + year + ")";
  }
  // create an array of people
  function createPeople() {
    var tempPeople = [];
    for(var i = 0; i < 15; i++) {
      tempPeople[i] = createChessName() + " " + createChessName();
    }
    return tempPeople;
  }
  // create an array of openings
  function createOpenings() {
    var tempOpenings = [];
    for(var i = 0; i < 15; i++) {
      tempOpenings[i] = createChessOpeningName();
    }
    return tempOpenings;
  }
  // create an array of events
  function createEvents() {
    var tempEvents = [];
    for(var i = 0; i < 15; i++) {
      tempEvents[i] = createChessEvent();
    }
    return tempEvents;
  }
  // function that initializes chessy!
  chessyModule.init = function() {
    var people = createPeople();
    var openings = createOpenings();
    var events = createEvents();
    // actually fill up the html
    // people
    $(people).each(function(i) {
      // We're on the last person and we
      // don't need a comma
      if(i === (people.length-1)) {
        $(".people").append(people[i]);
      }
      // Otherwise, put the person and the comma
      else {
        $(".people").append(people[i] + ", ");
      }
    });
    // openings
    $(openings).each(function(i) {
      // We're on the last person and we
      // don't need a comma
      if(i === (openings.length-1)) {
        $(".openings").append(openings[i]);
      }
      // Otherwise, put the person and the comma
      else {
        $(".openings").append(openings[i] + ", ");
      }
    });
    // events
    $(events).each(function(i) {
      // We're on the last person and we
      // don't need a comma
      if(i === (events.length-1)) {
        $(".events").append(events[i]);
      }
      // Otherwise, put the person and the comma
      else {
        $(".events").append(events[i] + ", ");
      }
    });
  };
  // we have to give back our module to
  // get that init function now.
  return chessyModule;
})(); // Execute CHESSY function immediately (IIFE)

// After this script gets called via async,
// load jQuery, and then Chessy.
// -----------------------------
var scriptTag = document.createElement('script');
scriptTag.src = "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js";
// When the script loads, let's call MICROSTOCKS.init!
scriptTag.onload = scriptTag.onreadystatechange = CHESSY.init; 
// Append our jQuery script to the <body>
document.body.appendChild(scriptTag);