var page = 1;
var previous = $("#previous_button");
var next = $("#next_button");
var names_container = $("#characters_names");
var info_container = $("#characters_info");

//Ajax request to get the characters
function display_characters() {
        $.get({
            url: "https://swapi.co/api/people/?page=" + page,
            dataType: "json",
            success: function character_list(data) {
                names_container.html(" ");
                //Loop to display 10 character names
                for (i = 0; i < 10; i++) {
                    names_container.append("<p onclick=view_info('" + data.results[i].url + "')>" + data.results[i].name + "</p>")
                }
                console.log(page)
                 page == 1 ? previous.toggleClass("hidden") : previous.removeClass("hidden");
                 page == 9 ? next.toggleClass("hidden") : null;
            }
        });
};
display_characters();

next.on("click", function () {
    page++;
    display_characters();
});

previous.on("click", function () {
    page--;
    display_characters();
});

function view_info(url) {
    $.get({
        url: url,
        dataType: "json",
        success: function info(data) {
            $("#characters_name").html(" ");
            $("#characters_gender").html(" ");
            $("#characters_skin").html(" ");
            $("#characters_height").html(" ");
            $("#characters_mass").html(" ");

            $("#characters_name").append("<h2>Name</h2>");
            $("#characters_name").append("<p>" + data.name + "</p>");

            $("#characters_gender").append("<h2>Gender</h2>");
            $("#characters_gender").append("<p>" + data.gender + "</p>");

            $("#characters_skin").append("<h2>Name</h2>");
            $("#characters_skin").append("<p>" + data.skin_color + "</p>");

            $("#characters_height").append("<h2>Name</h2>");
            $("#characters_height").append("<p>" + data.height + "</p>");

            $("#characters_mass").append("<h2>Name</h2>");
            $("#characters_mass").append("<p>" + data.mass + "</p>");
        }
    })
}