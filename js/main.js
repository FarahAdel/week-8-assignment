var SaveMe = prompt("Hi How are you?");

console.log(SaveMe);

document.getElementById("userlink").innerText = SaveMe

/*tooltip*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })