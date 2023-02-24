const form = document.getElementById("search-form");
//const name = form.elements['search-input'];
const inputLastFM = document.getElementById("search-input");

let fullName;
console.log(form);
//attaches to html
const lastFMdiv = document.getElementById("results-right");

var requestUrl;
var getSimilarURL;
var musicBrainzURL;
var musicBrainzID;
var getTopAlbumsURL;
var lastFMImg;
var lastFMImg2;
var lastFMImg3;
var lastFMImg4;
var lastFMImg5;

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      /*
      var cityName = document.createElement('li');
      console.log(data);
      console.log(data.toptracks);
      console.log(data.toptracks.track[0]);
      console.log(data.toptracks.track[0].name)
      console.log(data.toptracks.track[0].url)
  
        var bandName = document.createElement('h1');
        bandName.textContent = data.toptracks["@attr"].artist;
        lastFMdiv.prepend(bandName)

        var topTracks = document.createElement('li');
        topTracks.textContent ="Top Song "+data.toptracks.track[0].name
        lastFMdiv.append(topTracks)

        musicBrainzID=data.toptracks.track[0].artist.mbid
        console.log(musicBrainzID);

musicBrainzURL='https://musicbrainz.org/ws/2/artist/'+musicBrainzID+'?inc=releases+genres+tags+release-groups+url-rels&type=&fmt=json';
musicBrainzAPI(musicBrainzURL);
*/
    });
}

function getSimilar(getSimilarURL) {
  fetch(getSimilarURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      var cityName = document.createElement("li");
      console.log(data);

      var similarArtists = document.createElement("li");
      similarArtists.textContent =
        "Similar Artists " + data.similarartists.artist[0].name;
      lastFMdiv.append(similarArtists);
    });
}

