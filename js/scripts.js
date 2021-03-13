// const getReservation = () => {
//   const numCampers = document.querySelector('#numCampers').value
//   console.log(numCampers)
//   const date = document.querySelector('#date').value
//   console.log(date)
//   const campType = document.querySelector('input[name=siteType]:checked').value
//   console.log(campType)

//   alert(`Your reservation is confirmed \n Reservation Details: \n ${numCampers} \n ${date} \n ${campType}`)
//   // use jQuery to close modal after reservation
//   $('#reserveModal').modal('hide');
// }



$(function() {
  $(".carousel").carousel( { interval: 2000 } );
  $("#carouselPause").click(function(){
      if ($("#carouselPause").children("i").hasClass("fa-pause")) {
          $(".carousel").carousel("pause");
          $("#carouselPause").children("i").removeClass("fa-pause");
          $("#carouselPause").children("i").addClass("fa-play");
      } else {
          $(".carousel").carousel("cycle");
          $("#carouselPause").children("i").removeClass("fa-play");
          $("#carouselPause").children("i").addClass("fa-pause"); 
      }
  });


  $("#reserveButton").on('click', () => {
    $('#reserveModal').modal('toggle')
  })

  $("#loginBtn").on('click', () => {
    $('#loginModal').modal('toggle')
  })
});