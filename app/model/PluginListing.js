Ext.define('Bukget.model.PluginListing', {
    extend	: 'Ext.data.Model',
    fields	: [
	    {name: 'plugin_name',   type: 'string'},
	    {name: 'slug',  		type: 'string'},
	    {name: 'description',  	type: 'string'}
    ]
});