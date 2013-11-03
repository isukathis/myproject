var ACTION = (function(module) {
	
	module.PressMe = function(resultObject) {
		resultObject.prepend(Date() + '<br/>' );
	};

	return module;
} (ACTION || {}));