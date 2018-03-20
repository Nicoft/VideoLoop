'use strict';

var player = "";
var player2 = "";

var slides = [
	{
		"url": "https://s3.amazonaws.com/newnationcreation/warrior.mp4",
		"poster": "https://s3.amazonaws.com/newnationcreation/warrior.jpg"
	},
	{
		"url": "https://s3.amazonaws.com/newnationcreation/paints.mp4",
		"poster": "https://s3.amazonaws.com/newnationcreation/paints.jpg"
	},
	{
		"url": "https://s3.amazonaws.com/newnationcreation/tiff.mp4",
		"poster": "https://s3.amazonaws.com/newnationcreation/tiff.jpg"
	},
	{
		"url": "https://s3.amazonaws.com/newnationcreation/lop.mp4",
		"poster": "https://s3.amazonaws.com/newnationcreation/lop.jpg"
	}
];

var increment = 0;
var increment2 = 2;
var time = "";


let prevButton, nextButton, sliderTitle, sliderSubtitle, sliderLink, sliderText, video, slider
let playingIndex = 0



document.addEventListener('DOMContentLoaded', onLoad);




function onLoad() {
	
	
	player = document.getElementById("video-player");
	player2 = document.getElementById("video-player2");
	
	// var players = document.querySelectorAll('video')

	// players.forEach(function(elem) {
	//     elem.addEventListener("input", function() {
	//         //this function does stuff
	//     });
	// });

	// player.addEventListener('durationchange', function() {
	// 	    console.log('1 Duration change', player.duration);
	// 	    time = player.duration*1000;
	// 	    console.log("2 event trigger time:", time)
	// 	    console.log("3 loop time:", time)
	// 		window.setTimeout(videoLoop, time);
	// });
	// player2.addEventListener('durationchange', function() {
	// 	    console.log('4 Duration change', player.duration);
	// 	    time = player.duration*1000;
	// 	    console.log("5 event trigger time:", time)
	// 	    console.log("6 loop time:", time)
	// 		window.setTimeout(videoLoop, time);
	// });



	function classToggle () {
		player.classList.toggle("hide");
		player2.classList.toggle("hide");
	}

	function tickPlayingIndex() {

	}

	function prev () {
	    playingIndex = playingIndex - 1 < 0
	        ? slides.length - 1
	        : playingIndex - 1
	    update(playingIndex)
	}

	function next () {
	    playingIndex = playingIndex + 1 === slides.length
	        ? 0
	        : playingIndex + 1
	    update(playingIndex)
	}

	function changePlayer1() {
		player.poster = slides[playingIndex].poster
		player.src = slides[playingIndex].url
		console.log("switch1")
		player.load();
	}
	function changePlayer2() {
		player2.poster = slides[playingIndex].poster
		player2.src = slides[playingIndex].url
		console.log("switch2")
		player2.load();
	}




	function update (playingIndex) {
		classToggle()
		if (player.classList.contains("hide")) {
			console.log(2, playingIndex);
			player2.play();
			console.log("player2 playing!")
			
			setTimeout(changePlayer1, 2000);
	   		

		} else {
			console.log(1, playingIndex);
			player.play();
			console.log("player1 playing!")
			
			setTimeout(changePlayer2, 2000);
		    
		    
		}
	    
	}

	player.addEventListener('ended', next)

player.poster = slides[playingIndex].poster
player.src = slides[playingIndex].url
next()
}
	
	






	// function videoLoop() {

	// 	player.classList.toggle("hide");

	// 	player2.classList.toggle("hide");
	// 	if (player.classList.contains("hide")){
	// 		console.log("true")
	// 	    	player2.play();	
	// 	    	player.src = sources[increment][0];
	// 			player.poster = sources[increment][1];
	// 			increment = (increment + 1) % sources.length;

	// 	} else {
	// 		console.log("false")
	// 	    	player.play();
	// 	    	player2.src = sources[increment2][0];
	// 			player2.poster = sources[increment2][1];
	// 			increment2 = (increment + 1) % sources.length;
	// 	}
		
		
	// 	console.log(0, increment)
	// 	console.log("video1:", player.classList, "video2:", player2.classList )
		

	// }


	// videoLoop();

	
	













// LOOP WITH FIXED TIMER
// var player = 0;

// var sources = [
// 	"https://s3.amazonaws.com/newnationcreation/lop.mp4",
// 	"https://s3.amazonaws.com/newnationcreation/paints.mp4",
// 	"https://s3.amazonaws.com/newnationcreation/yr.mp4",
// 	"https://s3.amazonaws.com/newnationcreation/subaru.mp4"
// ];

// var increment = 1;
// var time = 7000;

// function videoLoop() {

// 	player.src = sources[increment];
// 	increment = (increment + 1) % sources.length;
// 	time = player.duration;
// 	console.log(time)

// }

// document.addEventListener('DOMContentLoaded', onLoad);




// function onLoad() {
	
// 	player = document.getElementById("video-player")

// 	setInterval(videoLoop, time);
// }