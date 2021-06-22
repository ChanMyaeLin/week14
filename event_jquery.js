
$('#content').hide();

$('#addbtn').click(function(){
    $('#content').toggle(2000);
})

var price=0;
var qty=0;
var cost=0;

/*$('#qty').keyup(function(){
    price = $('#price').val();
    qty =$('#qty').val();
    cost = price * qty
    console.log(cost)
    $('#cost').val(cost);
})*/

$('#qty').on ('keyup',{'itemnames': 'humbeger'},
function(e){
    price = $('#price').val();
    qty =$('#qty').val();
    cost = price * qty
    console.log(cost)
    $('#cost').val(cost);
    console.log(e.type)
    console.log(e.data.itemnames)
})

console.log($('#content').children());
console.log($('#addbtn').next());
console.log($('li').equal(0));
    

