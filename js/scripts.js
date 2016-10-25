var stringInput = "";
var arrayInput = [];
var dashedArray = [];
var dashedString = "";

var vowelTest = function(letter) {
  letter = letter.toLowerCase();
  return letter != "a" &&
  letter != "e" &&
  letter != "i" &&
  letter != "o" &&
  letter != "u";
};

$(document).ready(function() {
  $("form").submit(function(event){

    stringInput = $("input#userSentence").val();

    for (var i = 0; i < stringInput.length; i++) {// convert string to array
        arrayInput.push(stringInput[i]);
    };
    console.log(arrayInput);

    dashedArray = arrayInput.map(function(letter) {
      if (vowelTest(letter)){
        return letter;
      }
      else {

        return "-";
      }
    });
    dashedString = dashedArray.join('');
    $("#output").append(dashedString);
    $("#output").show();
    $("#input").hide();
    event.preventDefault();
  });
  $("button#restart").click(function() {
    location.reload();
  });

});
