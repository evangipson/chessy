var CHESSY = (function () {
  // Module
  // ------
  // Create the module we'll export
  var chessyModule = {};
  // Variables
  // ---------
  // These are used in more than 1 function, so
  // they will be declared outside of function scope,
  // in module scope.
  var numberGenerated = 50;
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
      "Chi",
      "Cha",
      "Hi",
      "He",
      "Del",
      "Dip",
      "Ev",
      "Kev",
      "Kin",
      "Kee",
      "Kag",
      "Jen",
      "Shy",
      "Sty",
      "Gia",
      "Mich",
      "Bel",
      "Don",
      "Rem",
      "Cro",
      "Jame",
      "Mil",
      "Mor",
      "Mon",
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
      "ins",
      "ens",
      "ons",
      "uns",
      "ims",
      "ems",
      "oms",
      "ums",
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
      "Pawn",
      "Knight",
      "Bishop",
      "Rook",
      "Queen",
      "King",
      "Two Pawns",
      "Three Pawns",
      "Four Pawns",
      "Two Knights",
      "Two Bishops",
      "Two Rooks",
      // random funny words
      "Rocketship",
      "Pikeman's",
      "Elephant",
      "Elephant's",
      "Cheetah",
      "Cheetah's",
      "Penguin",
      "Penguin's",
      "Walrus",
      "Tucan",
      "Dancing Queen", // Young and sweet, only 17
      "Vampire's",
      "Vampire",
      "Halloween",
      "Pumpkin",
      "Pumpkin Spice", // This one's seasonal
      "Scotch",
      "Vodka",
      "Dragon",
      "Rainbow",
      "Rainbow Road", // Fuck Rainbow Road
      "Martini",
      "French Fry", // Damn that sounds good
      "Vinegar",
      "Spider",
      "Snake",
      "Mantis",
      "Lotus",
    ];
    // Prefixes
    var chess_prefix = [
      "Modern",
      "Revolving",
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
      "Trap",
      // Funny ones
      "Kettle",
      "Bind",
      "Storm"
    ];
    // Suffixes
    var chess_modifiers = [
      "Declined",
      "Reversed"
    ];
    // Now assemble the actual opening/defense name.
    // 75% chance we'll have a piece or territory as the base.
    if(randomNum(100) < 75) {
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
    ];
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
  // generate just one person
  function createPerson() {
    // We're returning this
    var tempPerson = "";
    // Determine chance for suffix and/or prefix
    var suffixChance = 5;
    var prefixChance = 5;
    // Some prefixes to make them royal
    var names_prefix = [
      "Duke",
      "Earl",
      "Housecarl",
      "King",
      "Queen",
      "Dame",
      "Knight",
      "Ser",
      "Syre",
      "Viscount",
      "Lord",
      "Prince",
      "Princess",
      "Duchess",
      "Countess",
      "Count",
      "Baron",
      "Baroness"
    ];
    // Suffixes
    var names_suffix = [
      "III",
      "IV",
      " Sr.",
      " Jr.",
      " PhD.",
      " M.D."
    ];
    // Generate the person
    tempPerson = createChessName() + " " + createChessName();
    if(randomNum(100) < prefixChance) {
      tempPerson = names_prefix[randomNum(names_prefix.length)] + " " + tempPerson;
    }
    if(randomNum(100) < suffixChance) {
      tempPerson = tempPerson + " " + names_suffix[randomNum(names_suffix.length)];
    }
    return tempPerson;
  }
  // create an array of people
  function createPeople() {
    // Variable to hold our people and return them
    var tempPeople = [];
    // Generate our people
    for(var i = 0; i < numberGenerated; i++) {
      tempPeople[i] = createPerson();
    }
    return tempPeople;
  }
  // create an array of openings
  function createOpenings() {
    var tempOpenings = [];
    for(var i = 0; i < numberGenerated; i++) {
      tempOpenings[i] = createChessOpeningName();
    }
    return tempOpenings;
  }
  // create an array of events
  function createEvents() {
    var tempEvents = [];
    for(var i = 0; i < Math.floor(numberGenerated * 0.5); i++) {
      tempEvents[i] = createChessEvent();
    }
    return tempEvents;
  }
  // create a chess quote using our
  // random pieces
  function createQuote() {
    // Set up array of a ton of quotes
    var quotes = [
      createPerson() + " used the " + createChessOpeningName() + ", even though he favors the " + createChessOpeningName() + " with the black pieces.",
      "I remember the game between " + createPerson() + " and " + createPerson() + " at the " + createChessEvent() + "... white played the " + createChessOpeningName() + " while black responded with the " + createChessOpeningName() + ".",
      createPerson() + " would never use the " + createChessOpeningName() + " - it's far too risky against the " + createChessOpeningName() + "!",
      createPerson() + " has a long history of playing the " + createChessOpeningName() + " but here at the " + createChessEvent() + " he elected for the " + createChessOpeningName() + " with the white pieces.",
      "It's typical in the " + createChessOpeningName() + " for e4 to be under fire, but " + createPerson() + " has done something marvelous with the white pieces! It's almost looking like a " + createChessOpeningName() + " but with the white pieces instead.",
      "What a dynamic game revolving around d4 and e6 taking place between " + createPerson() + " and the ferocious " + createPerson() + ". It started in a sort of " + createChessOpeningName() + " for the white pieces, then transformed into a " + createChessOpeningName() + ".",
      "Here we are at " + createChessEvent() + ", and the " + createChessOpeningName() + " is being played by " + createPerson() + " against " + createPerson() + "!"
    ];
    // Return one of their quotes
    return quotes[randomNum(quotes.length)];
  }
  // function that initializes chessy!
  chessyModule.init = function() {
    // Get our data
    var people = createPeople();
    var openings = createOpenings();
    var events = createEvents();
    var quote = createQuote();
    // shift out our first word in quote
    var quoteWords = quote.split(" ");
    var firstWord = quoteWords.shift();
    // put in span in our quote for presentation purposes
    firstWord = "<span class=\"first-letter\">&ldquo;" + firstWord + " </span>";
    // reassemble our quote
    quote = firstWord + quoteWords.join(" ") + "&rdquo;";
    // Fill up the html
    // ----------------
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
    // quote
    $(".quote").html(quote);
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