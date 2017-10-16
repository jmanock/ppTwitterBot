// $.get('/search', function(data){
//
// });
$(document).ready(function(){
  for(var i = 0; i < links.length; i++){
    var something = links[i];
    $('#results').append('<img src='+something+'></img><br>');


  }
});
var links =[
  'https://pbs.twimg.com/media/DMPqSfUXkAAEOGx.jpg:large',
  'https://pbs.twimg.com/media/DMPrg8gW4AAQn3f.jpg'
];
