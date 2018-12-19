$(function(){
    var player = videojs('my-video');
    player.seekButtons({
          forward: 15,
          back: 15,
          lang: 'ja'
    });
})