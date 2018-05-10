"use strict";

var ID = {
  VIDEO_PLAYER_ONE: "video-player-1",
  VIDEO_PLAYER_TWO: "video-player-2"
};

var UPDATE_FREQUENCY = 2000;

var slides = [{
  "url": "https://s3.amazonaws.com/newnationcreation/warrior.mp4",
  "poster": "https://s3.amazonaws.com/newnationcreation/warrior.jpg"
}, {
  "url": "https://s3.amazonaws.com/newnationcreation/paints.mp4",
  "poster": "https://s3.amazonaws.com/newnationcreation/paints.jpg"
}, {
  "url": "https://s3.amazonaws.com/newnationcreation/tiff.mp4",
  "poster": "https://s3.amazonaws.com/newnationcreation/tiff.jpg"
}, {
  "url": "https://s3.amazonaws.com/newnationcreation/lop.mp4",
  "poster": "https://s3.amazonaws.com/newnationcreation/lop.jpg"
}];

document.addEventListener("DOMContentLoaded", function onLoad () {
  var player1 = document.getElementById(ID.VIDEO_PLAYER_ONE);
  var player2 = document.getElementById(ID.VIDEO_PLAYER_TWO);
  var players = [ player1, player2 ];

  let playingIndex = 0;

  player1.poster = slides[playingIndex].poster;
  player1.src = slides[playingIndex].url;

  player1.addEventListener("ended", next);
  player2.addEventListener("ended", next);

  next();

  function next (e) {
    if (e && !isActive(e.target)) return 0;
    // go back to begining of playlist if that was the last slide
    playingIndex = playingIndex + 1 === slides.length
      ? 0
      : playingIndex + 1;

    update(playingIndex);
  }

  function update (playingIndex) {
    toggleVisibility();

    if (!isActive(player1)) {
      setTimeout(changePlayer1, UPDATE_FREQUENCY);
      player2.play();
    } else {
      setTimeout(changePlayer2, UPDATE_FREQUENCY);
      player1.play();
    }
  }

  function changePlayer1 () {
    player1.poster = slides[playingIndex].poster;
    player1.src = slides[playingIndex].url;

    player1.load();
  }

  function changePlayer2 () {
    player2.poster = slides[playingIndex].poster;
    player2.src = slides[playingIndex].url;

    player2.load();
  }

  function toggleVisibility () {
    players.forEach(function (player) {
      player.classList.toggle("hide");
    });
  }

  function isActive (player) {
    return !player.classList.contains("hide");
  }
})
