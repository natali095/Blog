/*Popover button*/
// Ця функція працює
setTimeout((function() { 
    $('[data-toggle="popover"]').popover();
  }),500);



  // Ця не працює і не показує помилку
$(document).ready(function () {
  $('#btnSubmit').click(function () {
    $('#myAlert').show('fade');
  });
  
  $('#linkClose').click(function(){
    $('#myAlert').hide('fade');
  })
});
 

/*dome code here*/       
  // function display(){
  //   alert("it is nice to see you");
  //   display1();

  //   var x = Hello; //dataType:number

  //   x = true; //dataType:boolean

  //   function display1(){
  //     alert("To add your story, click on the button Add blog");
  
  //     var x = 10;
  //     return x;
  // }
  // }