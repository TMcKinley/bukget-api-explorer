Ext.define('Bukget.store.Trend', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.Trend',
    requires	: [
	    'Ext.data.proxy.JsonP',
	    'Ext.data.reader.Json',
	    'Bukget.model.Trend'
	],
    
	autoLoad	: false,
    proxy		: {
        noCache		: false,
        limitParam	: undefined,
        startParam	: undefined,
        pageParam	: undefined,
        type		: 'jsonp',
        url 		: 'http://api.bukget.org/stats/trend/60',
        reader		: {
        	type		: 'json'
        }
    }
});