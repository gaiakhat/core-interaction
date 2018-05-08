var highlights = Array.from(document.querySelectorAll('.highlight'));
var posterList = document.querySelector('.poster-list');
var description = document.querySelector('.description');

highlights.forEach(function(highlight) {
  var id = highlight.dataset.id;
  var posterDiv = document.querySelector('.poster-wrapper[data-id=' + id + ']');
  var infoDiv = document.querySelector('.poster-wrapper[data-id=' + id + '] .info');

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
    description.classList.add('is-active');
    posterList.classList.add('is-active');
  	posterDiv.classList.add('is-active'); //
  })

  highlight.addEventListener('mouseout', function() {
    description.classList.remove('is-active');
    posterList.classList.remove('is-active');
  	posterDiv.classList.remove('is-active'); //
  })

})
