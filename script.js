//  //Project ID: youtube-clone-406911. It cannot be changed later.

// //API Key =>AIzaSyAT_bd6XUSKbtz0x4vVrGha688NcedYybk




// const BASE_URL = "https://www.googleapis.com/youtube/v3";

// const API_KEY = "AIzaSyAT_bd6XUSKbtz0x4vVrGha688NcedYybk";

// const renderDiv = document.getElementById("search-list");
// // the specified route
// // it was search -> /search

// // API_KEY

// const CONTENT_DETAILS = "contentDetails"; // length of video
// const STATS = "statistics"; // like count, comment count

// // function renderVideos(list) {
// //   list.forEach((video) => {
// //     const titleDiv = document.createElement("div");
// //     titleDiv.innerText = video.snippet.title;
// //     console.log(video.snippet.title);
// //     renderDiv.append(titleDiv);
// //   });
// // }

// async function fetchVideos(searchQuery,maxResults) {
//   try {
//     const response = await fetch(
//       BASE_URL +
//         "/search" +
//         `?key=${API_KEY}` +
//         "&part=snippet" +
//         `&q=${searchQuery}` +
//         `&maxResults=${maxResults}`
//     );
//     const data = await response.json();
//     console.log(data.items);
//  renderVideos(data.items);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function fetchVideoStats(videoId, typeOfDetails) {
//   const response = await fetch(
//     BASE_URL +
//       "/videos" +
//       `?key=${API_KEY}` +
//       `&part=${typeOfDetails}` +
//       `&id=${videoId}`
//   );
//   const data = await response.json();
//   console.log(data);
// }

// // fetchVideos("icc world cup", 10);
// // fetchVideoStats("_QUjQGz2jzs", CONTENT_DETAILS);
// // fetchVideoStats("_QUjQGz2jzs", STATS);

// async function fetchChannelLogo(channelId) {
//   try {
//     const response = await fetch(
//       BASE_URL +
//         "/channels" +
//         `?key=${API_KEY}` +
//         "&part=snippet" +
//         `&id=${channelId}`
//     );
//     const data = await response.json();
//     tt.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// async function getComments(videoId) {
//   const response = await fetch(
//     BASE_URL +
//       "/commentThreads" +
//       `?key=${API_KEY}` +
//       `&videoId=${videoId}` +
//       `&maxResults=25&part=snippet`
//   );
//   const data = await response.json();
//   console.log(data);
// }

// //getComments('zHcCd59q4AI');
// //fetchVideos("", 20);
// //fetchChannelLogo("UCt2JXOLNxqry7B_4rRZME3Q");

// const class2 = document.getElementById('class2');







// function create() {
//     const block = document.createElement('div');
//     block.style.display = 'flex';
//     block.style.flexDirection = 'column';
//     block.style.alignItems = 'center';

//     const videoDiv = document.createElement('div');
//     videoDiv.style.height = '100px';
//     videoDiv.style.width = '500px';
//     videoDiv.style.backgroundImage = `url(${video.snippet.thumbnails.default.url})`;
//     videoDiv.style.backgroundSize = 'cover';
//     videoDiv.style.backgroundPosition = 'center';// Example background color for the video container

//     const profileDiv1 = document.createElement('div');
//     profileDiv1.textContent = 'User Profile Info 1';
//     profileDiv1.innerText = video.snippet.thumbnails.title;

//     const profileDiv2 = document.createElement('div');
//     profileDiv2.textContent = 'User Profile Info 2';
//     profileDiv2.innerText =  video.snippet.channelTitle;


    
//     const pTag1 = document.createElement('p');
//     pTag1.textContent = 'Some information here...';

//     const pTag2 = document.createElement('p');
//     pTag2.textContent = 'Additional information...';

//     // Appending elements to the block div
//     block.appendChild(videoDiv);
//     block.appendChild(profileDiv1);
//     block.appendChild(profileDiv2);
//     block.appendChild(pTag1);
//     block.appendChild(pTag2);

//     // Appending the block div to the selected element with the class 'class2'
//     class2.appendChild(block);
// }

// // Call the function to generate the structure
// create();





// function renderVideos(list) {
//   list.forEach((video) => 
//   {
//     const block = document.createElement('div');
//     block.style.display = 'flex';
//     block.style.flexDirection = 'column';
//     block.style.alignItems = 'center';
//     block.style.color ='white';

//     const videoDiv = document.createElement('div');
//     videoDiv.style.height = '200px';
//     videoDiv.style.width = '300px';
//     //videoDiv.style.backgroundImage = `url(${video.snippet.thumbnails.default.url})`;
//     videoDiv.style.backgroundSize = 'cover';
//     videoDiv.style.backgroundPosition = 'center';// Example background color for the video container

//     const profileDiv = document.createElement('div');
//     profileDiv.textContent = 'User Profile Info';
//     videoDiv.innerText = video.snippet.thumbnails.title;// Example margin for spacing

//     const pTag1 = document.createElement('p');
//     pTag1.innerText =  video.snippet.channelTitle;

//     const pTag2 = document.createElement('p');
//     pTag2.textContent = publishTime;

//     // Appending elements to the block div
//     block.appendChild(videoDiv);
//     block.appendChild(profileDiv);
//     block.appendChild(pTag1);
//     block.appendChild(pTag2);

//     // Appending the block div to the body or any other parent element
//     class2.appendChild(block);
//     const titleDiv = document.createElement("div");
//     titleDiv.innerText = video.snippet.title;
//     console.log(video.snippet.title);
//     renderDiv.append(titleDiv);
//   });
// }

// renderVideos();
