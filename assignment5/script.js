window.prompt("Hi, What is your name?");
console.log("Okay I'll call you later");



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

document.getElementById('BtnDonate').addEventListener('click', function(){
prompt("Who is your favorite author?");

var author = ;
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

document.getElementById('BtnChurchill').addEventListener('click', function(){
  console.log("This speech was written by Churchill in the year 1940, Commmon Era");

  if () {
    result = "This is the most recent speech on the page";
  } else {
    result = "This is a more recent speech";
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  console.log("This  speech was written by Ghandi in the year 1942, Common Era");

    if () {
    result = "This is the most recent speech on the page";
  } else {
    result = "This is a more recent speech";
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  console.log("This speech was written by Demosthenes in the year 342, Before Commmon Era");

    if () {
    result = "This is the most recent speech on the page";
  } else {
    result = "This is a more recent speech";
  }

});

