Ext.define("Bukget.view.plugin.listing.Layout", {
    extend	: 'Ext.container.Container',
    alias	: 'widget.plugin_listing_layout',
    requires: [
        'Ext.layout.container.Border'
    ],
    
	title		: 'Plugin Listing',
	layout		: {
		type			: 'hbox',
        align	        : 'stretch'
	},
    items		: [{
    	xtype		: 'plugin_listing_form',
    	region		: 'west',
    	flex		: 4
    },
    {
    	xtype		: 'plugin_listing_grid',
    	region		: 'center',
    	flex		: 4
    }]
});