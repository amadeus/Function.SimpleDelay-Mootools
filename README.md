Function.SimpleDelay
===========
Purpose: A simple and elegant delay method that can be easily self cleared without the need to add external variables

[Demo](http://jsfiddle.net/amadeus/bvHpG/ "Demo")

How to use
----------
Simply include Function.simpleDelay.js along with MooTools 1.3. The delay can be invoked on any function by simply calling:

	someFunc.simpleDelay(2000);

To clear the delay, simply call the clear method:

	someFunc.simpleClear();

There is no need to assign the delay to a variable like the normal MooTools delay method.

See Docs/example.html and the Source/Function.simpleDelay.js for more example uses and arguments.