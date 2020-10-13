  $(document).ready(function() {
    $(".section-example__card").on('click', function() {
     if ( $(this).hasClass('flip') ) {
      $(this).removeClass('flip');
        } else {
        $(this).toggleClass('flip');
     }
    });
        $(document).click( function(event){
        if( $(event.target).closest(".section-example__card").length ) 
          return;
        $(".section-example__card").removeClass('flip');
        event.stopPropagation();
      });
  });