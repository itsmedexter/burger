$(function() {
    $(".create-form").on("submit", function(event) {
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState 
        }).then(function() {
            console.log("Burger devoured");
            location.reload();
        }
    );

});

$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
    }).then(
        function() {
            console.log("deleted burger", id);
            location.reload();
        }
    );
});
});