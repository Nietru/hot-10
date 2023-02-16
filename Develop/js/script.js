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

// Lists entered artists
function list() {
  var listArtist = document.createElement("button");
  listArtist.textContent = searchBox.value;
  // Pushing searchbox value to artists array, then storing array in localStorage
  artists.push(searchBox.value);
  console.log(listArtist);
  localStorage.setItem("Artists", JSON.stringify(artistsArray));
  // Checking to see if the div and ul elements already exist, then appending them
  if (!row1.children[1]) {
    artistList.setAttribute(
      "style",
      "list-style: none; padding-left: 0; margin-top: 1rem;"
    );
    row1.appendChild(artistListContainer);
    artistListContainer.appendChild(artistList);
  }
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
}
for (var i = 0; i < artistsArray.length; i++) {
  // Creates button
  var listArtist = document.createElement("button");
  // Sets classes for button, then appends it to the ul
  listArtist.setAttribute("class", "list-button");
  listArtist.textContent = artistsArray[i];
  artistList.appendChild(listArtist);
  console.log(artistsArray);
}

// Listens for form submit, fetches current artist URL
formJs.addEventListener("submit", function (event) {
  event.preventDefault();
  // Clears any existing artist
  artist.innerHTML = "";
});

// Regenerates the statistics for the artist name the user clicks on
listArtist.addEventListener("click", function (event) {
  var element = event.target;
  if (element.matches(".list-button")) {
    listArtist.innerHTML = "";
    searchBox.value = element.textContent;
    console.log(searchBox.value);
  }
});
// Running the re-render if the artists array in local storage has contents
if (JSON.parse(localStorage.getItem("Artists", artistsArray)) !== null) {
  renderArtists();
}
