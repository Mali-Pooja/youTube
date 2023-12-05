function onPlayerReady(event) {
  event.target.playVideo();
}
//AIzaSyAo7626fi4DK5OsZN8_nVm0G12CwtmPBzA

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


//videoId = "_QUjQGz2jzs";

fetchVideochannel(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.title;
      const title = document.createElement('p');
      title.innerText = videoTitle;
      title.style.color = 'white';
      title.style.fontWeight = '700';
      title.style.fontSize = '16px';
      depo.appendChild(title);
      console.log(videoTitle);
     } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });


 

async function fetchVideoStats(videoId) {
  const response = await fetch(
    BASE_URL1 +
    "/videos" +
    `?key=${API_KEY1}` +
    `&part=snippet` +
    `&id=${videoId}`
  );
  const data = await response.json();
  console.log(data);
 }



async function fetchChannelLogo(channelId)
{
  try {
      const response = await fetch(
          BASE_URL1 +
          "/channels" +
          `?key=${API_KEY1}` +
          "&part=snippet" +
          `&id=${channelId}`
      );
      const data = await response.json();
      return data.items[0].snippet.thumbnails.default.url;
  } catch (err) {
      console.log(err);
  }
}



fetchVideoStats(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const videoTitle = data.items[0].snippet.channelTitle;
      const Channeltitle = document.createElement('p');
      Channeltitle.innerText = videoTitle;
      Channeltitle.style.color = 'white';
      Channeltitle.style.display='flex';
      Channeltitle.style.fontWeight = 500;
      Channeltitle.style.marginTop = '10px';
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




fetchVideochannel(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      const channelId = data.items[0].snippet.channelId;
      const channelInfoDiv = document.createElement('div');
      channelInfoDiv.style.display = 'flex';
      channelInfoDiv.style.alignItems = 'center';

      const channelLogoPromise = fetchChannelLogo(channelId);
      channelLogoPromise.then(channelLogoUrl => {
        const channelLogo = document.createElement('img');
        channelLogo.src = channelLogoUrl;
        channelLogo.style.width = '35px';
        channelLogo.style.borderRadius = '50%';
        channelLogo.style.marginTop = '10px';
        channelInfoDiv.appendChild(channelLogo);

        const videoTitle = data.items[0].snippet.channelTitle;
        const channelTitle = document.createElement('p');
        channelTitle.innerText = videoTitle;
        channelTitle.style.color = 'white';
        channelTitle.style.fontWeight = 500;
        channelTitle.style.fontSize = '15px';
        channelTitle.style.marginLeft = '10px';
        channelInfoDiv.appendChild(channelTitle);

        const subscribe = document.createElement("div");
        subscribe.innerText = "Subscribe";
        subscribe.style.backgroundColor='white';
        subscribe.style.padding='10px';
        subscribe.style.borderRadius='20px';
        subscribe.style.cursor='pointer';
        subscribe.style.marginLeft='80px';

        const Like = document.createElement("div");
        Like.innerHTML = 'Like <i class="fas fa-thumbs-up"></i>  |                     <i class="fa-regular fa-thumbs-down"></i>';  
        Like.style.backgroundColor='#2b2b2b';
        Like.style.padding='10px';
        Like.style.borderRadius='20px';
        Like.style.cursor='pointer';
        Like.style.color='white';
        Like.style.marginLeft='400px';
        Like.style.marginRight='20px';


        const share = document.createElement("div");
        share.innerHTML = '<i class="fa-solid fa-share"></i>                   share';  
        share.style.backgroundColor='#2b2b2b';
        share.style.padding='10px';
        share.style.borderRadius='20px';
        share.style.cursor='pointer';
        share.style.color='white';
        share.style.marginRight='20px';


        const download = document.createElement("div");
        download.innerHTML = '<i class="fa-solid fa-arrow-down"></i>        download';  
        download.style.backgroundColor='#2b2b2b';
        download.style.padding='10px';
        download.style.borderRadius='20px';
        download.style.cursor='pointer';
        download.style.color='white';
        download.style.marginRight='20px';



        const descrip = document.createElement('div');
        descrip.style.color = 'white';
        descrip.style.fontWeight = 500;
        descrip.style.fontSize = '18px';
        descrip.style.width='65%';
        descrip.style.lineHeight='20px';
        descrip.style.fontFamily='Roboto';
        descrip.style.marginTop = '10px';
        descrip.style.backgroundColor = '#272727';


        fetchVideochannel(videoId)
          .then(data => {
            if (data && data.items && data.items.length > 0) {
              const videoDescription = data.items[0].snippet.description;
              descrip.textContent = videoDescription; // Set the fetched video description
              depo.appendChild(descrip); // Append the description to 'recommended' div
            } else {
              console.log('No video details found.');
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });     
        depo.appendChild(channelInfoDiv);
        depo.appendChild(descrip);




        channelInfoDiv.appendChild(subscribe);
        channelInfoDiv.appendChild(Like);
        channelInfoDiv.appendChild(share);
        channelInfoDiv.appendChild(download);

      }).catch(error => {
        console.error('Error fetching channel logo:', error);
      });
     
      
      
      depo.appendChild(channelInfoDiv);
    } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);  
});







  fetchVideoStats(videoId)
  .then(data => {
    if (data && data.items && data.items.length > 0) {
      console.log(data);
      const subscriberCount = data.items[0].statistics.subscriberCount;
      const subscriberText = document.createElement('p');
      subscriberText.innerText = `Subscribers: ${subscriberCount}`;
      subscriberText.style.color = 'white';
      subscriberText.style.fontWeight = 500;
      subscriberText.style.fontSize = '15px';
      subscriberText.style.marginTop = '5px';
      depo.appendChild(subscriberText);
    } else {
      console.log('No video details found.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });




  async function fetchChannelStats1(channelId) {
    const response = await fetch(
      BASE_URL1 +
      "/channels" +
      `?key=${API_KEY1}` +
      "&part=statistics" + // Ensure you are fetching statistics
      `&id=${channelId}`
    );
    const data = await response.json();
    return data;
  }
  




async function fetchVideoDetails(videoId) {
  const response = await fetch(
    BASE_URL1 +
    "/videos" +
    `?key=${API_KEY1}` +
    "&part=snippet" +
    `&id=${videoId}`
  );
  const videoDetails = await response.json();
  return videoDetails;
}