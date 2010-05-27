(function(){
	if(Function.prototype.sDelay) return;

	Function.prototype.sDelay = function(delay,bind,args){
		if(this._sDelay) this.sClear();
		var _func = this;
		var _args = args ? args : [];
		var _bind = bind ? bind : window;

		this._sDelay = setTimeout(_func.bind(_bind,_args),delay);

		return this;
	};

	Function.prototype.sClear = function(){
		if(!this._sDelay) return this;

		clearTimeout(this._sDelay);
		delete this._sDelay;

		return this;
	};
})();