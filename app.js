$(function() {
    var audio = $('#music-player')[0];
    var playlist = $('#playlist');
  
    // play the first song on load
    var firstSong = playlist.find('li:first-child');
    firstSong.addClass('active');
    audio.src = firstSong.attr('data-src');
    audio.play();
  
    // play a song when a playlist item is clicked
    playlist.on('click', 'li', function() {
      playlist.find('.active').removeClass('active');
      $(this).addClass('active');
      audio.src = $(this).attr('data-src');
      audio.play();
    });
  
    // update the playlist when a song ends
    audio.addEventListener('ended', function() {
      var active = playlist.find('.active');
      var next = active.next();
      if (next.length == 0) {
        next = playlist.find('li:first-child');
      }
      active.removeClass('active');
      next.addClass('active');
      audio.src = next.attr('data-src');
      audio.play();
    });
  });
  