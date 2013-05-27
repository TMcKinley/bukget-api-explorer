Ext.define("Bukget.view.plugin.listing.PluginListingGrid", {
    extend	: 'Ext.grid.Panel',
    alias	: 'widget.plugin_listing_grid',
    requires: [
	    'Bukget.store.PluginListing'
	],
    
	store	: 'PluginListing',
    columns	: [{
        text: 'Plugin Name',
        dataIndex: 'plugin_name'
    },
	{
        text: 'Slug',
        dataIndex: 'slug'
    },
	{
        text: 'Description',
        dataIndex: 'description',
        flex: 1
    }]
});