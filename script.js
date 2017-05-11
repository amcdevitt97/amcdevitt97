//Shoutout to Chris Coyier for the hourly changing CSS script. You can find it here:
// https://css-tricks.com/snippets/javascript/different-stylesheet-pending-the-time-of-day/

function getStylesheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 5) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    }
    if (5 <= currentTime&&currentTime < 10) {
        document.write("<link rel='stylesheet' href='sunrise.css' type='text/css'>");
    }
    if (10 <= currentTime&&currentTime < 17) {
        document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
    }
    if (17 <= currentTime&&currentTime < 20) {
        document.write("<link rel='stylesheet' href='sunrise.css' type='text/css'>");
    }
    if (20 <= currentTime&&currentTime <= 24) {
        document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
    } 
}
getStylesheet();

function getNewGif(){
	var rand = Math.floor(Math.random()*3);
	if(rand==2){
		document.getElementById("me").src="images/1.gif";
	}
	else if(rand==1){
		document.getElementById("me").src="images/2.gif";
	}
	else{
		document.getElementById("me").src="images/3.gif";
	}
}
getNewGif();


/*Easter egg here, If you're a code enthusiast, I'll waste your time with a backstory. All the 
songs here are from Animal Crossing. Some are according to time, others arent, but they remind
me of that timeframe. Playing DS with my cousin and getting immersed in animal crossing and 
hacking it (gotta love DS action replay haha) was one of the pushing factors for me to get into
CS. Oh and the music is pretty chill. Enough of my yaking, enjoy the tunes.*/

function music() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime&&currentTime < 5) {
        var Audio = document.getElementById("nightAudio");
        if (Audio.paused) {
            Audio.play();
        } else {
            Audio.pause();
        }
    }
    if (5 <= currentTime&&currentTime < 10) {
        var Audio = document.getElementById("sunriseAudio");
        if (Audio.paused) {
            Audio.play();
        } else {
            Audio.pause();
        }
    }
    if (10 <= currentTime&&currentTime < 17) {
        var Audio = document.getElementById("dayAudio");
        if (Audio.paused) {
            Audio.play();
        } else {
            Audio.pause();
        }
    }
    if (17 <= currentTime&&currentTime < 20) {
        var Audio = document.getElementById("sunriseAudio");
        if (Audio.paused) {
            Audio.play();
        } else {
            myAudio.pause();
        }
    }
    if (20 <= currentTime&&currentTime <= 24) {
        var myAudio = document.getElementById("nightAudio");
        if (myAudio.paused) {
            myAudio.play();
        } else {
            myAudio.pause();
        }
    }
}
