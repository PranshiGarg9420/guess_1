let words=[
    {
        "inputs":8,
        "category":'Superhero Film',
        "word":'Avengers'
    },
    {
        "inputs":7,
        "category":'Thriller',
        "word":'Jumanji'
    },
    {
        "inputs":5,
        "category":'Disney',
        "word":'Moana'
    },
    {
        "inputs":8,
        "category":'Mystery',
        "word":'BossBaby'
    },
    {
        "inputs":25,
        "category":'Imaginative',
        "word":'PokemonSecretsOftheJungle'
    }
];

$(document).ready(function(){
    fillBlanks();
})

function fillBlanks(){
    var randomWord= words[Math.floor(Math.random()* words.length)];

    $("#blanks").empty();

    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }
    $('#hint').html(randomWord.category);

    var gameOver=false;

    $('.clickable').click(function(){
        var correctGuess=false;

        var id= $(this).attr('id');

        var life= parseInt($('#life').text());

        for (var i = 0; i < randomWord.word.length; i++) {
            if (randomWord.word.charAt(i).toLowerCase() == id) {
                if (life > 0 && ($(".fill_blanks").eq(i).html() == "_" || $(".fill_blanks").eq(i).html() == id)) {

                    //fill blanks
                    $(".fill_blanks").eq(i).html(id);
                    correctGuess = true;

                    //Check if the word guess is complete
                    if ($("#blanks").text() === randomWord.word.toLowerCase()) {
                        $("#result").text("You Win!!")
                        correctGuess = true;
                        gameOver=true
                    }
                }                
            }
            
        }

        if(life>0 && correctGuess!= true && gameOver!=true){
            life= life--;
            $('#life').text(life);
        }
        else if(life == 0){
            $('result').text('You Lost!!');
        }
    })
}