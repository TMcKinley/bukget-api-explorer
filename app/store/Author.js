Ext.define('Bukget.store.Author', {
    extend		: 'Ext.data.Store',
    model		: 'Bukget.model.Author',
    requires	: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Bukget.model.Author'
    ],

    autoLoad	: false,
    proxy		: {
        noCache		: false,
        limitParam	: undefined,
        startParam	: undefined,
        pageParam	: undefined,
        type		: 'jsonp',
        url 		: 'http://api.bukget.org/3/authors/',
        reader		: {
            type		: 'json'
        }
    }
});