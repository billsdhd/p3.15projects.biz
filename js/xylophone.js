window.onload = function() {
	// Check the browser and alerts on IE
	if ( navigator.userAgent.indexOf("MSIE")>0){
		alert('On the Internet Explorer, sounds same on all keys.'
			+' Try to use Chrome, Firefox, Safari, or Opera Browsers')
	}
};

function playNote(h) {
	// On the internet explorer, only ding sound plays
	if ( navigator.userAgent.indexOf("MSIE")>0 ){
		var audio = new Audio("sound/ding.mp3");

	}
	else
	{

		var waves = '';
		for(k = l = 22050; k--;) {
			waves += String.fromCharCode(Math.sin(k/l*h*2*Math.PI)
		    * Math.min((l-k)/32,k/l)*128 + 128);
		}
		var audio = new Audio('data:audio/wav;base64,UklGRjUrAABXQVZFZm10IBAAAAA\
							BAAEARKwAAESsAAABAAgAZGF0YREr'+btoa('\0\5'+waves));
	};	
	audio.play();
};

document.addEventListener('keydown', function(event) {
	switch(event.keyCode){
		case 65:	playNote(233); break; // a key play Bb note 233Hz
		case 90:	playNote(247); break; // z key play B note 247Hz
		case 88:	playNote(261); break; // x key play C note 261Hz
		case 68:	playNote(277); break; // d key play Db note 277Hz
		case 67:	playNote(293); break; // c key play D note 293Hz
		case 70:	playNote(311); break; // f key play Eb note 311Hz
		case 86:	playNote(330); break; // v key play E note 330Hz
		case 66:	playNote(349); break; // b key play F note 349Hz
		case 72:	playNote(370); break; // h key play Gb note 370Hz
		case 78:	playNote(392); break; // n key play G note 392Hz
		case 74:	playNote(415); break; // j key play Ab note 415Hz
		case 77:	playNote(440); break; // m key play A note 440Hz
		case 75:	playNote(466); break; // k key play Bb note 466Hz
		case 188:	playNote(494); break; // , key play B note 494Hz
		case 190:	playNote(523); break; // . key play C note 523Hz
		case 186:	playNote(554); break; // ; key play Db note 554Hz
		case 191:	playNote(587); break; // / key play D note 587Hz
		case 222:	playNote(622); break; // '../index.html key play Eb note 622Hz
		default:	
	}      
});

$('#f3').click	(function() 	{ playNote(175);}); // play F note 175Hz
$('#gb3').click	(function() 	{ playNote(185);}); // play Gb note 185Hz
$('#g3').click	(function() 	{ playNote(196);}); // play G note 196Hz
$('#ab3').click	(function() 	{ playNote(208);}); // play Ab note 208Hz
$('#a3').click	(function() 	{ playNote(220);}); // play A note 220Hz
$('#bb3').click	(function() 	{ playNote(233);}); // play Bb note 233Hz
$('#b3').click	(function() 	{ playNote(247);}); // play B note 247Hz

$('#c4').click	(function() 	{ playNote(261);}); // play C note 261Hz
$('#db4').click	(function() 	{ playNote(277);}); // play Db note 277Hz
$('#d4').click	(function() 	{ playNote(293);}); // play D note 293Hz
$('#eb4').click	(function() 	{ playNote(311);}); // play Eb note 311Hz
$('#e4').click	(function() 	{ playNote(330);}); // play E note 330Hz
$('#f4').click	(function() 	{ playNote(349);}); // play F note 349Hz
$('#gb4').click	(function() 	{ playNote(370);}); // play Gb note 370Hz
$('#g4').click	(function() 	{ playNote(392);}); // play G note 392Hz
$('#ab4').click	(function() 	{ playNote(415);}); // play Ab note 415Hz
$('#a4').click	(function() 	{ playNote(440);}); // play A note 440Hz
$('#bb4').click	(function() 	{ playNote(466);}); // play Bb note 466Hz
$('#b4').click	(function() 	{ playNote(494);}); // play B note 494Hz

$('#c5').click	(function() 	{ playNote(523);}); // play C note 523Hz
$('#db5').click	(function() 	{ playNote(554);}); // play Db note 554Hz
$('#d5').click	(function() 	{ playNote(587);}); // play D note 587Hz
$('#eb5').click	(function() 	{ playNote(622);}); // play Eb note 622Hz
$('#e5').click	(function() 	{ playNote(659);}); // play E note 659Hz
$('#f5').click	(function() 	{ playNote(699);}); // play E note 699Hz
