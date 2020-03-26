// wait until the DOM is loaded to attach handlers

$(document).ready(function () {
  var wrap;
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

    var editedName = $("#burgerName").val().trim().replace("burger", "").charAt(0).toUpperCase() + $("#burgerName").val().trim().replace("burger", "").slice(1) + " Burger";

    // var editedName = $("#burgerName").val().trim().replace("burger", "")
    //   .split(" ")
    //   .map(singleWord => { 
      //  singleWord = 
      
      //   return singleWord;
    //   })
    //   .join(" ") + " Burger";


    //   const other4 = arr.map(a => {
    //     return a.replace(a.charAt(0), a.charAt(0).toUpperCase());
    // })


    var newBurger = {
      burger_name: editedName,
      burger_name: editedName,
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
    if (wrap === true) {
      var customBurgerName = customName.replace(",", "  ") + " Wrap";
    } else {
      var customBurgerName = customName.replace(",", "  ") + " Burger";
    }


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

  $("#BBQ").on("click", function (event) {
    event.preventDefault();
    $("#BBQ-img").addClass("selected");
    if (custom.includes("BBQ") === false) custom.push("BBQ");
    limitToppings();
    console.log(custom);
  });

  $("#Wrap").on("click", function (event) {
    event.preventDefault();
    $("#wrap-text").addClass("wrap");
      wrap = true;
      $("#Wrap-img").attr("style", "filter: grayscale(0%)");
  });


  // toppings = ["Bacon", "Fried-Egg", "Pineapple", "Mushroom", "Avocado", "Jalapeno", "Garlic-Butter", "BBQ"]
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
    $("#burgerName").val("");
    $("#burgerName").prop("disabled", true);
    $(".create").addClass("disabled");
    $("#customize").removeClass("disabled");
    $("#customize").addClass("selectCustom");
    if (custom.length > 3) {
      $(`#${custom[0]}-img`).removeClass("selected");
      $(`#${custom[0]}-img`).addClass("toppings");
      console.log(`#${custom[0]}-img`);
      custom.shift();
    };
  };

});