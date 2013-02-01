Ext.define('Bukget.model.GenerationInfo', {
    extend	: 'Ext.data.Model',
    requires: [
        'Ext.data.association.HasMany',
        'Bukget.model.GenerationChange'
    ],
    
    fields	: [
	    {name: 'id',  			type: 'string'},
	    {name: 'parser',  		type: 'string'},
	    {name: 'type',  		type: 'string'},
	    {name: 'duration',  	type: 'int'},
	    {
	    	name	: 'timestamp',
            convert	: function(value, record) {
                return new Date(value * 1000);
            }
	    }
    ],
    
    associations: [
	    {type: 'hasMany', model: 'Bukget.model.GenerationChange',    name: 'changes'}
	]
});