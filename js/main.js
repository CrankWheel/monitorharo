$(document).ready(function(){
 
  $(".owl").owlCarousel({
 
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 100,
      autoPlay : false,
      singleItem:true
});

  $(".next").click(function(){
    $(".owl").trigger('owl.next');
  })
  $(".prev").click(function(){
    $(".owl").trigger('owl.prev');
  })

});