function getTopAlbums(getTopAlbumsURL) {
  fetch(getTopAlbumsURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      /*
            var topAlbums = document.createElement('li');
            topAlbums.textContent = "Top Album "+data.topalbums.album[0].name
            lastFMdiv.append(topAlbums)
*/

      const myLinkFM = document.createElement("a");
      const imageDiv = document.createElement("amp-img");
      imageDiv.setAttribute("class", "test", "fmtest");
      imageDiv.setAttribute("layout", "responsive");

      lastFMImg = data.topalbums.album[0].image[3]["#text"];
      var image = new Image();
      image.src = lastFMImg;
      imageDiv.append(image);
      imageDiv.addEventListener("click", function () {
        window.open(myLinkFM.href);
      });
      myLinkFM.textContent = data.topalbums.album[0].url;
      myLinkFM.setAttribute("href", data.topalbums.album[0].url);
      myLinkFM.setAttribute("target", "_blank");
      console.log(data.topalbums.album[0].url);



      const myLinkFM2 = document.createElement("a");
      const imageDiv2 = document.createElement("div");
      imageDiv2.setAttribute("class", "test", "fmtest");
      lastFMImg2 = data.topalbums.album[1].image[3]["#text"];
      var image2 = new Image();
      image2.src = lastFMImg2;
      imageDiv2.append(image2);
      imageDiv2.addEventListener("click", function () {
        window.open(myLinkFM2.href);
      });
      myLinkFM2.textContent = data.topalbums.album[1].url;
      myLinkFM2.setAttribute("href", data.topalbums.album[1].url);
      myLinkFM2.setAttribute("target", "_blank");
      console.log(data.topalbums.album[1].url);

      const myLinkFM3 = document.createElement("a");
      const imageDiv3 = document.createElement("div");
      imageDiv3.setAttribute("class", "test", "fmtest");
      lastFMImg3 = data.topalbums.album[2].image[3]["#text"];
      var image3 = new Image();
      image3.src = lastFMImg3;
      imageDiv3.append(image3);
      imageDiv3.addEventListener("click", function () {
        window.open(myLinkFM3.href);
      });
      myLinkFM3.textContent = data.topalbums.album[2].url;
      myLinkFM3.setAttribute("href", data.topalbums.album[2].url);
      myLinkFM3.setAttribute("target", "_blank");
      console.log(data.topalbums.album[2].url);

      const myLinkFM4 = document.createElement("a");
      const imageDiv4 = document.createElement("div");
      imageDiv4.setAttribute("class", "test", "fmtest");
      lastFMImg4 = data.topalbums.album[3].image[3]["#text"];
      var image4 = new Image();
      image4.src = lastFMImg4;
      imageDiv4.append(image4);
      imageDiv4.addEventListener("click", function () {
        window.open(myLinkFM4.href);
      });
      myLinkFM4.textContent = data.topalbums.album[3].url;
      myLinkFM4.setAttribute("href", data.topalbums.album[3].url);
      myLinkFM4.setAttribute("target", "_blank");
      console.log(data.topalbums.album[3].url);

      const myLinkFM5 = document.createElement("a");
      const imageDiv5 = document.createElement("div");
      imageDiv5.setAttribute("class", "test", "fmtest");
      lastFMImg5 = data.topalbums.album[4].image[3]["#text"];
      var image5 = new Image();
      image5.src = lastFMImg5;
      imageDiv5.append(image5);
      imageDiv5.addEventListener("click", function () {
        window.open(myLinkFM5.href);
      });
      myLinkFM5.textContent = data.topalbums.album[4].url;
      myLinkFM5.setAttribute("href", data.topalbums.album[4].url);
      myLinkFM5.setAttribute("target", "_blank");
      console.log(data.topalbums.album[4].url);

      const myLinkFM6 = document.createElement("a");
      const imageDiv6 = document.createElement("div");
      imageDiv6.setAttribute("class", "test", "fmtest");
      lastFMImg6 = data.topalbums.album[5].image[3]["#text"];
      var image6 = new Image();
      image6.src = lastFMImg6;
      imageDiv6.append(image6);
      imageDiv6.addEventListener("click", function () {
        window.open(myLinkFM6.href);
      });
      myLinkFM6.textContent = data.topalbums.album[5].url;
      myLinkFM6.setAttribute("href", data.topalbums.album[5].url);
      myLinkFM6.setAttribute("target", "_blank");
      console.log(data.topalbums.album[5].url);

      const myLinkFM7 = document.createElement("a");
      const imageDiv7 = document.createElement("div");
      imageDiv7.setAttribute("class", "test", "fmtest");
      lastFMImg7 = data.topalbums.album[6].image[3]["#text"];
      var image7 = new Image();
      image7.src = lastFMImg7;
      imageDiv7.append(image7);
      imageDiv7.addEventListener("click", function () {
        window.open(myLinkFM7.href);
      });
      myLinkFM7.textContent = data.topalbums.album[6].url;
      myLinkFM7.setAttribute("href", data.topalbums.album[6].url);
      myLinkFM7.setAttribute("target", "_blank");
      console.log(data.topalbums.album[6].url);

      const myLinkFM8 = document.createElement("a");
      const imageDiv8 = document.createElement("div");
      imageDiv8.setAttribute("class", "test", "fmtest");
      lastFMImg8 = data.topalbums.album[7].image[3]["#text"];
      var image8 = new Image();
      image8.src = lastFMImg8;
      imageDiv8.append(image8);
      imageDiv8.addEventListener("click", function () {
        window.open(myLinkFM8.href);
      });
      myLinkFM8.textContent = data.topalbums.album[7].url;
      myLinkFM8.setAttribute("href", data.topalbums.album[7].url);
      myLinkFM8.setAttribute("target", "_blank");
      console.log(data.topalbums.album[7].url);

      const myLinkFM9 = document.createElement("a");
      const imageDiv9 = document.createElement("div");
      imageDiv9.setAttribute("class", "test", "fmtest");
      lastFMImg9 = data.topalbums.album[8].image[3]["#text"];
      var image9 = new Image();
      image9.src = lastFMImg9;
      imageDiv9.append(image9);
      imageDiv9.addEventListener("click", function () {
        window.open(myLinkFM9.href);
      });
      myLinkFM9.textContent = data.topalbums.album[8].url;
      myLinkFM9.setAttribute("href", data.topalbums.album[8].url);
      myLinkFM9.setAttribute("target", "_blank");
      console.log(data.topalbums.album[8].url);

      const myLinkFM10 = document.createElement("a");
      const imageDiv10 = document.createElement("div");
      imageDiv10.setAttribute("class", "test", "fmtest");
      lastFMImg10 = data.topalbums.album[9].image[3]["#text"];
      var image10 = new Image();
      image10.src = lastFMImg10;
      imageDiv10.append(image10);
      imageDiv10.addEventListener("click", function () {
        window.open(myLinkFM10.href);
      });
      myLinkFM10.textContent = data.topalbums.album[9].url;
      myLinkFM10.setAttribute("href", data.topalbums.album[9].url);
      myLinkFM10.setAttribute("target", "_blank");
      console.log(data.topalbums.album[1].url);

      const gridContainerLastFM = document.createElement("div");
      gridContainerLastFM.setAttribute("class", "gridContainer");
      gridContainerLastFM.append(imageDiv);
      gridContainerLastFM.append(imageDiv2);
      gridContainerLastFM.append(imageDiv3);
      gridContainerLastFM.append(imageDiv4);
      gridContainerLastFM.append(imageDiv5);
      gridContainerLastFM.append(imageDiv6);
      gridContainerLastFM.append(imageDiv7);
      gridContainerLastFM.append(imageDiv8);
      gridContainerLastFM.append(imageDiv9);
      gridContainerLastFM.append(imageDiv10);
      document.getElementById("results-right").innerHTML = "";


      document.getElementById("results-right").append(gridContainerLastFM);
    });
}
/*
        function musicBrainzAPI(musicBrainzURL) {
            fetch(musicBrainzURL)
            .then(function (response) {
              return response.json();
            })

        }
        */
/*
        function albumCover(albumCoverURL) {
            fetch(musicBrainzURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              console.log(data);

            })
        }
        */
//      https://ia801604.us.archive.org/28/items/mbid-
form.addEventListener("submit", function (event) {
  event.preventDefault();
  fullName = inputLastFM.value;
  console.log(fullName);
  requestUrl =
    "https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" +
    fullName +
    "&api_key=291cf301be6213cb932aa743e9706019&format=json";
  getSimilarURL =
    "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" +
    fullName +
    "&api_key=291cf301be6213cb932aa743e9706019&format=json";
  getTopAlbumsURL =
    "https://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist=" +
    fullName +
    "&api_key=291cf301be6213cb932aa743e9706019&format=json";
  getApi(requestUrl);
  //   getSimilar(getSimilarURL);
  getTopAlbums(getTopAlbumsURL);
});
// Calling this function for search history recall in the script.js
function callFromHistory(event) {
  console.log(event.target.textContent);
  getTopAlbumsURL =
    "https://ws.audioscrobbler.com//2.0/?method=artist.gettopalbums&artist=" +
    event.target.textContent +
    "&api_key=291cf301be6213cb932aa743e9706019&format=json";

  getTopAlbums(getTopAlbumsURL);
}
/*
//        main.addEventListener('click', function() {
  window.open(myLink.href)
});

const myLink = document.createElement('a');
myLink.textContent = res.id.videoId;
myLink.setAttribute('href', yt+res.id.videoId)
myLink.setAttribute('target','_blank');
console.log(res.snippet.description);
*/
