Ext.define('Bukget.store.GenerationInfo', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.GenerationInfo',
    requires	: [
	    'Ext.data.proxy.JsonP',
	    'Ext.data.reader.Json',
	    'Bukget.model.GenerationInfo'
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