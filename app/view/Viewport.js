Ext.define('Bukget.view.Viewport', {
    extend		: 'Ext.container.Viewport',
    requires	: [
        'Ext.tab.Panel',
        'Ext.panel.Panel'
    ],

    layout		: {
        type		: 'fit'
    },
    items		: {
        xtype		: 'tabpanel',
        items		: [{
        	xtype		: 'generation_info_layout'
        },
        {
        	xtype		: 'plugin_listing_layout'
        },
        {
        	xtype		: 'panel',
        	title		: 'Plugin Details'
        },
        {
        	xtype		: 'panel',
        	title		: 'Plugin Download'
        },
        {
        	xtype		: 'category_layout'
        },
        {
        	xtype		: 'author_layout'
        },
        {
        	xtype		: 'panel',
        	title		: 'Plugin Searching'
        },
        {
        	xtype		: 'trendinfo'
        }]
    }
});