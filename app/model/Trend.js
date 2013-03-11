Ext.define('Bukget.model.Trend', {
    extend	: 'Ext.data.Model',
    requires: [
        'Ext.data.Model'
    ],
    
    fields	: [
	    {name: 'api1',  			type: 'int'},
	    {name: 'api2',  			type: 'int'},
	    {name: 'api3',  			type: 'int'},
	    {name: 'bukkitdev',  		type: 'int'},
	    {name: 'unique',  			type: 'int'},
	    {name: 'total',  			type: 'int'},
	    {
	    	name		: 'timestamp',
	    	type		: 'date',
	    	dateFormat	: 'timestamp'
	    }
    ]
});