/*Popover button*/

setTimeout((function() { 
    $('[data-toggle="popover"]').popover();
  }),500);


/* Submit button*/
 
$(document).ready (function () {
  $('#btnSubmit').click(function () {
    $('#myAlert').show('fade');


  setTimeout(function () {
    $('#myAlert').hide('fade');
  }, 2000);
});
  
  $('#linkClose').click(function(){
    $('#myAlert').hide('fade');
  });
});
 


