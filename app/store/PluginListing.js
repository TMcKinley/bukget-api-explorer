Ext.define('Bukget.store.PluginListing', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.PluginListing',
    requires	: [
	    'Ext.data.proxy.JsonP',
	    'Ext.data.reader.Json',
	    'Bukget.model.PluginListing'
	],
    
	autoLoad	: false,
    proxy		: {
        noCache		: false,
        limitParam	: undefined,
        startParam	: undefined,
        pageParam	: undefined,
        type		: 'jsonp',
        reader		: {
        	type		: 'json'
        }
    }
});