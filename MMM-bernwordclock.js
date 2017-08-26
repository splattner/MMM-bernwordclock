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

		this.elements = [];

		this.elements["hour1"] = "eis";
		this.elements["hour2"] = "zwöi";
		this.elements["hour3"] = "drü";
		this.elements["hour4"] = "vieri";
		this.elements["hour5"] = "füfi";
		this.elements["hour6"] = "sächsi";
		this.elements["hour7"] = "sibni";
		this.elements["hour8"] = "achti";
		this.elements["hour9"] = "nüni";
		this.elements["hour10"] = "zäni";
		this.elements["hour11"] = "eufi";
		this.elements["hour12"] = "zwöufi";

		this.elements["befor"] = "vor";
		this.elements["past"] = "ab";

		this.elements["five"] = "füf";
		this.elements["ten"] = "zää";
		this.elements["quarter"] = "viertu";
		this.elements["twenty"] = "zwänzg";
		this.elements["half"] = "haubi";

		this.elements["it"] = "es";
		this.elements["is"] = "isch";

		this.elements["dot1"] = "dot1";
		this.elements["dot2"] = "dot2";
		this.elements["dot3"] = "dot3";
		this.elements["dot4"] = "dot4";

		// Set Interval for Update
		var self = this;
		setInterval(function() {
			self.updateWordClock();
		}, this.config.updateInterval);
	},

	updateWordClock: function() {

		this.resetWordClock();

	    var currentTime = moment();
	    var elements = ["it","is"];


		var hour = currentTime.hour() % 12;
		var minute = currentTime.minute();


		if (minute >= 0 && minute < 5){ }
		if (minute >= 5 && minute < 10) { elements.push("five","past"); }
		if (minute >= 10 && minute < 15) { elements.push("ten","past"); }
		if (minute >= 15 && minute < 20) { elements.push("quarter","past"); }
		if (minute >= 20 && minute < 25) { elements.push("twenty","past"); }
		if (minute >= 25 && minute < 30) {
			elements.push("five","befor","half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 30 && minute < 35) {
			elements.push("half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 35 && minute < 40) {
			elements.push("five","past","half");
			hour = (hour + 1) % 12;
		}

		if (minute >= 40 && minute < 45) {
			elements.push("twenty","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 45 && minute < 50) {
			elements.push("quarter","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 50 && minute < 55) {
			elements.push("ten","befor");
			hour = (hour + 1) % 12;
		}

		if (minute >= 55 ) {
			elements.push("five","befor");
			hour = (hour + 1) % 12;
		}


		elements.push(this.setHour(hour));
		var dots = this.setDot(minute);
		for (d in dots) {
			elements.push(dots[d]);
		}

		this.changeToAchtive(elements);
	}, 

	setDot : function(minute) {

		minute = minute % 5;
		var elements = [];

		switch (minute) {
			case 0:
				break;
			case 1:
				elements.push("dot1");
				break;
			case 2:
				elements.push("dot1","dot2");
				break;
			case 3:
				elements.push("dot1","dot2","dot3");
				break;
			case 4:
				elements.push("dot1","dot2","dot3","dot4");
				break;
		}

		return elements;
	},
	
	setHour: function(hour) {

		switch(hour) {
			case 0:
				return "hour12";
			case 1:
				return "hour1";
			case 2:
				return "hour2";
			case 3:
				return "hour3";
			case 4:
				return "hour4";
			case 5:
				return "hour5";
			case 6:
				return "hour6";
			case 7:
				return "hour7";
			case 8:
				return "hour8";
			case 9:
				return "hour9";
			case 10:
				return "hour10";
			case 11:
				return "hour11";
			case 12:
				return "hour12";
		}
	},

	resetWordClock: function() {

		for (var i in this.elements) {
			var item = document.getElementById(this.elements[i]);
			item.className = "";
		}

	},

	changeToAchtive: function(elements) {
		for (var i in elements) {
			var item = document.getElementById(this.elements[elements[i]]);
			item.className = "white";
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
