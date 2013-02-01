Ext.define('Bukget.model.FieldList', {
    extend	: 'Ext.data.Model',
    fields	: [
	    {name: 'db_name',   			type: 'string'},
	    {name: 'display_name',  		type: 'string'},
	    {name: 'help_text',  			type: 'string'}
    ]
});