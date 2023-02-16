var searchBox = document.querySelector("#search-box");
// const form = document.getElementById('search-form');  //already declared in lastfm.js
var formJs = document.querySelector("#search");
var artistListContainer = document.createElement("div");
var artistList = document.createElement("ul");
var listArtist = document.querySelector("#search-input");
var artistList = document.querySelector("#artist-list");
var row1 = document.querySelector("#row1");

var artistsArray = [];

var artistName = searchBox.value;

function addToHistory() {
  // Pushing searchbox value to artists array, then storing array in localStorage
  artists.push(searchBox.value);
  localStorage.setItem("Artists", JSON.stringify(artistsArray));
}

// Lists entered artists
function list() {
  var listArtist = document.createElement("button");
  listArtist.textContent = searchBox.value;
  console.log(listArtist);
  // Checking to see if the div and ul elements already exist, then appending them
  row1.appendChild(artistListContainer);
  artistListContainer.appendChild(artistList);

  // Sets classes for list item, then appends it to the ul
  listArtist.setAttribute(
    "class",
    "border border-dark-subtle mt-2 list-button"
  );
  artistList.appendChild(listArtist);
  // Clears search term
  searchBox.value = "";
}

function renderArtists() {
  // Grabbing the artists array from local storage
  var artistsArray = JSON.parse(localStorage.getItem("Artists", artistsArray));
  // Create div and ul if they don't exist
  searchBox.appendChild(artistListContainer);
  artistListContainer.appendChild(artistList);
  for (var i = 0; i < artistsArray.length; i++) {
    // Creates button
    var listArtist = document.createElement("button");
    // Sets classes for button, then appends it to the ul
    listArtist.setAttribute("class", "list-button");
    listArtist.textContent = artistsArray[i];
    artistList.appendChild(listArtist);
    console.log(artistsArray);
  }
}
// Listens for form submit, fetches current artist URL
listArtist.addEventListener("submit", function (event) {
  event.preventDefault();
  // Clears any existing artist
  artist.innerHTML = "";
});

// Regenerates the statistics for the artist name the user clicks on
row1.addEventListener("click", function (event) {
  if (event.target.listArtist === "Button") {
    listArtist.innerHTML = "";
    console.log(event.target.innerText);
  }
});
// Running the re-render if the artists array in local storage has contents
if (JSON.parse(localStorage.getItem("Artists", artistsArray)) !== null) {
  renderArtists();
}
