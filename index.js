$(document).ready(function(){


    var expression = []

    $('.buttons').click(function(){
        $('.operator').removeAttr('disabled') //enable operators after a number has been entered
            .css('background-color', 'red')
        var buttonText = $(this).val()
        expression.push(buttonText)  //get button text
        $('#screen').html(expression) //display on screen
    });

    $('.operator').click(function(){
        var buttonText = $(this).val();
        $('.operator').attr('disabled','disabled') //disable operator buttons to prevent back to back
            .css('background-color', 'gray')       //operators from being entered
        expression.push(buttonText)  //get button text
        $('#screen').html(expression); //display on screen



    });

    $('#allClear').click(function (){
        $('#screen').html('') //clear screen display
        expression.length = 0  // empty array

    });

    $('#clearEntry').click(function(){
        expression.pop() //remove last element from array
        $('#screen').html(expression)
    })


   // var operators = ['+','-','*','/','%']


    $('#equals').click(function(){
        $('.operator').removeAttr('disabled')//enable operators after equal button has been entered
            .css('background-color', 'red')
        var ans = eval(expression.join('')) //remove commas and evaluates expression
        expression.length = 0; //empty array
        expression.push(ans)  // change expression to ans
        $('#screen').html(expression) //display expression as an answer so when the next operation occurs
                                      //the expression starts with the already evaluated string rather than
                                      //the previous long expression

    });


    $('button').hover(function(){
	 $(this).toggleClass('hoverColor')

 });





}); // end document ready






