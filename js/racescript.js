$(function() {

    $("button").click(function(){
        $("#box").fadeOut(1000);

    });

    /*-----------------
      jQUERY SELECTORS
      ----------------- */

    //$("h2,h3,h4").css("border","solid 1px red")

    //$("#container").css("border","solid 1px red")

    //$(".lead").css("border","solid 1px red")

    //$("li:first").css("border","solid 1px red")

    //$("div em").css("border","solid 1px red")

    //$("div > p").css("border","solid 1px red")

    //$(":contains('Brad')").css("border","solid 1px red")



 /*  ----------------------
      jQUERY EVENT METHODS
     ---------------------- */

    $("#box").click(function(){
        alert("you just clicked the box");

    });

    $("input").blur(function(){

        if($(this).val()=="") {
            $(this).css("border","solid 1px red");
            $("#box").text('forgot to add text?');
        }

    });


    $("input").keydown(function(){

        if($(this).val() !== "") {
            $(this).css("border","solid 1px #777");
            $("#box").text("thanks for that!");

        }

    });

    $("#box").hover(function(){

        $(this).text("you hovered over me");

    },function(){

        $(this).text("you hovered off of me");


    });






/*  ------------------
      jQUERY CHAINING
    ------------------ */


    //$("box1").fadeIn().delay(2000).css("background","red").slideDown();

    $(".notification-bar").delay(1000).slideDown().delay(3000).fadeOut();




    /*  ------------------
         jQUERY HIDE/SHOW
        ------------------  */

    //$("h1").hide();
    //$(".hidden").show();

    //$("p").fadeOut();

    //$("div.hidden").fadeIn(4000);

    $("#box1").click(function(){
        $(this).fadeTo(2000,0.25,function(){

            $(this).slideUp();

        });
    })

    $("div.hidden").slideDown();

    $("button").click(function(){
        $("#box1").slideToggle();
    });

    


    /* ------------------
        jQUERY ANIMATION
       ------------------*/

    $("#left").click(function(){
        $(".box").animate({
            left:"-=40px",
            fontSize: "+=2px"
        },function() {
    
    
        });

    });


    
    $("#up").click(function(){
        $(".box").animate({
            top:"-=40px",
            opacity: "+=0.01"
        },function() {
    
    
        });

    });


    
    $("#right").click(function(){
        $(".box").animate({
            left:"+=40px",
            fontSize: "-=2px"
        },function() {
    
    
        });

    });


    
    $("#down").click(function(){
        $(".box").animate({
            top:"+=40px",
            opacity: "-=0.01"
        },function() {
    
    
        });

    });

    /* -------------
         jQUERY CSS
       ------------- */

    $("#circle2").css({
        "background":"#8a8d22",
        "display":"inline-block",
        "color":"white",
        "text-align":"center",
        "line-height":"140px",
        "height":"140px",
        "width":"140px"

    }).addClass("circleShape");

    

    //RACE CAR GAME

    //click the go button
    $("#go").click(function(){

        // build a function to see if a car has won the race
        function checkIfComplete(){

            if(isComplete == false) {
                isComplete = true;

            }else {
                place="second";
            }

        }

        //get the width of the cars
        var carWidth=$("#car1").width();

        //get width of racetrack

        var raceTrackWidth = $(window).width()- carWidth;

        //generate random number between 1-5000

        var raceTime1 = Math.floor((Math.random()*15000) + 1);

        var raceTime2 = Math.floor((Math.random()*15000) + 1);

        //set a flag variable to false by default to check to see if a car has finished the race
        var isComplete= false;

        //set a flag variable to FIRST by default 
        var place ="first";

        $('#car1').animate({
            //move car width of racetrack
            
            left: raceTrackWidth,


        },raceTime1,function(){

            //animation is complete

            //run a  function 
            checkIfComplete();

            //give text feedback about race
            $('#raceInfo1 span').text( 'Finished in ' + place + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );


        });


        $('#car2').animate({
            //move car width of racetrack
            
            left: raceTrackWidth


        },raceTime2,function(){

            //animation is complete

            //run a  function 
            checkIfComplete();

            //give text feedback about race
            $("#raceInfo2 span").text('Finished in '+ place +'and completed the race in '+ raceTime2 + ' milliseconds!');


        });

        $("#reset").click(function(){
            $(".car").css("left","0");
            $(".raceInfo span").text("");

        });



    });

});





