//Selects a random number 
// Number should be should be between 30-100
$(document).ready(function () {
    var Random = Math.floor(Math.random() * 70 + 30)
    // append a random number to the randomNumber id in html doc 
    $("#RandomNumber").text(Random);

    //  Decaring variables for tallies
    var wins = 0;
    var losses = 0;
    var Totalscore = 0;
    //append to the html id
    $("#totalwins").text(wins);
    $("#totallosses").text(losses);


    // Select random numbers for each of the crystal. each number will be different at the start of each game
    // numbers will be between 3-13
    var first1 = Math.floor(Math.random() * 10 + 3);
    var second2 = Math.floor(Math.random() * 10 + 3);
    var third3 = Math.floor(Math.random() * 10+ 3);
    var fourth4= Math.floor(Math.random() * 10+ 3);


    function winner() {
        alert("You win");
        wins++
        $("#totalwins").text(wins);
        // this resets the game 
        reset();

    }

    function lose() {
        alert("you lost the game ")
        losses++
        $("#totallosses").text(losses)
        reset();

        // resets the game

    }



    //setting up the onclick function
    $("#im1").on("click", function () {
        Totalscore = Totalscore + first1;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }


    });



    $("#im2").on("click", function () {
        Totalscore = Totalscore + second2;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }


    });

    $("#im3").on("click", function () {
        Totalscore = Totalscore + third3;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }


    });



    $("#im4").on("click", function () {
        Totalscore = Totalscore + fourth4;
        $("#Guess").text(Totalscore);
        if (Totalscore === Random) {
            winner();

        }
        else if (Totalscore > Random) {
            lose();
        }


    });


    // reset the game 

    function reset() {
        Random = Math.floor(Math.random() * 70 + 30);
        $("#RandomNumber").text(Random);
        first1 = Math.floor(Math.random() * 10 + 3);
        second2 = Math.floor(Math.random() * 10 + 3);
        third3 = Math.floor(Math.random() * 10+ 3);
        fourth4 = Math.floor(Math.random() * 10 + 3);
        Totalscore = 0;
        $("#Guess").text(Totalscore);


    }

});