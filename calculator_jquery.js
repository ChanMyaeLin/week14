
    $(document).ready(function(){
        //take html tags with assigned values and set to variable.
        //set textarea to the value of "blank", and add to values.
        
         $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #openroundbracket, #closeroundbracket').click(function(){
              var get = $(this).val();
          var input = $('#input').val($('#input').val()+get); 
          });

          //clicking equal sign evaluates the textarea
          //To ask eval
        $('#equal').click(function(){
          var answer = $('#input').val(eval($('#input').val()));
          });

          $('#clear').click(function(){
            var clear = $('#input').val("");
          })

          // to ask sub string
        $("#backspace").click(function(){
          var backspace = $('#input').val($('#input').val().substring(0,$('#input').val().length-1))
        })

        /*
        //clicking equal sign evaluates the textarea
        $('#equal').click(function(){
          $('textarea').val(eval($('textarea').val()));
          });
      
        
        $('#clear').click(function(){
            $('textarea').val('');
          });
        
          
        $('#backspace').click(function(){
            $('textarea').val($('textarea').val().substring(0, $('textarea').val().length - 1));
          });*/
      
        });


