var stringInput = "";
var arrayInput = [];

$(document).ready(function() {

  $("form").submit(function(event){

    stringInput = $("input#userSentence").val();

    for (var i = 0; i < stringInput.length; i++) {
        arrayInput.push(stringInput[i]);
    }


    alert(arrayInput);


    event.preventDefault();
  });
});
