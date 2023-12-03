const BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = "AIzaSyAT_bd6XUSKbtz0x4vVrGha688NcedYybk";
const class2 = document.getElementById('class2');

const CONTENT_DETAILS = "contentDetails"; // length of video
const STATS = "statistics";
async function fetchAndRenderVideos(searchQuery, maxResults) {
    try {
        const response = await fetch(
            BASE_URL +
            "/search" +
            `?key=${API_KEY}` +
            "&part=snippet" +
            `&q=${searchQuery}` +
            `&maxResults=${maxResults}`
        );
        const data = await response.json();
        console.log(
            data.items);
        renderVideos(data.items);
    } catch (err) {
        console.log(err);
    }
}

async function fetchChannelLogo(channelId) {
    try {
        const response = await fetch(
            BASE_URL +
            "/channels" +
            `?key=${API_KEY}` +
            "&part=snippet" +
            `&id=${channelId}`
        );
        const data = await response.json();
        //  console.log(data);
        return data.items[0]?.snippet;
    } catch (err) {
        console.log(err);
    }
}

async function fetchVideoStats(videoId, typeOfDetails) {
    const response = await fetch(
        BASE_URL +
        "/videos" +
        `?key=${API_KEY}` +
        `&part=${typeOfDetails}` +
        `&id=${videoId}`
    );
    const data = await response.json();
    if (data.items && data.items.length > 0) {
        return data.items[0].statistics.viewCount;
    } else {
        return 'View count not available';
    }

}

// fetchVideos("icc world cup", 10);
// fetchVideoStats("_QUjQGz2jzs", CONTENT_DETAILS);

// Function to render videos in class2 div
function renderVideos(list) {
    list.forEach((video) => {
        const block = document.createElement('div');
        block.style.display = 'flex';
        block.style.flexDirection = 'column';
        //  block.style.alignItems = 'center';
        block.style.height = '350px';
        block.style.width = '300px';
        block.style.color = 'white';
        block.style.paddingRight = '20px'

        const videoDiv = document.createElement('div');
        videoDiv.style.height = '200px';
        videoDiv.style.width = '300px';
        videoDiv.style.backgroundImage = `url(${video.snippet.thumbnails.default.url})`;
        videoDiv.style.backgroundSize = 'cover';
        videoDiv.style.backgroundPosition = 'center';


        const profileDiv = document.createElement('div');
        profileDiv.style.paddingRight = '18px';
        profileDiv.style.fontWeight = '700';
        profileDiv.textContent = video.snippet.title;




        const pTag1 = document.createElement('p');
        pTag1.innerText = video.snippet.channelTitle;
        pTag1.style.paddingRight = '15px';
        pTag1.style.textAlign = 'left';
        pTag1.style.fontFamily = 'Calibri'
        pTag1.style.color = '#868686';

        // pTag1.style.paddingLeft = '15px';


        const infoDiv = document.createElement('div');
        infoDiv.style.display = 'flex'; // Flexbox
        infoDiv.style.alignItems = 'center';
        infoDiv.style.marginTop='-23px';
        infoDiv.style.fontSize='13px';
        infoDiv.style.color='#868686'


        const pTag2 = document.createElement('p');
        pTag2.textContent = video.snippet.publishedAt;
        const publishedTime = new Date(video.snippet.publishedAt);
        const currentTime = new Date();

        const timeDifference = currentTime - publishedTime;
        const secondsDifference = Math.floor(timeDifference / 1000);

        if (secondsDifference < 60) {
            const seconds = secondsDifference;
            pTag2.textContent = `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        } else if (secondsDifference < 3600) {
            const minutes = Math.floor(secondsDifference / 60);
            pTag2.textContent = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
        } else if (secondsDifference < 86400) {
            const hours = Math.floor(secondsDifference / 3600);
            pTag2.textContent = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
        } else if (secondsDifference < 604800) {
            const days = Math.floor(secondsDifference / 86400);
            pTag2.textContent = `${days} day${days !== 1 ? 's' : ''} ago`;
        } else {
            const weeks = Math.floor(secondsDifference / 604800);
            pTag2.textContent = `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
        }




        const ptag3 = fetchVideoStats(video.id.videoId, STATS);
        ptag3.then(viewCount => {
            // This will log the view count to the console
            console.log(viewCount);
            const view = document.createElement('p');
            view.textContent = `.${viewCount}views`;
            // Replace 'class2' with the appropriate HTML element where you want to display the view count
            infoDiv.appendChild(view);
        }).catch(error => {
            console.error('Error fetching view count:', error);
        });




 // Append elements to the infoDiv
 infoDiv.appendChild(pTag2); // Append pTag2 to infoDiv after view count

 // Append elements to the block
 block.appendChild(videoDiv);
 block.appendChild(profileDiv);
 block.appendChild(pTag1);
 block.appendChild(infoDiv); // Append infoDiv to block


        class2.appendChild(block);
    });
}

// Function triggered by the 'Search' button
function searchVideos() {
    const searchQuery = document.getElementById("search-here").value.trim();
    if (searchQuery !== "") {
        class2.innerHTML = ""; // Clear existing videos
        fetchAndRenderVideos(searchQuery, 20);
    } else {
        class2.innerHTML = ""; // Clear existing videos
        fetchAndRenderVideos("", 20); // Show default videos if the search query is empty
    }
}

searchVideos();
