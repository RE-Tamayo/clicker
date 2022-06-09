const audio = new Audio('assets/mp3/click.mp3');
const button = document.getElementById('fun');
const skull = document.getElementById('skull');

let clicks = 0;
let event = 0;

var funMsg = document.getElementById('fun-message');

event1 = Math.floor(Math.random() * 100);
event2 = Math.floor(Math.random() * 100);
event3 = Math.floor(Math.random() * 100);
event4 = Math.floor(Math.random() * 100);
event5 = Math.floor(Math.random() * 100);
event6 = Math.floor(Math.random() * 100);


button.addEventListener('click', function(){
	clicks += 1;
	skull.style.displa = "none";
	button.innerHTML = clicks;


	if (clicks === event1) {
		funMsg.innerHTML = "Finally! A brave one!";
		event += 1;
	}


	if (clicks === event2) {
		funMsg.innerHTML = "I would thread carefully if I were you.";
		event += 1;
	}


	if (clicks === event3) {
		funMsg.innerHTML = "I suggest you stop now!";
		event += 1;
	}


	if (clicks === event4) {
		funMsg.innerHTML = "Suicidal aren't you?";
		event += 1;
	}


	if (clicks === event5) {
		funMsg.innerHTML = "You're courting death!";
		event += 1;
	}

	if (event === 5) {
		funMsg.innerHTML = "Enjoy!";
		window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', "_blank");
		location.reload();
	}
	audio.play();
	
});

