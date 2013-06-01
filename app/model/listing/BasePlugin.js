Ext.define('Bukget.model.listing.BasePlugin', {
    extend	: 'Ext.data.Model',
    requires	: [
        'Ext.data.Model',
        'Ext.data.association.HasOne',
        'Ext.data.association.HasMany',
        'Bukget.model.listing.Author',
        'Bukget.model.listing.Category',
        'Bukget.model.listing.Version',
        'Bukget.model.listing.Popularity'
    ],
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
        {name: 'description',  	    type: 'string'}
    ],
    associations: [
    {
        type        : 'hasMany',
        model       : 'Bukget.model.listing.Author',
        name        : 'authors',
        storeConfig : {
            type       : 'array'
        }
    },
    {
        type    : 'hasMany',
        model   : 'Bukget.model.listing.Category',
        name    : 'categories'
    },
    {
        type    : 'hasMany',
        model   : 'Bukget.model.listing.Version',
        name    : 'versions'
    },
    {
        type			: 'hasOne',
        model			: 'Bukget.model.listing.Popularity',
        name			: 'popularity',
        associatedName	: 'Popularity',
        getterName		: 'getPopularity',
        setterName		: 'setPopularity',
        associationKey	: 'popularity'
    }]
});