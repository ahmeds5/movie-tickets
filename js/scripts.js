//back-end logics
function Ticket(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.price = function() {
  return this.movie
}

//front-end logics
$(document).ready(function(){
  $("form.movie-tickets").submit(function(event){
    event.preventDefault();
    var inputtedMovie = $("#movie option:selected").val();
    var inputtedAge = $("#movie option:selected").val();
    var inputtedTime = $("#movie option:selected").val();
    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);

    $("#price").text(newTicket.price());
  })
})
