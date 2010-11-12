/*
---
description: Function.simpleDelay

license: MIT-style

authors:
- Amadeus Demarzi (http://enmassellc.com/)
- Arian Stolwijk

requires: [Core/Function]
provides: [Function.simpleDelay]
...
*/

Function.implement({

	simpleDelay: function(delay, bind, args){
		if (this._sTimer) this.simpleClear();
		this._sTimer = this.delay.call(this, delay, bind, args);
		return this;
	},

	simplePeriodical: function(delay, bind, args){
		if (this._sTimer) this.simpleClear();
		this._sTimer = this.periodical.call(this, delay, bind, args);
		return this;
	},

	simpleClear: function(){
		if (!this._sTimer) return this;
		clearTimeout(this._sTimer);
		delete this._sTimer;
		return this;
	}

}).alias({
	sDelay: 'simpleDelay',
	sPeriodical: 'simplePeriodical',	
	sClear: 'simpleClear'
});

