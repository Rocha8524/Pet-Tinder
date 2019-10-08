//pet finder api
// $("button").on("click", function() {
//     var person = $(this).attr("data-person");

    // var queryURL = "http://api.petfinder.com/my.method?key=WoEOTcdJjY5N7FmjycH9y4rqjz3wMODrnzsbxKWXjIEtsGVua8&arg1=foo";


    $.getJSON('http://api.petfinder.com/my.method?format=json&key=WoEOTcdJjY5N7FmjycH9y4rqjz3wMODrnzsbxKWXjIEtsGVua8&callback=?')
    .done(function(petApiData) { alert('Data retrieved!'; })
    .error(function(err) { alert('Error retrieving data!'); 
  });



    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // })
    //   .then(function(response) {
    //     var results = response;
    //     console.log(results);
    //   });
        // for (var i = 0; i < results.length; i++) {
        //   var gifDiv = $("<div>");

        //   var rating = results[i].rating;

        //   var p = $("<p>").text("Rating: " + rating);

        //   var personImage = $("<img>");
        //   personImage.attr("src", results[i].images.fixed_height.url);

        //   gifDiv.prepend(p);
        //   gifDiv.prepend(personImage);

        //   $("#gifs-appear-here").prepend(gifDiv);
//         }
//       });
//   });