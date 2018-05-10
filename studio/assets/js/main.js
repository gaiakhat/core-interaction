var highlights = Array.from(document.querySelectorAll('.highlight'));
var posterLists = Array.from(document.querySelectorAll('.poster-list'));
var descriptions = Array.from(document.querySelectorAll('.description'));

highlights.forEach(function(highlight) {
  // get the ID of the .highlight element
  var id = highlight.dataset.id;

  // find the corresponding .poster-wrapper element that has a matching data-id
  var posterDiv = document.querySelector('.poster-wrapper[data-id=' + id + ']');

  // find the corresponding .info element that has a matching data-id
  var infoDiv = document.querySelector('.poster-wrapper[data-id=' + id + '] .info');
  console.log()

  fetch('https://www.omdbapi.com/?apikey=6d6fa250&i=' + id)
    .then(function(response) {
      // Get the response and format it to JSON
      return response.json();
    })
    .then(function(jsonData) {
      // log the data
       // console.log(jsonData);
      // console.log(jsonData.Year);
     infoDiv.innerText = jsonData.Year;

    });

  highlight.addEventListener('mouseover', function() {
    // add -is-active classs to all .description elements
    descriptions.forEach( function(description) {
      description.classList.add('is-active');
    });

    // add -is-active classs to all .poster-list elements
    posterLists.forEach( function(posterlist) {
      posterlist.classList.add('is-active');
    });

    // add -is-active classs to the active .poster-wrapper element
  	posterDiv.classList.add('is-active'); //
  })

  highlight.addEventListener('mouseout', function() {
    // remove .is-active classs from all .description elements
    descriptions.forEach( function(description) {
      description.classList.remove('is-active');
    });

    // remove .is-active classs from all .poster-list elements
    posterLists.forEach( function(posterlist) {
      posterlist.classList.remove('is-active');
    });

    // remove .is-active classs from the active .poster-wrapper element
  	posterDiv.classList.remove('is-active'); //
  })

})
