$(document).ready(function(){


function displayData(){
  $.ajax({
    url: '/balance'
  }).done(function(data){
    $('p').html(data);
  })
}
displayData();
$('button').on('click', function(){
  displayData();
});
});
