Ext.define("Bukget.view.category.Layout", {
    extend	: 'Ext.container.Container',
    alias	: 'widget.category_layout',
    requires: [
        'Ext.layout.container.Border'
    ],

    title		: 'Category Listing',
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
        name        : 'categoryListing',
        region      : 'west',
        flex        : 1,
        store       : 'Category',
        columns     : [{
            text        : 'Category Name',
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
        name        : 'categoryPluginListing',
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