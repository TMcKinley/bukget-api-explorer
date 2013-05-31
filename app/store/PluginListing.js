Ext.define('Bukget.store.PluginListing', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.listing.BasePlugin',
    requires	: [
	    'Ext.data.proxy.JsonP',
	    'Ext.data.reader.Json',
	    'Bukget.model.listing.BasePlugin'
	],
    
	autoLoad	: false,
    proxy		: {
        noCache		: false,
        startParam	: 'start',
        limitParam  : 'size',
        pageParam	: undefined,
        type		: 'jsonp',
        reader		: {
        	type		: 'json'
        }
    }
});