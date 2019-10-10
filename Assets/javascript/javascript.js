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