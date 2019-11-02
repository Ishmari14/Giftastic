///Starting Anime Variable///

var animeArray = [
    'One Piece',
    'Hunter x Hunter',
    'My Hero Academia',
    'Symphogear',
    'Sailor Moon',
    'Megalo Box',
    'Naruto',
    'Bleach',
    'Dr.Stone',
    'Demon Slayer'
];

///render intial buttons///

$(document).ready(function () {

    btnRender();

    function btnRender() {

        for (var i = 0; i < animeArray.length; i++) {
            var animebtn = $('<button>')
            animebtn.text(animeArray[i]);
            animebtn.addClass('anime-button');
            animebtn.attr('data-name', animeArray[i]);
            $('#anime-buttons').append(animebtn);
        }

    }
    $("button").on("click", function () {
        var anime = $(this).attr("data-name");

        console.log(anime);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            anime + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div>");

                    var animeImage = $("<img>");
                    animeImage.attr("src", results[i].images.fixed_height.url);


                    gifDiv.prepend(animeImage);

                    $("#anime-gifs").prepend(gifDiv);

                    console.log("working gifs");
                }
            });
    });
});

///search user input anime///

$("#add-anime").on('click', function () {

    var newAnime = $('#anime-input').val().toLowerCase().trim();
    console.log(newAnime);

    ///new user input///

    for (var i = 0; i < animeArray.length; i++) {
        if (animeArray[i] == newAnime) {

        }
    }


});


