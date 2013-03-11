Ext.Loader.setConfig({
    disableCaching: true
});

Ext.application({
    name				: 'Bukget',
    autoCreateViewport	: true,
	paths				: {
		'Ext.ux'			: 'http://cdn.sencha.com/ext-4.1.1a-gpl/examples/ux'
	},
	controllers			: [
	    'TrendController',
	    'GenerationController',
	    'PluginListingController',
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
