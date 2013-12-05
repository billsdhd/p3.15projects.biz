var pi=3.14159265359
var rate = 44100;

function playNote(h) {

	var waves = [] 

	//make a PCM wave form for xylophone sound
	for (var i=0; i < rate ; i++) {
		var t = i / rate;
		var w = 2 * pi * h * t;
		waves[i] = 128 + Math.round( 127 * ( Math.cos(w + 8 * Math.sin(w*2) 
						* Math.exp(-t * 4) ) * Math.exp(-t *3)));
	};
	
	//setup wave data
	var wave = new RIFFWAVE();
	wave.header.sampleRate = rate;
	wave.header.numChannels = 1;

	//setup audio output data
	var audio = new Audio();
	
	//make a wave data
	wave.Make(waves);
	audio.src=wave.dataURI;
	
	//play the wave data
	audio.play();
	
};

$('#f3').click(function() 	{ playNote(175);});
$('#gb3').click(function() 	{ playNote(185);});
$('#g3').click(function() 	{ playNote(196);});
$('#ab3').click(function() 	{ playNote(208);});
$('#a3').click(function() 	{ playNote(220);});
$('#bb3').click(function() 	{ playNote(233);});
$('#b3').click(function() 	{ playNote(247);});

$('#c4').click(function() 	{ playNote(261);});
$('#db4').click(function() 	{ playNote(277);});
$('#d4').click(function() 	{ playNote(293);});
$('#eb4').click(function() 	{ playNote(311);});
$('#e4').click(function() 	{ playNote(330);});
$('#f4').click(function() 	{ playNote(349);});
$('#gb4').click(function() 	{ playNote(370);});
$('#g4').click(function() 	{ playNote(392);});
$('#ab4').click(function() 	{ playNote(415);});
$('#a4').click(function() 	{ playNote(440);});
$('#bb4').click(function() 	{ playNote(466);});
$('#b4').click(function() 	{ playNote(494);});

$('#c5').click(function() 	{ playNote(523);});
$('#db5').click(function() 	{ playNote(554);});
$('#d5').click(function() 	{ playNote(587);});
$('#eb5').click(function() 	{ playNote(622);});
$('#e5').click(function() 	{ playNote(659);});