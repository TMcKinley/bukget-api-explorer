Ext.define('Bukget.store.Category', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.Category',
    requires	: [
	    'Ext.data.proxy.JsonP',
	    'Ext.data.reader.Json',
	    'Bukget.model.Category'
	],
    
	autoLoad	: false,
    proxy		: {
        noCache		: false,
        limitParam	: undefined,
        startParam	: undefined,
        pageParam	: undefined,
        type		: 'jsonp',
        url 		: 'http://api.bukget.org/3/categories/',
        reader		: {
        	type		: 'json'
        }
    }
});