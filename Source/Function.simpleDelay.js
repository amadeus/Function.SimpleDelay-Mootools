/*
---
description: Function.simpleDelay

license: MIT-style

authors:
- Amadeus Demarzi (http://enmassellc.com/)

requires:
 core/1.2.4: '*'

provides: [Function.simpleDelay]
...
*/

Function.implement({
	simpleDelay:function(delay,bind,args){
		if(this._sTimer) this.simpleClear();
		this._sTimer = this.delay.apply(this,arguments);
		return this;
	},
	simplePeriodical:function(delay,bind,args){
		if(this._sTimer) this.simpleClear();
		this._sTimer = this.periodical.apply(this,arguments);
		return this;
	},
	simpleClear:function(){
		if(!this._sTimer) return this;
		clearTimeout(this._sTimer);
		delete this._sTimer;
		return this;
	}
});

// Shortcuts
$each({sDelay: 'simpleDelay', sPeriodical: 'simplePeriodical', sClear: 'simpleClear'},function(oldMethod,newMethod){
	Function.prototype[newMethod] = Function.prototype[oldMethod];
});
