Ext.define("Bukget.view.author.Layout", {
    extend	: 'Ext.container.Container',
    alias	: 'widget.author_layout',
    requires: [
        'Ext.layout.container.Border'
    ],

    title		: 'Author Listing',
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
        xtype       : 'grid',
        name        : 'authorListing',
        region      : 'west',
        flex        : 1,
        store       : 'Author',
        columns     : [{
            text        : 'Author Name',
            dataIndex   : 'name',
            flex        : 1
        },
        {
            text        : 'Count',
            dataIndex   : 'count'
        }]
    },
    {
        xtype		: 'grid',
        name        : 'authorPluginListing',
        region		: 'center',
        flex		: 6,
        store       : 'PluginListing',
        dockedItems : [{
            xtype       : 'pagingtoolbar',
            store       : 'PluginListing',
            dock        : 'bottom',
            displayInfo : true
        }],
        columns     : [{
            text        : 'Slug',
            dataIndex   : 'slug'
        },
        {
            text        : 'Plugin Name',
            dataIndex   : 'plugin_name'
        },
        {
            text        : 'Description',
            dataIndex   : 'description',
            flex        : 1
        }]
    }]
});