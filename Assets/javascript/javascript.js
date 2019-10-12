var pf = new petfinder.Client({apiKey: "OtOAvPPs5IfYjeg1yJ697I85pHRMkUZN3cTmFWoNp8U0AZIrp4", secret: "OhXZcmAgBeyDIUVmIJRqEFBOX6XYdZu59k7mXDPn"});
pf.animal.search("dogs")
   .then(function (response) {
     console.log(response);
       // Do something with response.data.animals
       var results = response.data.animals;
       showAnimals(results);
   })
   .catch(function (error) {
       // Handle the error
   });

    function showAnimals(animalData){
      for (var i = 0; i < animalData.length; i++) {
        var animalImage = $("<img>");
        animalImage.attr("src", animalData[i].photos[0].medium);
        $("#searchedAnimal").prepend(animalImage);
        }
    }



/// Wiki pulling API code 
var xhr = new XMLHttpRequest();



// able to change topic between 'xxx' in link. currently set to volkswagen
// "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=2&gsrsearch='volkswagen'";


 var searchTopic;
 searchTopic = "ford";
//  search topic to be in quotes 
var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=2&gsrsearch=" + searchTopic;



// Open a new connection, using the GET request on the URL endpoint
// Providing 3 arguments (GET/POST, The URL, Async True/False)
xhr.open('GET', url, true);

// Once request has loaded...
xhr.onload = function() {
    // Parse the request into JSON
    var data = JSON.parse(this.response);

    // Log the data object
    console.log(data);

    // Log the page objects
    console.log(data.query.pages)

    // Loop through the data object
    // Pulling out the titles of each page
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);



    var test123 = data.query.pages;
     
    $("#bunny-search").append(test123);
    }
}

// Send request to the server
xhr.send();
