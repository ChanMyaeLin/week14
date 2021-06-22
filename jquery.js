$(document).ready(function(){
/*console.log("hello jquery");
console.log($('ul').html());
console.log($('ul').text())

console.log($('#one').html());
console.log($('#one').text());
console.log($('.list-group-item').html())

$('ul li').each(function(index){
    console.log($(this).html());
    //console.log($('.list-group-item').html())
})

console.log($('ul'));
console.log($('form'));

console.log($('#one').html());
console.log($('#one').text());
console.log($('#exchange_valueunit1').html());
console.log($('#exchange_valueunit1').text());
console.log($('#exchange_valueunit1'));
console.log(document.getElementById('exchange_valueunit1'))
console.log($('#one').html());
console.log($('#one').text());
console.log($('#two'));
console.log($('#three'));
console.log($('#items'));
console.log(document.getElementById('items'))
console.log($('.priority').html())
console.log($('.priority'))

//css function
$('li').css('background-color','blue')
$('li').css({
    'background-color':'green',
    'padding-left':'50'
})

$('#heading,#subheading' ).css({
    'background-color':'green',
    'color':"yellow",
    'border':'2px red solid'
})*/

//addclass
/*
$('li').addClass('bg-primary')
//$('li').addClass('items')
$('li').removeClass('bg-primary')
//$('li').removeClass('hot')
$('li').removeClass('priority')
$('li').click(function(){
    $(this).toggleClass('hot');
    $(this).append('**')
    $(this).prepend('++')
})
$('ul').before('<h1>Food Items</h1>')
$('ul').after('Please select one item')
$('div').attr('class','container border solid red 2px height=400px')
$('input').attr('value','500')*/

$('.mydiv').click(function(){
    $(this).hide(1000);
})

$('#showme').click(function(){
    $('.mydiv').show(2000);
})

$('#toggleme').click(function(){
    $('.mydiv').toggle(2000);
})




$('#fadein').click(function(){
    $('.fade1').hide().fadeIn(1500);
    $('.fade2').hide().fadeIn(2500);
   
})

$('#fadeout').click(function(){
    $('.fade1,.fade2').fadeOut(2000)
})

$('.loading').fadeOut(5000);
//$('.fruit1,fruit2,fruit3').hide();
    $('.fruit1').hide().fadeIn(5000);
    //$('.fruit2').slideUp(5000);
    $('.fruit3').hide().slideDown(5000);
//animate
    $('.fruit1,.fruit3').animate(
        {'height':500 ,'opacity':0.1,'left':50},1000,"swing",
        function(){
            $('fruit1').attr('alt','berry')
        }

    )

   
    


})




