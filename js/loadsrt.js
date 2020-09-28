var loadSRT = function(url, callback) {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function() {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        var subtitles = parser.fromSrt(httpRequest.responseText, true);

        for (var i in subtitles) {
          subtitles[i] = {
            start : subtitles[i].startTime / 1000,
            end   : subtitles[i].endTime / 1000,
            text  : subtitles[i].text
          };
        }

        callback(subtitles);
      }
    };

    httpRequest.open('GET', url, true);
    httpRequest.send(null);
};