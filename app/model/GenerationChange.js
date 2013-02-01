Ext.define('Bukget.model.GenerationChange', {
    extend	: 'Ext.data.Model',
    requires: [
        'Ext.data.association.BelongsTo'
	],
	
    fields	: [
	    {name: 'version',   	type: 'string'},
	    {name: 'plugin',  		type: 'string'}
    ],
    
    associations: [
	    {type: 'belongsTo', model: 'Bukget.model.GenerationInfo'}
	]
});