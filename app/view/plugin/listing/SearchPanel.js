Ext.define("Bukget.view.plugin.listing.SearchPanel", {
    extend		: 'Ext.form.Panel',
    alias		: 'widget.plugin_listing_form',
    requires	: [
	    'Ext.form.field.Number',
	    'Ext.ux.form.MultiSelect',
	    'Ext.form.RadioGroup',
	    'Ext.form.field.Radio',
	    'Ext.form.CheckboxGroup',
	    'Ext.form.field.Checkbox',
	    'Ext.form.field.ComboBox',
	    'Ext.form.FieldSet',
	    'Ext.form.field.Display',
        'Bukget.ux.form.SortContainer'
	],
    
    bodyStyle	: {
    	background	: '#D9E8FB',
    	padding		: '10px'
    },
    collapseDirection: 'left',
    titleCollapse: true,
    collapsed	: false,
    collapsible	: true,
    animCollapse: false,
    layout		: 'anchor',
    title       : 'Plugin Listing Configuration Options',
    items		: [{
        xtype			: 'radiogroup',
        name			: 'returned_fields_group',
        fieldLabel		: 'Fields to excluded or included from the resultset',
        labelAlign		: 'top',
        columns			: 2,
        anchor			: '100%',
        items			: [
            { boxLabel: 'Inclusive', name: 'rb', inputValue: 'inclusive' },
            { boxLabel: 'Exclusive', name: 'rb', inputValue: 'exclusive' }
        ]
    },
    {
    	xtype		: 'checkboxgroup',
    	name		: 'returned_fields',
    	fieldLabel	: 'Fields to be returned or excluded',
    	labelAlign	: 'top',
        columns		: 3,
        vertical	: true,
        anchor		: '100%',
        items		: [
            { boxLabel: 'Slug', 								name: 'rb', inputValue: 'inclusive' },
            { boxLabel: 'Plugin Name', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Server', 								name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Categories', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Authors', 								name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Logo', 								name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Logo Full', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Webpage', 								name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Dbo_page', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Description', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions', 							name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.version',	 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.md5', 						name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.filename', 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.link', 						name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.download', 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.type',	 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.status', 						name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.changelog', 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.game_versions', 				name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.date', 						name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.slug', 						name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.hard_dependencies', 			name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.soft_dependencies', 			name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Permissions', 				name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Permissions.role', 			name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Permissions.default', 		name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands', 					name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands.usage', 				name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands.alias', 				name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands.command', 			name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands.permission', 		name: 'rb', inputValue: 'exclusive' },
            { boxLabel: 'Versions.Commands.permission_message', name: 'rb', inputValue: 'exclusive' }
        ]
    },
    {
    	xtype				: 'fieldset',
    	name				: 'pagination',
    	title				: 'Pagination',
        collapsed			: false,
        collapsible         : true,
        layout				: 'anchor',
        items				: [{
        	xtype				: 'numberfield',
	    	name				: 'start_size',
	    	fieldLabel			: 'Starting record to return (Defaults to 0)',
	    	value				: 0,
	    	minValue			: 1,
	    	maxValue			: 9999,
	    	maxLength			: 4,
	    	enforceMaxLength	: true,
            labelWidth          : 300,
	    	anchor				: '95%'
        },
        {
        	xtype				: 'numberfield',
        	name				: 'limit_size',
        	fieldLabel			: 'Total number of records to return (Defaults to all)',
        	value				: 0,
        	minValue			: 1,
        	maxValue			: 9999,
        	maxLength			: 4,
        	enforceMaxLength	: true,
            labelWidth          : 300,
        	anchor				: '95%',
            style				: {
                marginTop			: '10px'
            }
        }]
    },
    {
    	xtype			: 'fieldset',
    	name			: 'sorting',
    	title			: 'Sorting',
        collapsed		: false,
        collapsible     : true,
        layout			: 'anchor',
        items           : [{
            xtype           : 'sortcontainer'
        }]
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