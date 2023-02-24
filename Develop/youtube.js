const formYouTube = document.getElementById("search-form");
const nameYouTube = formYouTube.elements["search-input"];
let currentApiKeyIndex=0;
//var apiKey="AIzaSyAxGB0BK8r0AcFesND1Xtsezlm6HGNXcZA";
var apiKey;
var base;
const apiKeyArray = ["AIzaSyANa3aYkfxLVpXBvhEQKeDGuVNNdJrJzqM", "AIzaSyDFH1f-R-SHYTe0UkE6GhhQ5z8Mcz_5jQ8", "AIzaSyBu1y87Jp4NXegkvtzyYnafi7eCM8o-EJI", "AIzaSyDs1ySjQGrWAhPpiLrhFOFzZaWvW7p7Z7g", "AIzaSyDq4wpeHU8X4DnxdVn2-Zm36g_XvJGxfoE", "AIzaSyB37JhnOqKsnSKalKz99mAmGkDjjdPwRQU", "AIzaSyCTswiQY46zCjXxBIanAYtoyz0TmoDZmNM", "AIzaSyCkWacl-f9FZ0tHuinlIZUKja-jCd77up4", "AIzaSyAfNUrigJsNzVkxa3whmy39q0INdwcsj14", "AIzaSyDU2sWkIQomu1FqYK5xDnR4-MTwGVvAnJg", "AIzaSyAvpoVX6lJs2D4iHdxajix3d1L43_xC9F0","AIzaSyB176wF4wZR4ydeOWGvUnLyYdktSq-QI2s","AIzaSyB0-__lHLKFpHhuJ9DqdOTvYZgjC7S9fAw", "AIzaSyD8ZW4RIRf653frhGOcGDIkmTFYB3dgBWk"];


var apiClick= function(){currentApiKeyIndex=[Math.floor(Math.random() * 14)];
  console.log(currentApiKeyIndex);
fetch(base).then(function (response) {
  // Check the response value is equal to 404.
  if (response.status !== 200) {
    // If the page is not on the 404 page, redirect to it.
   apiKey=apiKeyArray[currentApiKeyIndex];
   console.log(apiKey);
  }
  console.log(apiKey);
  console.log(currentApiKeyIndex);
  base = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${apiKey}&q=`;
 
});}


const output = document.querySelector(".output");
const myList = document.createElement("div");
myList.setAttribute("class", "gridContainer");
output.append(myList);



formYouTube.addEventListener("submit", apiClick());
formYouTube.addEventListener("submit", (e) => {
  searchTerm = nameYouTube.value;
  const url = `${base}${searchTerm}&maxResults=11`;
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      addData(data.items);
    });
});

function addData(arr) {
  myList.innerHTML = "";
  const yt = "https://youtu.be/";
  arr.forEach((res) => {
    if (res.id.videoId) {
      const main = document.createElement("div");
      main.setAttribute("class", "test");
      myList.append(main);
      main.id = "ytDiv";
      main.addEventListener("click", function () {
        window.open(myLink.href);
      });

      const myLink = document.createElement("a");
      myLink.textContent = res.id.videoId;
      myLink.setAttribute("href", yt + res.id.videoId);
      myLink.setAttribute("target", "_blank");
      console.log(res.snippet.description);

      const thumb = document.createElement("img");
      main.append(thumb);
      thumb.setAttribute("src", res.snippet.thumbnails.high.url);
      const des = document.createElement("p");
      main.append(des);
      main.style = "align-content center";
      des.innerHTML = `<h3><br>${res.snippet.title}</h3><small><br>${res.snippet.description}</small>`;
    }
  });
}

// Calling this function for search history recall in the script.js
// NOT FUNCTIONING.
function callFromHistoryYT(event) {

searchTerm = event.target.textContent;
const url = `${base}${searchTerm}&maxResults=11`;
fetch(url)
  .then((rep) => rep.json())
  .then((data) => {
    addData(data.items);
  });
};

//   console.log(event.target.textContent);
//   getTopAlbumsArtists =
//     "https://www.googleapis.com/youtube/v3/search/?part=snippet" +
//     event.target.textContent +
//     "&api_key=AIzaSyAvwesTdSpv0qyXHwSb6p0gY9PwhIdhUxU" +
//     "&q=" +
//     res.id.videoId;

//   getTopAlbumsArtists(getTopAlbumsArtists);
// }
