Ext.define('Bukget.model.Popularity', {
    extend	: 'Ext.data.Model',
    fields	: [
        {name: 'daily',         type: 'int'},
        {name: 'weekly',        type: 'int'},
        {name: 'monthly',       type: 'int'}
    ]
});