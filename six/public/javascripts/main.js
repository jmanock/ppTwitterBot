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
  'https://twitter.com/Matasnet/status/919506462048772096',
  'https://twitter.com/ChiomaBanks/status/919505996942336000',
  'https://twitter.com/ANTONYBRADDON/status/919505292232089600',
  'https://twitter.com/Magidas1/status/919505893238063105',
  'https://twitter.com/first4edu/status/919507046407593984',
  'https://twitter.com/gbramwellxo/status/919507092339396609',
  'https://twitter.com/IAmNotAFakeGirl/status/919505647498137600',
  'https://twitter.com/Pikagamergirl/status/919506780438319105',
  'https://twitter.com/Bun_Bun31/status/919505295923204096',
  'https://twitter.com/Xhakaal/status/919506878387822593'
];
