$(document).ready(function() {
    $.ajax({
        url: "https://swapi.co/api/people/",
        type: "GET",
        dataType: "json",
        success: function character_list(data) {

            for (i = 0; i < 10; i++) {
                $("#characters_names").append("<p onclick='view_info(id)'>" + data.results[i].name + "</p>")
            }
            console.log(data)
        }
    });
});

function view_info(id) {
    $(document).ready(function () {
        $.ajax({
            url: "https://swapi.co/api/people/",
            type: "GET",
            data: {
            },
            dataType: "json",
            success: function character_list(data) {
                $("p").on("click", function () {
                    $("#characters_name").append("<p>" + data.results+ "</p>")
                })
            }
        })
}