(function(){
	if(Function.prototype.simpleDelay) return;

	Function.prototype.simpleDelay = function(delay,bind,args){
		if(this._sDelay) this.sClear();
		var _func = this;
		var _args = args ? args : [];
		var _bind = bind ? bind : window;

		this._sDelay = setTimeout(_func.bind(_bind,_args),delay);

		return this;
	};

	Function.prototype.simpleClear = function(){
		if(!this._sDelay) return this;

		clearTimeout(this._sDelay);
		delete this._sDelay;

		return this;
	};
	
	Function.prototype.sDelay = function(delay,bind,args){
		return this.simpleDelay(delay,bind,args);
	};
	
	Function.prototype.sClear = function(){
		return this.simpleClear();
	};
})();