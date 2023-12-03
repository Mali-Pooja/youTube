function onPlayerReady(event) {
  event.target.playVideo();
}


const BASE_URL1 = "https://www.googleapis.com/youtube/v3";
const API_KEY1 = "AIzaSyAo7626fi4DK5OsZN8_nVm0G12CwtmPBzA";
const CONTENT_DETAILS = "contentDetails"; // length of video
const STATS = "statistics";
let videoId = localStorage.getItem('selectedVideoId');
window.addEventListener("load", () => {


  if (YT && videoId) {
    new YT.Player("video-Player", {
      height: "500",
      width: "1000",
      videoId,
      events: {
        onReady: onPlayerReady,
      },
    });
  } else {
    console.error('Video ID not found.');
  }

  localStorage.removeItem('selectedVideoId');

});

async function fetchVideochannel(videoId) {
  const response = await fetch(
    BASE_URL1 +
    "/videos" +
    `?key=${API_KEY1}` +
    "&part=snippet" +
    `&id=${videoId}`
  );
  const data = await response.json();
  //console.log(data);
  return data;
}



const depo = document.getElementById('recommended');

depo.style.width = 200;
depo.style.height = 400;




fetchVideochannel(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.title;
      const title = document.createElement('p');
      title.innerText = videoTitle;
      title.style.color = 'white';
      title.style.fontWeight = 500;
      title.style.fontSize = '16px';
      depo.appendChild(title);
      console.log(videoTitle); // Log the video title
      // Now, you can do something with the videoTitle, like updating depo with this title
      // For example, depo.textContent = videoTitle; or depo.innerHTML = `<p>${videoTitle}</p>`;
    } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


fetchVideochannel(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.channelTitle;
      const Channeltitle = document.createElement('p');
      Channeltitle.innerText = videoTitle;
      Channeltitle.style.color = 'white';
      Channeltitle.style.fontWeight = 500;
      Channeltitle.style.fontSize = '16px';
      depo.appendChild(Channeltitle);
      console.log(videoTitle); // Log the video title
      // Now, you can do something with the videoTitle, like updating depo with this title
      // For example, depo.textContent = videoTitle; or depo.innerHTML = `<p>${videoTitle}</p>`;
    } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });



async function fetchVideoStats(videoId, typeOfDetails) {
  const response = await fetch(
    BASE_URL1 +
    "/videos" +
    `?key=${API_KEY1}` +
    `&part=${typeOfDetails}` +
    `&id=${videoId}`
  );
  const data = await response.json();
  console.log(data);
}



fetchVideoStats(videoId,STATS)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.channelTitle;
      const Channeltitle = document.createElement('p');
      Channeltitle.innerText = videoTitle;
      Channeltitle.style.color = 'white';
      Channeltitle.style.fontWeight = 500;
      Channeltitle.style.marginTop='10px';
      Channeltitle.style.fontSize = '16px';
      depo.appendChild(Channeltitle);
      console.log(videoTitle); 
    } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });



  const dib = document.createElement('div');
  dib.style.width="70vw";
  dib.style.height="1px";
  dib.style.color="gray"
  depo.appendChild(dib);
