// wait until the DOM is loaded to attach handlers

$(document).ready(function () {
  $(".devour").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newState = $(this).data("devoured");
    var newDevouredState = {
      devoured: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {

        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burgerName").val().trim(),
      devoured: 0
    };
    console.log("newBurger", newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".customize").on("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    var customName = custom.join().replace(",", "  ");
    var customBurgerName = customName.replace(",", "  ") + " Burger";

    var customBurger = {
      burger_name: customBurgerName,
      devoured: 0
    };
    console.log("customBurger", customBurgerName);

    $.ajax("/api/burgers", {
      type: "POST",
      data: customBurger
    }).then(
      function () {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  // buttons for custom toppings
  var custom = [];

  $("#Bacon").on("click", function (event) {
    event.preventDefault();
    $("#Bacon-img").addClass("selected");
    if (custom.includes("Bacon") === false) custom.push("Bacon");
    limitToppings();
    console.log(custom);
  });

  $("#Fried-Egg").on("click", function (event) {
    event.preventDefault();
    $("#egg-img").addClass("selected");
    if (custom.includes("Fried-Egg") === false) custom.push("Fried-Egg");
    limitToppings();
    console.log(custom);
  });

  $("#Pineapple").on("click", function (event) {
    event.preventDefault();
    $("#pineapple-img").addClass("selected");
    if (custom.includes("Pineapple") === false) custom.push("Pineapple");
    limitToppings();
    console.log(custom);
  });

  $("#Mushroom").on("click", function (event) {
    event.preventDefault();
    $("#mushroom-img").addClass("selected");
    if (custom.includes("Mushroom") === false) custom.push("Mushroom");
    limitToppings();
    console.log(custom);
  });

  $("#Avocado").on("click", function (event) {
    event.preventDefault();
    $("#avocado-img").addClass("selected");
    if (custom.includes("Avocado") === false) custom.push("Avocado");
    limitToppings();
    console.log(custom);
  });

  $("#Jalapeno").on("click", function (event) {
    event.preventDefault();
    $("#jalapeno-img").addClass("selected");
    if (custom.includes("Jalapeno") === false) custom.push("Jalapeno");
    limitToppings();
    console.log(custom);
  });

  $("#Garlic-Butter").on("click", function (event) {
    event.preventDefault();
    $("#garlic-butter-img").addClass("selected");
    if (custom.includes("Garlic-Butter") === false) custom.push("Garlic-Butter");
    limitToppings();
    console.log(custom);
  });

  $("#Cheese").on("click", function (event) {
    event.preventDefault();
    $("#cheese-img").addClass("selected");
    if (custom.includes("Cheese") === false) custom.push("Cheese");
    limitToppings();
    console.log(custom);
  });

  $("#Other1").on("click", function (event) {
    event.preventDefault();
    $("#other1-img").addClass("selected");
    if (custom.includes("Other1") === false) custom.push("Other1");
    limitToppings();
    console.log(custom);
  });

  $("#Other2").on("click", function (event) {
    event.preventDefault();
    $("#other2-img").addClass("selected");
    if (custom.includes("Other2") === false) custom.push("Other2");
    limitToppings();
    console.log(custom);
  });


  // toppings = ["Bacon", "Fried-Egg", "Pineapple", "Mushroom", "Avocado", "Jalapeno", "Garlic-Butter", "Other1", "Other2"]
  // var i;
  // for (i = 0; i < toppings.length; i++) {
  //   $(`#${toppings[i]}`).on("click", function (event) {
  //     event.preventDefault();
  //     custom.push(toppings[i]);
  //     limitToppings();
  //     console.log(custom);
  //     console.log(toppings[i])
  //     console.log("toppings length: ", toppings.length);
  //   });
  // };

  function limitToppings() {
    $("#customize").removeClass("disabled");
    if (custom.length > 3) {
      $(`#${custom[0]}-img`).removeClass("selected");
      $(`#${custom[0]}-img`).addClass("toppings");
      console.log(`#${custom[0]}-img`);
      custom.shift();
    };
  };

});