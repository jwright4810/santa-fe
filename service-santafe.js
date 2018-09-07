//function displays service info when service tab is clicked
$(document).ready(function() {
    $('.tab-item').click(function(){
        $('.tab-info').hide();
        $('#tab'+$(this).attr('target')).show();
        
    }) 
  })
   
  //function keeps service tab colored grey until new service tab is clicked; default is horse services tab
  
  
  $(document).ready(function() {
    $('#horse').toggleClass("clicked");
    $('.tab-item').click(function() {
       $(this).toggleClass("clicked");
       $(".tab-item").not(this).removeClass("clicked");     
    })
  })

  //header transition function

  $(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 49) {
          $('body').addClass('header-fixed');
      } else {
          $('body').removeClass('header-fixed');
      }
    });
  });