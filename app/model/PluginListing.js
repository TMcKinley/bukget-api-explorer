Ext.define('Bukget.model.PluginListing', {
    extend	: 'Ext.data.Model',
    fields	: [
	    {name: 'slug',              type: 'string'},
	    {name: 'plugin_name',  		type: 'string'},
	    {name: 'server',  	        type: 'string'},
        {name: 'categories',  	    type: 'string'},
        {name: 'authors',  	        type: 'string'},
        {name: 'logo',  	        type: 'string'},
        {name: 'logo_full',  	    type: 'string'},
        {name: 'webpage',  	        type: 'string'},
        {name: 'dbo_page',  	    type: 'string'},
        {name: 'description',  	    type: 'string'},
        {
            name    : 'version',
            type    : 'string',
            mapping : function(a, b, c, d, e) {
                var test1 = "";
                var test2 = "";
            }
        }
/*
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions.',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'},
        {name: 'versions',  	type: 'string'}
*/
    ]
});