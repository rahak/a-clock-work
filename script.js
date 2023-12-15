const canvas = document.querySelector('#clock');
	const ctx = document.querySelector('#clock').getContext('2d');

	// size canvas
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	setInterval( function() {
		updateClock()
	}, 10);
	
	function updateClock() {
		

		// adjust canvas responsively
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		// clear canvas
		ctx.clearRect(0, 0, ctx.width, ctx.height);

		// length of radius
		var radius = window.innerHeight/2;
		if(window.innerHeight/2 > window.innerWidth/2) {
			var radius = window.innerWidth/2;
		}

		var centerX = window.innerWidth/2;
		var centerY = window.innerHeight/2;

		// get date
		const today = new Date;
		const square = document.querySelector('#square');
		const point = document.querySelector('#point');

		// hours
		var pointClient = point.getBoundingClientRect();
		var hours = today.getHours();
		var hoursAngle = 360 / 12 * hours;
		square.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
		posHoursX = pointClient.left;
		posHoursY = pointClient.top;

		console.log(posHoursX, posHoursY);

		// minutes
		var pointClient = point.getBoundingClientRect();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		var milliseconds = today.getMilliseconds();
		minutes = minutes + seconds/60;
		var minutesAngle = 360 / 60 * minutes;
		square.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
		posMinutesX = pointClient.left;
		posMinutesY = pointClient.top;

		console.log(posMinutesX, posMinutesY);

		var pointClient = point.getBoundingClientRect();
		var seconds = today.getSeconds();
		var milliseconds = today.getMilliseconds();
		seconds = seconds + milliseconds/1000;
		var secondsAngle = 360 / 60 * seconds;
		square.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
		posSecondsX = pointClient.left;
		posSecondsY = pointClient.top;

		console.log(posSecondsX, posSecondsY);
		
		// if it's noon
		// we travel 1 radius length from center of clock to noon, 
		// taking center + radius at angle 0

		// if it's noon
		// var newHoursX = centerX + 0;
		// var newHoursY = centerY + radius;

		// if it's 3pm
		// var newHoursX = centerX + radius;
		// var newHoursY = centerY + 0;

		// if it's 1pm
		// var newHoursX = centerX + ?;
		// var newHoursY = centerY + 0;

		// start drawing 
		ctx.fillStyle = 'black';
		ctx.beginPath();
		//ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		//ctx.stroke();
		//ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
		ctx.strokeStyle = "black";
		ctx.stroke()
		ctx.beginPath();
		// clock center
		ctx.moveTo(centerX, centerY);
		// second hand
		ctx.lineTo(posSecondsX, posSecondsY);
		// minute hand
		ctx.lineTo(posMinutesX, posMinutesY);
		// hour hand
		ctx.lineTo(posHoursX, posHoursY);
		// brings us back to clock center
		ctx.closePath();
		ctx.fill();
	}