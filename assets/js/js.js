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