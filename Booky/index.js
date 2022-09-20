const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1e16a8d7aemsh965bef850564727p10cb7bjsna6a7185b6c67',
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
  },
};

// Get DOM elements
const btn = document.getElementById('button-addon2');

btn.addEventListener('click', function () {
  // getting the input value from user input
  const userInput = document.getElementById('input').value;

  const book = userInput;

  fetch(`https://hapi-books.p.rapidapi.com/search/${book}`, options)
    .then((response) => response.json())
    .then((response) => {
      displayCards(response);
    })
    .catch((err) => console.error(err));
});

// this function will construct the cards with the data from the api.
// this function is called inside the fetch function.
const displayCards = (data) => {
  const searchBox = document.querySelector('#searchBox');
  const body = document.querySelector('.bodyCol');
  searchBox.style.display = 'none';
  body.innerHTML = `<div class="d-flex flex-row flex-wrap p-2 justify-content-center overflow h-100 align-content-start mt-5" id='cardsContainer'>`;
  const cardsContainer = document.querySelector('#cardsContainer');
  for (let i = 0; i < data.length; i++) {
    cardsContainer.innerHTML += `
    <div class="card m-2" style="width: 18rem;">
      <img src="${data[i].cover}" class="card-img-top bookImage height=5 width=5 " alt="${data[i].name}">
      <div class="card-body">
        <h5 class="card-title">${data[i].name}</h5>
        <p class="card-text">Author: ${data[i].authors[i]}</p>
        <p class="card-text">Year: ${data[i].year}</p>
        <p class="card-text">Rating: ${data[i].rating}</p>
        <a href="${data[i].url}" class="btn btn-primary">Explore More</a>
      </div>
    </div>
  `;
  }
};
