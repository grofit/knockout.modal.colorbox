(function(knockout){
	var setupModal = function(element, contentSelector, options) {
		var onOpeningProxy = function() {
			$(contentSelector).show();
			if(options.onOpening) { options.onOpening(element, options.data); }
		};
		
		var onClosingProxy = function() {
			$(contentSelector).hide();
			if(options.onClosing) { options.onOpening(element, options.data); }
		};
		
		var colorboxOptions = {
			onOpen: onOpeningProxy,
			onCleanup: onClosingProxy,
			inline: true,
			href: contentSelector
		};
		
		if(options.title) { colorboxOptions.title = options.title; };
		if(options.width) { colorboxOptions.width = options.width; };
		if(options.height) { colorboxOptions.height = options.height; };
		if(options.nativeOptions) { $.extend(colorboxOptions, options.nativeOptions); }

        if(options.onOpened) {
            colorboxOptions.onComplete = function() { options.onOpened(element, options.data); };
        };
        if(options.onClosed) {
            colorboxOptions.onClosed = function() { options.onClosed(element, options.data);  };
        };

		$(contentSelector).hide();
		$(element).colorbox(colorboxOptions);			
	};

	knockout.bindingHandlers.modal = {
		init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
			var allBindings = allBindingsAccessor();
			var modalBindings = allBindings.modal;
			
			var contentSelector = ko.unwrap(modalBindings.content);
			var options = ko.unwrap(modalBindings.options) || {};
						
			if(!contentSelector)
			{
				console.log("Unable to setup modal due to no content being set");
				return;
			}
			
			setupModal(element, contentSelector, options);
		}
	};
		
	knockout.modal = {
		close: function() {	$.colorbox.close();	}
	};

})(typeof exports === 'undefined' ? this["ko"] : require("knockout"));