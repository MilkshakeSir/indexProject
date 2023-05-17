document.addEventListener('DOMContentLoaded', function() {
  var linkInput = document.getElementById("linkInput");
  var linkList = document.getElementById("linkList");
  var videoContainer = document.getElementById("videoContainer");

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

  function addLink() {
  var linkUrl = linkInput.value;
  var videoId = getYoutubeId(linkUrl);

  if (videoId) {
    var listItem = document.createElement('li');
    var linkItem = document.createElement('a');
    linkItem.href = '#';
    linkItem.innerHTML = linkUrl;
    linkItem.addEventListener('click', function() {
      embedVideo(videoId);
    });

    listItem.appendChild(linkItem);
    linkList.insertBefore(listItem, linkList.firstChild); // Insert the new item at the beginning of the list

    embedVideo(videoId); // Embed the video immediately

    linkInput.value = ''; // Clear the input field
  }
}


  document.getElementById("addButton").addEventListener('click', addLink);
});
