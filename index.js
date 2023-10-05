// Init function
// Read url for ?video

const queryUrl = window.location.search
const urlParams = new URLSearchParams(queryUrl) 

var linkInput = document.getElementById("linkInput");
var videoContainer = document.getElementById("videoContainer");

const videoUrlFromLink = urlParams.get("video")

function getYoutubeId(url) {
  var youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=|v\/|ytscreeningroom\?v=|e\/|u\/\w+\/|embed\/|v=|ytscreeningroom\?v=|e\/|u\/\w+\/))?(?:[\w-]{11})(?:[\?&][\w\?=]*)?$/;
  var match = url.match(youtubeRegex);

  if (match && match.length > 0) {
    return match[0].substring(match[0].length - 11);
  } else {
    return null;
  }
}


function embedVideo(videoId) {
  videoContainer.innerHTML = ''; // Clear any existing video

  if (videoId) {
    var embedCode = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    videoContainer.innerHTML = embedCode;
  }
}

if (videoUrlFromLink) {
  const videoId = getYoutubeId(videoUrlFromLink)
  embedVideo(videoId)
}


document.addEventListener('DOMContentLoaded', function() { // Start function


  function addLink() {
  var linkUrl = linkInput.value;
  var videoId = getYoutubeId(linkUrl);

  if (videoId) {

    embedVideo(videoId); // Embed the video immediately

    linkInput.value = ''; // Clear the input field
  }
}


  document.getElementById("addButton").addEventListener('click', addLink);
});
