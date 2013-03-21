Ext.define('Bukget.controller.CategoryController', {
    extend	: 'Ext.app.Controller',

    stores	: [
        'Category',
        'PluginListing'
    ],
    models	: [
        'Category',
        'PluginListing'
    ],
    views	: [
        'category.Layout'
    ],

    refs	: [{
   	    ref		: 'categoryListing',
   	    selector: 'viewport category_layout grid[name="categoryListing"]'
    },
    {
        ref     : 'categoryPluginListing',
        selector: 'viewport category_layout grid[name="categoryPluginListing"]'
    }],

    init	: function() {
        this.control({
            'viewport category_layout grid[name="categoryListing"]': {
                afterrender	: this.onCategoryListingAfterRender,
                select      : this.onCategoryListingGridSelect
            }
        });
    },

    onCategoryListingAfterRender		: function(grid) {
        var store = grid.getStore();
        store.load({
            scope: this,
            callback: function(records, operation, success) {
                console.log(records);
            }
        });
    },

    onCategoryListingGridSelect         : function(grid, record, index, eventOptions) {
        var newURL = 'http://api.bukget.org/3/categories/';
        newURL += record.get('name') + '/';

        var grid = this.getCategoryPluginListing();
        var store = grid.getStore();
        store.load({
            scope    : this,
            url      : newURL,
            callback : function(a, b, c) {
                var store = this.getCategoryPluginListing().getStore();
                store.totalCount = record.get('count');
            }
        });
    }
});