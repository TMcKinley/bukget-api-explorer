Ext.define("Bukget.view.plugin.listing.InfoGridPanel", {
    extend	: 'Ext.grid.Panel',
    alias	: 'widget.plugin_listing_grid',
    requires: [
	    'Bukget.store.GenerationInfo'
	],
    
	store	: 'GenerationInfo',
    columns	: [
	    { text: 'Plugin Name',  dataIndex: 'plugin_name' },
	    { text: 'Slug',  dataIndex: 'slug' },
	    { text: 'Description',  dataIndex: 'description', flex: 1 }
	]
});