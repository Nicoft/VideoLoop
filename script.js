'use strict';

var player = 0;

var sources = [
	"https://s3.amazonaws.com/newnationcreation/lop.mp4",
	"https://s3.amazonaws.com/newnationcreation/paints.mp4",
	"https://s3.amazonaws.com/newnationcreation/yr.mp4",
	"https://s3.amazonaws.com/newnationcreation/subaru.mp4"
];

var increment = 0;
var time = 7000;



document.addEventListener('DOMContentLoaded', onLoad);




function onLoad() {
	
	
	player = document.getElementById("video-player");
	



	player.addEventListener('durationchange', function() {
		    console.log('1 Duration change', player.duration);
		    time = player.duration*1000;
		    
		    console.log("2 event trigger time:", time)
		    console.log("3 loop time:", time)
		window.setTimeout(videoLoop, time);

		
		});
	function videoLoop() {



		player.src = sources[increment];
		increment = (increment + 1) % sources.length;
		console.log(0, increment)
		

	}


	videoLoop();

	
	


}










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