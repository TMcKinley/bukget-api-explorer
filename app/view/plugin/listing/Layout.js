Ext.define("Bukget.view.plugin.listing.Layout", {
    extend	: 'Ext.container.Container',
    alias	: 'widget.plugin_listing_layout',
    requires: [
        'Ext.layout.container.Border'
    ],
    
	title		: 'Plugin Listing',
	layout		: {
		type			: 'border',
		regionWeights	: {
			west	: 20,
			north	: 10,
			south	: -10,
			east	: -20
		}
	},
    items		: [{
    	xtype		: 'plugin_listing_form',
    	region		: 'west',
    	flex		: 2
    },
    {
    	xtype		: 'plugin_listing_grid',
    	region		: 'center',
    	flex		: 5
    }]
});