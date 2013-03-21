Ext.Loader.setConfig({
    disableCaching: true
});

Ext.application({
    name				: 'Bukget',
    autoCreateViewport	: true,
	paths				: {
		'Ext.ux'			: 'http://cdn.sencha.com/ext/gpl/4.2.0/examples/ux'
	},
	controllers			: [
        'AuthorController',
        'CategoryController',
	    'GenerationController',
	    'PluginListingController',
        'TrendController'
	],
	init				: function() {
		var test = "";
		if (test) {
			
		}		
	},
	launch				: function() {
		var test = "";
		if (test) {
			
		}
	}
});
