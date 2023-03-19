function addVideoToPlaylist() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var playlistId = "PLbxJBFCZUspJRTl80GG7FPxbyxt5TBdgp";

  for (var i = 1; i < data.length; i++) {
    var videoUrl = data[i][1];	// 비디오url의 열이 index: 1에 있다고 가정합니다.
    if (videoUrl == "")
      continue;
  var videoId = getVideoId(videoUrl);
  try {
    var result = YouTube.PlaylistItems.insert({
      snippet: {
        playlistId: playlistId,
        resourceId: { kind: "youtube#video", videoId: videoId }
      },
    }, "snippet");
  } catch (e)
  {
    console.log(e.details.errors);
  }
  console.log(result);
  }
}

function getVideoId(url) {
  var videoId = "";
  var regex = /[?&]v=([^&#]*)/;
  var match = regex.exec(url);
  if (match) {
    videoId = match[1];
  } else {
    regex = /youtu.be\/([^?&#]*)/;
    match = regex.exec(url);
    if (match) {
    videoId = match[1];
    }
  }
  return videoId;
}
