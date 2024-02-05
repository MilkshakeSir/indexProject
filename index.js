// Init function
// Read url for ?video
const urlParams = new URLSearchParams(window.location.search)

var linkInput = document.getElementById("linkInput"); // input box
var videoContainer = document.getElementById("videoContainer"); // iframe?

const videoUrlFromLink = urlParams.get("video")
const quickLoad = urlParams.get("q")

function getYoutubeId(url) {
  var youtubeRegex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
  var match = url.match(youtubeRegex);

  if (match && match.length > 0) {
    return match[0].substring(match[0].length - 11);
  } else {
    return null;
  }
}

function embedVideo(videoId,returnCode) {
  videoContainer.innerHTML = ''; // Clear any existing video

  if (videoId) {
    var width = 900;
    var height = 506;

    var embedCode = '<iframe width="' + width + '" height="' + height + '" src="https://www.youtube-nocookie.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
    var finalCode = embedCode // + '<p id="rightText">I hate css</p>';
    videoContainer.innerHTML = finalCode;
  }
}

if (videoUrlFromLink) {
  const videoId = getYoutubeId(videoUrlFromLink)
  
  if (videoId) {
    embedVideo(videoId)
  } 
}

if (quickLoad) {
  const videoId = getYoutubeId(quickLoad)

  if (videoId) {
    window.location.href = "https://www.youtube-nocookie.com/embed/"+videoId
  }
}

  document.addEventListener('DOMContentLoaded', function () { // Start function
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
