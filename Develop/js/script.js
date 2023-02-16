var searchBox = document.querySelector("#search-box");
// const form = document.getElementById('search-form');  //already declared in lastfm.js
var searchBtn = document.querySelector("#search");
var artistListContainer = document.createElement("div");
var userInput = document.querySelector("#search-input");
var searchList = document.createElement("ul");
// var artistList = document.createElement("li");
var row1 = document.querySelector("#row1");

var artistsArray = [];

var artistName = searchBox.value;

function addToHistory() {
  // Pushing searchbox value to artists array, then storing array in localStorage
  userInput.push(searchBox.value);
  artistsArray.append(artistName);
  localStorage.setItem("savedArtists", JSON.stringify(artistsArray));
}

// Lists entered artists
function list() {
  var listArtist = document.createElement("Button");
  listArtist.textContent = searchBox.value;
  console.log(listArtist);
  // putting a container for the ul in the row1 div in the html
  row1.appendChild(artistListContainer);
  // searchList, aka the ul, inside the container inside the row1 div
  artistListContainer.appendChild(searchList);

  // append listArtist list item buttons to the searchList ul
  searchList.appendChild(listArtist);
  // Clears search term
  searchBox.value = "";
}

function renderArtists() {
  // Grabbing the artists array from local storage
  var artistsArray = JSON.parse(
    localStorage.getItem("savedArtists", artistsArray)
  );
  for (var i = 0; i < artistsArray.length; i++) {
    // adding userinput to the array
    listArtist.textContent = artistsArray[i];
    // appending button to the user's search input
    userInput.appendChild(listArtist);
    console.log(artistsArray);
  }
}
// Listens for form submit, fetches current artist URL
searchBtn.addEventListener("submit", function (event) {
  event.preventDefault();
  // Clears any existing artist
  listArtist.innerHTML = "";
});

// Regenerates the statistics for the artist name the user clicks on
row1.addEventListener("click", function (event) {
  if (event.target.listArtist === "Button") {
    listArtist.innerHTML = "";
    console.log(event.target.innerText);
  }
});
// Running the re-render if the artists array in local storage has contents
if (JSON.parse(localStorage.getItem("savedArtists", artistsArray)) !== null) {
  renderArtists();
} else {
  // reload();
}
