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
	    'Ext.form.field.Display'
	],
    
    bodyStyle	: {
    	background	: '#D9E8FB',
    	padding		: '10px'
    },
    layout		: 'anchor',
    items		: [{
        xtype			: 'radiogroup',
        name			: 'returned_fields_group',
        fieldLabel		: 'Fields can either be excluded or included from the resultset',
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
    	xtype				: 'combobox',
    	fieldLabel			: 'test',
    	queryMode			: 'local',
    	valueField			: 'db_name',
    	displayField		: 'display_name',
    	store				: 'FieldList',
    	anchor				: '90%'
    },
    {
    	xtype				: 'fieldset',
    	name				: 'pagination',
    	title				: 'Use Pagination',
    	checkboxToggle		: true,
        collapsed			: true,
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
	    	labelAlign			: 'top',
	    	anchor				: '90%'
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
        	labelAlign			: 'top',
        	anchor				: '90%',
            style				: {
                marginTop			: '10px'
            }
        }]
    },
    {
    	xtype			: 'fieldset',
    	name			: 'sorting',
    	title			: 'Use Sorting',
    	checkboxToggle	: true,
        collapsed		: true,
        layout			: 'anchor',
        items			: [{
        	xtype			: 'container',
            layout			: 'hbox',
        	items			: [{
        		xtype			: 'checkbox',
        		name			: 'enable_plugin_sort',
        		flex			: 1
        	},
        	{
            	xtype				: 'combobox',
            	fieldLabel			: '',
            	hideEmptyLabel		: true,
            	queryMode			: 'local',
            	valueField			: 'db_name',
            	displayField		: 'display_name',
            	store				: 'FieldList',
        		flex				: 12
        	},
        	{
        		xtype			: 'combobox',
        		name			: 'plugin_sort_order',
                valueField		: 'db_field',
                displayField	: 'display_field',
                value			: 'ascending',
                flex			: 3,
                store			: {
                    fields			: [ 'db_field', 'display_field' ],
                    data			: [
                        {dbfield: 'ascending', shownfield: 'Ascending'},
                        {dbfield: 'descending', shownfield: 'Descending'}
                    ]
                }
        	}]
        },
        {
        	xtype			: 'container',
            layout			: {
            	type			: 'hbox',
            	defaultMargins	: {
            		top		: 5,
            		right	: 0,
            		bottom	: 0,
            		left	: 0
            	}
            },
        	items			: [{
        		xtype			: 'checkbox',
        		name			: 'enable_slug_sort',
        		flex			: 1
        	},
        	{
        		xtype			: 'displayfield',
        		value			: 'Slug',
        		flex			: 3
        	},
        	{
        		xtype			: 'combobox',
        		name			: 'slug_sort_order',
                valueField		: 'dbfield',
                displayField	: 'shownfield',
                value			: 'ascending',
                flex			: 3,
                store			: {
                    fields			: [ 'dbfield', 'shownfield' ],
                    data			: [
                        {dbfield: 'ascending', shownfield: 'Ascending'},
                        {dbfield: 'descending', shownfield: 'Descending'}
                    ]
                }
        	}]
        },
        {
        	xtype			: 'container',
            layout			: {
            	type			: 'hbox',
            	defaultMargins	: {
            		top		: 5,
            		right	: 0,
            		bottom	: 0,
            		left	: 0
            	}
            },
        	items			: [{
        		xtype			: 'checkbox',
        		name			: 'enable_description_sort',
        		flex			: 1
        	},
        	{
        		xtype			: 'displayfield',
        		value			: 'Description',
        		flex			: 3
        	},
        	{
        		xtype			: 'combobox',
        		name			: 'description_sort_order',
                valueField		: 'dbfield',
                displayField	: 'shownfield',
                value			: 'ascending',
                flex			: 3,
                store			: {
                    fields			: [ 'dbfield', 'shownfield' ],
                    data			: [
                        {dbfield: 'ascending', shownfield: 'Ascending'},
                        {dbfield: 'descending', shownfield: 'Descending'}
                    ]
                }
        	}]
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