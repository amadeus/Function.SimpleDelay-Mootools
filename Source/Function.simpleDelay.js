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

(function(){
	if(Function.prototype.simpleDelay || Function.prototype.sDelay) return;
	Function.implement({
		simpleDelay:function(delay,bind,args){
			if(this._sDelay) this.simpleClear();
			var _func = this;
			var _args = args ? args : [];
			var _bind = bind ? bind : window;
			this._sDelay = setTimeout(_func.bind(_bind,_args),delay);
			return this;
		},
		simpleClear:function(){
			if(!this._sDelay) return this;
			clearTimeout(this._sDelay);
			delete this._sDelay;
			return this;
		}
	});
	// Shortcuts
	Function.implement({
		sDelay:function(delay,bind,args){ return this.simpleDelay(delay,bind,args); },
		sClear:function(){ return this.simpleClear(); }
	});
})();