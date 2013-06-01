Ext.define('Bukget.model.listing.Popularity', {
    extend	: 'Ext.data.Model',
    fields	: [
        {name: 'daily',         type: 'int'},
        {name: 'weekly',        type: 'int'},
        {name: 'monthly',       type: 'int'}
    ]
});