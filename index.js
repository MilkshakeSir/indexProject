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
  
    function handleLink() {
      var linkUrl = linkInput.value;
  
      if (linkUrl) {
        var videoId = getYoutubeId(linkUrl);
        if (videoId) {
          var embedCode = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>';
  
          var listItem = document.createElement("li");
          listItem.innerHTML = embedCode;
          listItem.addEventListener('click', function() {
            videoContainer.innerHTML = this.innerHTML;
          });
  
          linkList.appendChild(listItem);
        }
      }
    }
  
    document.getElementById("addButton").addEventListener('click', handleLink);
  });
  