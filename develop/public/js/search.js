// Code Below is for the auto complete workout names filter
var workoutNames = [
    "Squats",
    "Push-ups",
    "Deadlifts",
    // Add more workout names
  ];
  $(function () {
    var workoutNames = [
      "Squats",
      "Push-ups",
      "Deadlifts",
      // Add more workout names
    ];
    $("#tags").autocomplete({
      source: function (request, response) {
        var term = request.term.toLowerCase();
        var filteredWorkouts = workoutNames.filter(function (workout) {
          return workout.toLowerCase().includes(term);
        });
        response(filteredWorkouts);
      },
      minLength: 1,
    });
  });



  $(function () {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    })
  } )