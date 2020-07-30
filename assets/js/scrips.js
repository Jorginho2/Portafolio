$('.carousel').carousel({
    interval: 1500
  })
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
    })

    $(function () {
      $('[data-toggle="popover"]').popover()
      })

    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
    })

    $(function(){
      $("a").click(function(event) {
      if (this.hash !== "") {
      event.preventDefault();
      var gato = this.hash;
      $('html, body').animate({
      scrollTop: $(gato).offset().top
      }, 800, function(){
      window.location.hash = gato;
      });
      } 
      });
      });