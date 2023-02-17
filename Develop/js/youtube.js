
const formYouTube = document.getElementById('search-form');
const nameYouTube = formYouTube.elements['search-input'];
const apiKey = "AIzaSyAvwesTdSpv0qyXHwSb6p0gY9PwhIdhUxU";
const base = `https://www.googleapis.com/youtube/v3/search/?part=snippet&key=${apiKey}&q=`;

const output = document.querySelector('.output');
const myList = document.createElement('div');
myList.setAttribute("class","gridContainer")
output.append(myList);


formYouTube.addEventListener('submit',(e)=>{
    searchTerm = nameYouTube.value;
    const url = `${base}${searchTerm}&maxResults=11`
    fetch(url).then(rep=>rep.json())
    .then((data)=>{
        addData(data.items);
    })
})

function addData(arr){
    myList.innerHTML = '';
    const yt= 'https://youtu.be/';
    arr.forEach((res) => {
        if (res.id.videoId){
        const main = document.createElement('div');
        main.setAttribute("class","test");
        myList.append(main);
        main.id = "ytDiv";
        main.addEventListener('click', function() {
            window.open(myLink.href)
          });

        const myLink = document.createElement('a');
        myLink.textContent = res.id.videoId;
        myLink.setAttribute('href', yt+res.id.videoId)
        myLink.setAttribute('target','_blank');
        console.log(res.snippet.description);

        const thumb = document.createElement('img');
        main.append(thumb);
        thumb.setAttribute('src', res.snippet.thumbnails.high.url);
        const des = document.createElement('p');
        main.append(des);
        main.style = 'align-content center';
        des.innerHTML = `<h3><br>${res.snippet.title}</h3><small><br>${res.snippet.description}</small>`;
    }

    });
}
