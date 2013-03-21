Ext.define('Bukget.controller.AuthorController', {
    extend	: 'Ext.app.Controller',

    stores	: [
        'Author',
        'PluginListing'
    ],
    models	: [
        'Author',
        'PluginListing'
    ],
    views	: [
        'author.Layout'
    ],

    refs	: [{
   	    ref		: 'authorListing',
   	    selector: 'viewport author_layout grid[name="authorListing"]'
    },
    {
        ref     : 'authorPluginListing',
        selector: 'viewport author_layout grid[name="authorPluginListing"]'
    }],

    init	: function() {
        this.control({
            'viewport author_layout grid[name="authorListing"]': {
                afterrender	: this.onAuthorListingAfterRender,
                select      : this.onAuthorListingGridSelect
            }
        });
    },

    onAuthorListingAfterRender		: function(grid) {
        var store = grid.getStore();
        store.load({
            scope: this,
            callback: function(records, operation, success) {
                console.log(records);
            }
        });
    },

    onAuthorListingGridSelect         : function(grid, record, index, eventOptions) {
        var newURL = 'http://api.bukget.org/3/authors/';
        newURL += record.get('name') + '/';

        var grid = this.getAuthorPluginListing();
        var store = grid.getStore();
        store.load({
            scope    : this,
            url      : newURL,
            callback : function(a, b, c) {
                var store = this.getAuthorPluginListing().getStore();
                store.totalCount = record.get('count');
            }
        });
    }
});