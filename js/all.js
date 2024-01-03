$(document).ready(function() {
    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('body').toggleClass('menu-show');
   });

   $('.gotop').click(function (e) { 
       e.preventDefault();
       $('html,body').animate({
           scrollTop:0
       },1500);
       
   });
    
});