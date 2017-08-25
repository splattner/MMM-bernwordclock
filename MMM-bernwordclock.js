/* Word Clock written in the Swiss German dialect of Bern */

/* Magic Mirror
 * Module: Bern Word Clock
 *
 * By Sebastian Plattner https://www.sebastianplattner.ch
 * MIT Licensed.
 */

Module.register("MMM-bernwordclock",{

	// Define module defaults
	defaults: {
		updateInterval: 1000, 
		
	},

	// Define required scripts.
	getStyles: function() {
		return ["bernwordclock.css"];
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		// Set locale.
		moment.locale(config.language);

		// Set Interval for Update
		var self = this;
		setInterval(function() {
			self.updateWordClock();
		}, this.config.updateInterval);
	},

	updateWordClock: function() {

		this.resetWordClock();


	    var currentTime = moment();

		var es = document.getElementById("es");
		es.className = "white";

		var isch = document.getElementById("isch");
		isch.className = "white";

		var hour = currentTime.hour();
		if (hour > 12) hour -=12 ;
		var minute = currentTime.minute();


		if (minute >= 0 && minute < 5){
			this.setHour(hour);
		}

		if (minute >= 5 && minute < 10) {
			var füf = document.getElementById("füf");
			var ab = document.getElementById("ab");
			füf.className = "white";
			ab.className = "white";

			this.setHour(hour);
		}

		if (minute >= 10 && minute < 15) {
			var zää = document.getElementById("zää");
			var ab = document.getElementById("ab");
			zää.className = "white";
			ab.className = "white";

			this.setHour(hour);
		}

		if (minute >= 15 && minute < 20) {
			var viertu = document.getElementById("viertu");
			var ab = document.getElementById("ab");
			viertu.className = "white";
			ab.className = "white";

			this.setHour(hour);
		}

		if (minute >= 20 && minute < 25) {
			var zwänzg = document.getElementById("zwänzg");
			var ab = document.getElementById("ab");
			zwänzg.className = "white";
			ab.className = "white";

			this.setHour(hour);
		}

		if (minute >= 25 && minute < 30) {
			var füf = document.getElementById("füf");
			var vor = document.getElementById("vor");
			var haubi = document.getElementById("haubi");
			füf.className = "white";
			vor.className = "white";
			haubi.className = "white"

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 30 && minute < 35) {
			var haubi = document.getElementById("haubi");
			haubi.className = "white"

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 35 && minute < 40) {
			var füf = document.getElementById("füf");
			var haubi = document.getElementById("haubi");
			var ab = document.getElementById("ab");
			haubi.className = "white";
			ab.className = "white";
			füf.className = "white";

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 40 && minute < 45) {
			var zwänzg = document.getElementById("zwänzg");
			var vor = document.getElementById("vor");
			zwänzg.className = "white";
			vor.className = "white";

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 45 && minute < 50) {
			var viertu = document.getElementById("viertu");
			var vor = document.getElementById("vor");
			viertu.className = "white";
			vor.className = "white";

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 50 && minute < 55) {
			var zää = document.getElementById("zää");
			var vor = document.getElementById("vor");
			zää.className = "white";
			vor.className = "white";

			hour +=1;
			if (hour > 12) hour -=12 ;

			this.setHour(hour);
		}

		if (minute >= 55 ) {
			var füf = document.getElementById("füf");
			var vor = document.getElementById("vor");
			füf.className = "white";
			vor.className = "white";

			hour +=1;
			if (hour >= 12) hour -=12 ;

			this.setHour(hour);
		}

		this.setDot(minute);



	}, 

	setDot : function(minute) {

		minute = minute % 5;

		var dot1 = document.getElementById("dot1");
		var dot2 = document.getElementById("dot2");
		var dot3 = document.getElementById("dot3");
		var dot4 = document.getElementById("dot4");

		switch (minute) {
			case 0:

				break;
			case 1:
				dot1.className = "white";
				break;
			case 2:
				dot1.className = "white";
				dot2.className = "white";
				break;

			case 3:
				dot1.className = "white";
				dot2.className = "white";
				dot3.className = "white";

				break;
			case 4:
				dot1.className = "white";
				dot2.className = "white";
				dot3.className = "white";
				dot4.className = "white";
				break;
		}
	},
	
	setHour: function(hour) {

		switch(hour) {
			case 0:
				var hourdigit = document.getElementById("zwöufi");
				break;
			case 1:
				var hourdigit = document.getElementById("eis");
				break;
			case 2:
				var hourdigit = document.getElementById("zwöi");
				break;
			case 3:
				var hourdigit = document.getElementById("drü");
				break;
			case 4:
				var hourdigit = document.getElementById("vieri");
				break;
			case 5:
				var hourdigit = document.getElementById("füfi");
				break;
			case 6:
				var hourdigit = document.getElementById("sächsi");
				break;
			case 7:
				var hourdigit = document.getElementById("sibni");
				break;
			case 8:
				var hourdigit = document.getElementById("achti");
				break;
			case 9:
				var hourdigit = document.getElementById("nüni");
				break;
			case 10:
				var hourdigit = document.getElementById("zäni");
				break;
			case 11:
				var hourdigit = document.getElementById("eufi");
				break;
			case 12:
				var hourdigit = document.getElementById("zwöufi");
				break;
		}

		hourdigit.className = "white";
	},

	resetWordClock: function() {

		var items = ["es", "isch","füf","ab","zää","viertu","zwänzg","vor","eis","zwöi","drü","vieri","füfi","sächsi","sibni","achti","nüni","zäni","eufi","zwöufi","dot1","dot2","dot3","dot4"]

		for (var i in items) {
			var item = document.getElementById(items[i]);
			item.className = "";
		}

	}, 
    
	// Override dom generator.
	getDom: function() {

		var wrapper = document.createElement("div");	
		wrapper.innerHTML = "<span id=\"dot1\">.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"dot2\">.</span><br />" + 
								"&nbsp;<span id=\"es\">E S</span> K <span id=\"isch\"> I S C H </span> A <span id=\"füf\">F Ü F</span>&nbsp;<br />" +
								"&nbsp;<span id=\"viertu\">V I E R T U</span> B F <span id=\"zää\" >Z Ä Ä</span>&nbsp;<br />" +
								"&nbsp;<span id=\"zwänzg\">Z W Ä N Z G</span> S I <span id=\"vor\">V O R</span>&nbsp;<br />" +
								"&nbsp;<span id=\"ab\">A B </span>O <span id=\"haubi\">H A U B I </span>E G E&nbsp;<br />" +
								"&nbsp;<span id=\"eis\">E I S </span><span id=\"zwöi\">Z W Ö I </span>S <span id=\"drü\">D R Ü</span>&nbsp;<br />" +
								"&nbsp;<span id=\"vieri\">V I E R I</span> <span id=\"füfi\">F Ü F I </span>Q T&nbsp;<br />" +
								"&nbsp;<span id=\"sächsi\">S Ä C H S I </span><span id=\"sibni\">S I B N I</span>&nbsp;<br />" +
								"&nbsp;<span id=\"achti\">A C H T I </span><span id=\"nüni\">N Ü N I </span>E L&nbsp;<br />" +
								"&nbsp;<span id=\"zäni\">Z Ä N I </span>E R B <span id=\"eufi\">E U F I</span>&nbsp;<br />" +
								"&nbsp;<span id=\"zwöufi\">Z W Ö U F I </span>N A U H R&nbsp;<br />" +
								"<span id=\"dot3\">.</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span id=\"dot4\">.</span><br />";

		return wrapper;
	}
});
