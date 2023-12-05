// // window.addEventListener("load", () => {
// //     let videoId = localStorage.getItem('selectedVideoId');
// //     if (YT && videoId) {
// //       new YT.Player("video-Player", {
// //         height: "500",
// //         width: "1000",
// //         videoId,
// //         events: {
// //           onReady: onPlayerReady,
// //           onStateChange: onPlayerStateChange // Add event listener for state change
// //         },
// //       });
// //     } else {
// //       console.error('Video ID not found.');
// //     }  
// //     localStorage.removeItem('selectedVideoId');
// //   });
  
  
// // function onPlayerStateChange(event) {
// //     if (event.data == YT.PlayerState.PLAYING) {
// //       const currentVideoId = event.target.getVideoData().video_id;
// //       console.log(currentVideoId);
// //       fetchVideoDetails(currentVideoId);
// //       fetchAndRenderRelatedVideos(currentVideoId);
// //     }
// //   }
  
// //   function fetchVideoDetails(videoId) 
// //   {
// //     let videoid=videoId;
// //     console.log(videoid)
// // ;  }
  
// //   async function fetchAndRenderRelatedVideos(videoId) {
// //     try {
// //       const response = await fetch(
// //         BASE_URL +
// //         "/search" +
// //         `?key=${API_KEY}` +
// //         "&part=snippet" +
// //         `&relatedToVideoId=${videoId}` +
// //         "&type=video" +
// //         "&maxResults=10"
// //       );
// //       const data = await response.json();
// //       renderVideos(data.items);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }
  
// //   function renderVideos(list) {
// //     const depo = document.getElementById('recommended');
// //     depo.style.backgroundColor = 'pink';
// //     depo.style.width = '200px';
// //     depo.style.height = '400px';
// //     depo.innerHTML = "";
  
// //     list.forEach(video => {
// //       const videoElement = document.createElement('div');
// //       // Create elements for each related video and populate videoElement
// //       depo.appendChild(videoElement);
// //     });
// //   }



// const BASE_URL = "https://www.googleapis.com/youtube/v3";
// const API_KEY = "AIzaSyAo7626fi4DK5OsZN8_nVm0G12CwtmPBzA";

// // const CONTENT_DETAILS = "contentDetails"; // length of video
// // const STATS = "statistics"; // like count, comment count
// // async function fetchVideoStats(videoId, typeOfDetails) {
// //   const response = await fetch(
// //     BASE_URL +
// //     "/videos" +
// //     `?key=${API_KEY}` +
// //     `&part=${typeOfDetails}` +
// //     `&id=${videoId}`
// //   );
// //   const data = await response.json();
// //   console.log(data);
// // }

// // fetchVideoStats("_QUjQGz2jzs",STATS);
// // fetchVideoStats("_QUjQGz2jzs",CONTENT_DETAILS);

// // async function fetchVideochannel(videoId) {
// //   const response = await fetch(
// //     BASE_URL +
// //       "/videos" +
// //       `?key=${API_KEY}` +
// //       "&part=snippet" + 
// //       `&id=${videoId}`
// //   );
// //   const data = await response.json();
// //   console.log(data);
// // }

// // fetchVideochannel("_QUjQGz2jzs");





// async function fetchChannelLogo(channelId) {
//   try {
//       const response = await fetch(
//           BASE_URL +
//           "/channels" +
//           `?key=${API_KEY}` +
//           "&part=snippet" +
//           `&id=${channelId}`
//       );
//       const data = await response.json();
//       tt.log(data);
//   } catch (err) {
//       console.log(err);
//   }
// }

// fetchChannelLogo("UCt2JXOLNxqry7B_4rRZME3Q")



const BASE_URL1 = "https://www.googleapis.com/youtube/v3";
const API_KEY1 = "AIzaSyCCWwPLs-Wp05YVEnGHukkLrNA2YmthzaU";
const CONTENT_DETAILS = "contentDetails"; // length of video
const STATS = "statistics";




async function fetchChannelStats(channelId) {
    const response = await fetch(
      `${BASE_URL1}/channels?key=${API_KEY1}&part=statistics&id=${channelId}`
    );
    const data = await response.json();
    return data;
  }
  
  const channelId = "UCJRFMUGKouCWrNprJD3kaOA"; // Replace this with the actual channel ID
  
  fetchChannelStats(channelId)
    .then(data => {
      if (data && data.items && data.items.length > 0) {
        const subscriberCount = data.items[0].statistics.subscriberCount;
        console.log("Subscriber count:", subscriberCount);
      } else {
        console.log('No channel details found.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  