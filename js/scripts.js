//back-end logics
function Ticket(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}

Ticket.prototype.price = function() {
  if (this.time === 1){
    return 11;
  }else if (this.time ===2){
    return this.movie
  }
}

//front-end logics
$(document).ready(function(){
  $("form.movie-tickets").submit(function(event){
    event.preventDefault();
    var inputtedMovie = parseInt($("#movie option:selected").val());
    var inputtedAge = parseInt($("#age option:selected").val());
    var inputtedTime = parseInt($("#time option:selected").val());
    var newTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);

    $("#price").text(newTicket.price());
  })
})
