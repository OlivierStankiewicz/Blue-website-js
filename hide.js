let hideButton = document.createElement("button");
hideButton.className = "hideButton";
hideButton.textContent = "Ukryj";
let showButton = document.createElement("button");
showButton.className = "showButton";
showButton.textContent = "Pokaż";
document.getElementById('cage-img').appendChild(hideButton);
document.getElementById('cage-img').appendChild(showButton);

$(document).ready(function(){
    $(".hideButton").click(function(){
      $("img").hide();
    });
    $(".showButton").click(function(){
      $("img").show();
    });
  });