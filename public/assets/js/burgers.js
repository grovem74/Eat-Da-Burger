// wait until the DOM is loaded to attach handlers
$(function() {
    $("#devour-it-1").on("click", function(event) {
      var id = $(this).data("id");

      var newState = $(this).attr("devoured", true);

      var newDevouredState = {
        devoured: newState
      };
     
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  

    $("#submit").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      alert("clicked");
      var newBurger = {
        burger_name: $("#burgerName").val().trim(),
        devoured: false
      };
      console.log("newBurger", newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  
  