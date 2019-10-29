///Starting Anime Variable///

var anime = [
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

        for (var i = 0; i < anime.length; i++) {
            var animebtn = $('<button>')
            animebtn.text(anime[i]);
            animebtn.addClass('anime-button');
            animebtn.attr('data-name', anime[i]);
            $('#anime-buttons').append(animebtn);
        }

    }

});

function animeDisplay() {
    $("button").on("click", function () {
        var anime = $(this).attr("anime-buttons");
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

                    gifDiv.prepend(p);
                    gifDiv.prepend(animeImage);

                    $("#anime-gifs").prepend(gifDiv);

                    console.log("working gifs");
                }
            });
    });
}

