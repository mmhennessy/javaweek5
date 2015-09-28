//This assignment was created in part with help from codes written by fellow students
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
 var ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
  var demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech];

    var name = window.prompt("Hi, What is your name?");
    if (name = "") {
      result = "Hello";
    } else {
      result = "Okay I'll just call you User";
    };

document.getElementById('BtnDonate').addEventListener('click', function(){
prompt("Who is your favorite author?");

var author = "" ;
var result;

switch (author) {
  case "Churchill";
  result = "Churchill was 66 durring his speech";
  break;

  case "Ghandi";
  result = "Ghandi was 73 durring his speech";
  break;

  case "Demosthenes";
  result = "Demosthenes was 42 durring his speech";
  break;

  default:
  result = "Error in spelling of the author's name";
}
});

var speechyear
result;

if ("Was the speech written during the common era?") {
  result = true;
} else {
  result = false;
  console.log("Speech was written before the common era");
};

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by Churchill in the year 1940, Commmon Era");

  if ("This was the most recent speech") {
    result = true;
    console.log("This was the most recent speech on the page");
  } else {
    result = false;
    console.log("This is a more recent speech");
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This  speech was written by Ghandi in the year 1942, Common Era");

    if ("This was the most recent speech") {
      result = true;
    console.log("This is the most recent speech on the page");
  } else {
    result = false;
    console.log("This is a more recent speech");
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by Demosthenes in the year 342, Before Commmon Era");

    if ("This was the most recent speech") {
      result = true;
      console.log("This is the most recent speech on the page");
  } else {
    result = false;
    console.log("This is a more recent speech");
  }

});
