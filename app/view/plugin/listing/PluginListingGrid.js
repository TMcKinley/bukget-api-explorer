Ext.define("Bukget.view.plugin.listing.PluginListingGrid", {
    extend	: 'Ext.grid.Panel',
    alias	: 'widget.plugin_listing_grid',
    requires: [
	    'Bukget.store.PluginListing'
	],
    
	store	: 'PluginListing',
    columns	: [{
        text        : 'Plugin Name',
        dataIndex   : 'plugin_name'
    },
	{
        text        : 'Slug',
        dataIndex   : 'slug'
    },
	{
        text        : 'Server',
        dataIndex   : 'server'
    },
    {
        text        : 'Logo',
        dataIndex   : 'logo'
    },
    {
        text        : 'Full Logo',
        dataIndex   : 'logo_full'
    },
    {
        text        : 'Webpage',
        dataIndex   : 'webpage'
    },
    {
        text        : 'DBO Page',
        dataIndex   : 'dbo_page'
    },
    {
        text        : 'Description',
        dataIndex   : 'description'
    },
    {
        text        : 'Authors',
        dataIndex   : 'authors'
    },
    {
        text        : 'Categories',
        dataIndex   : 'categories'
    }]
});