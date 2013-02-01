Ext.define("Bukget.view.GenerationInfo.SearchPanel", {
    extend		: 'Ext.form.Panel',
    alias		: 'widget.generation_info_form',
    requires	: [
	    'Ext.form.field.Number',
	    'Ext.form.field.Display',
	    'Ext.Component'
	],
    
    bodyStyle	: {
    	background	: '#D9E8FB',
    	padding		: '10px'
    },
    layout		: 'anchor',
    items		: [{
    	xtype				: 'numberfield',
    	name				: 'generation_size',
    	fieldLabel			: 'Number of previous generations to return (Defaults to 1)',
    	value				: 1,
    	minValue			: 1,
    	maxValue			: 9999,
    	maxLength			: 4,
    	enforceMaxLength	: true,
    	labelAlign			: 'top',
    	anchor				: '90%'
    },
    {
    	xtype				: 'container',
    	anchor				: '90%',
    	layout				: 'hbox',
    	items				: [{
    		xtype	: 'component',
    		flex	: 1
    	},
    	{
    		xtype	: 'button',
    		text	: 'Clear',
    		name	: 'clearButton',
    		margin	: '0 5 0 0',
    		icon	: 'images/icons/cross.png'
    	},
    	{
    		xtype	: 'button',
    		text	: 'Search',
    		name	: 'searchButton',
    		icon	: 'images/icons/magnifier.png'
    	}]
    },
    {
    	xtype				: 'displayfield',
    	name				: 'generated_url_label',
    	fieldLabel			: 'Generated URL',
    	anchor				: '90%'
    },
    {
    	xtype				: 'component',
    	name				: 'generated_url_value',
    	tpl					: '<a href="{href}" target="{target}">{text}</a>'
    }]
});