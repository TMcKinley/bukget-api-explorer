Ext.define("Bukget.view.plugin.listing.PluginListingForm", {
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
    layout		: 'anchor',
    collapsible : true,
    items		: [{
        xtype			: 'radiogroup',
        name			: 'returned_fields_group',
        fieldLabel		: 'Fields can either be excluded or included from the resultset',
        labelAlign		: 'top',
        labelStyle      : 'font-weight:bold;',
        columns			: 2,
        anchor			: '100%',
        items			: [
            { boxLabel: 'Inclusive', name: 'rb', inputValue: 'inclusive', checked: true },
            { boxLabel: 'Exclusive', name: 'rb', inputValue: 'exclusive' }
        ]
    },
    {
        xtype           : 'displayfield',
        fieldLabel      : 'Fields to be returned or excluded:',
        anchor          : '100%',
        labelWidth      : 300,
        labelStyle      : 'font-weight:bold;'
    },
    {
        xtype           : 'fieldset',
        name            : 'main_fieldset',
        title           : 'Main Fields',
        collapsible     : true,
        checkboxToggle  : true,
        collapsed       : false,
        items           : [{
            xtype		    : 'checkboxgroup',
            name		    : 'main_fields',
            columns		    : 4,
            vertical	    : true,
            items		    : [
                { boxLabel: 'Slug', 								name: 'rb', inputValue: 'slug', checked: true },
                { boxLabel: 'Plugin Name', 							name: 'rb', inputValue: 'plugin_name', checked: true },
                { boxLabel: 'Server', 								name: 'rb', inputValue: 'server', checked: true },
                { boxLabel: 'Categories', 							name: 'rb', inputValue: 'categories', checked: true },
                { boxLabel: 'Authors', 								name: 'rb', inputValue: 'authors', checked: true },
                { boxLabel: 'Logo', 								name: 'rb', inputValue: 'logo', checked: true },
                { boxLabel: 'Logo Full', 							name: 'rb', inputValue: 'logo_full', checked: true },
                { boxLabel: 'Webpage', 								name: 'rb', inputValue: 'webpage', checked: true },
                { boxLabel: 'Dbo_page', 							name: 'rb', inputValue: 'dbo_page', checked: true },
                { boxLabel: 'Description', 							name: 'rb', inputValue: 'description', checked: true }
            ]
        }]
    },
    {
        xtype           : 'fieldset',
        name            : 'version_fieldset',
        title           : 'Version Fields',
        collapsible     : true,
        checkboxToggle  : true,
        items           : [{
            xtype		    : 'checkboxgroup',
            name		    : 'version_fields',
            columns		    : 4,
            vertical	    : true,
            items		    : [
                { boxLabel: 'Version',	 					name: 'rb', inputValue: 'versions.version', checked: true },
                { boxLabel: 'Filename', 					name: 'rb', inputValue: 'versions.filename', checked: true },
                { boxLabel: 'Link', 						name: 'rb', inputValue: 'versions.link', checked: true },
                { boxLabel: 'Download', 					name: 'rb', inputValue: 'versions.download', checked: true },
                { boxLabel: 'Type',	    					name: 'rb', inputValue: 'versions.type', checked: true },
                { boxLabel: 'Status', 						name: 'rb', inputValue: 'versions.status', checked: true },
                { boxLabel: 'Changelog', 					name: 'rb', inputValue: 'versions.changelog', checked: true },
                { boxLabel: 'Date', 						name: 'rb', inputValue: 'versions.date', checked: true },
                { boxLabel: 'Slug', 						name: 'rb', inputValue: 'versions.slug', checked: true },
                { boxLabel: 'Game Versions', 				name: 'rb', inputValue: 'versions.game_versions', checked: true },
                { boxLabel: 'Soft Dependencies',			name: 'rb', inputValue: 'versions.soft_dependencies', checked: true },
                { boxLabel: 'Hard Dependencies',			name: 'rb', inputValue: 'versions.hard_dependencies', checked: true },
                { boxLabel: 'MD5', 		    				name: 'rb', inputValue: 'versions.md5', checked: true }
            ]
        }]
    },
    {
        xtype           : 'fieldset',
        name            : 'command_fieldset',
        title           : 'Command Fields',
        collapsible     : true,
        checkboxToggle  : true,
        items           : [{
            xtype		    : 'checkboxgroup',
            name		    : 'command_fields',
            columns		    : 4,
            vertical	    : true,
            items		    : [
                { boxLabel: 'Usage', 				name: 'rb', inputValue: 'versions.commands.usage', checked: true },
                { boxLabel: 'Alias', 				name: 'rb', inputValue: 'versions.commands.alias', checked: true },
                { boxLabel: 'Command', 			    name: 'rb', inputValue: 'versions.commands.command', checked: true },
                { boxLabel: 'Permission', 		    name: 'rb', inputValue: 'versions.commands.permission', checked: true },
                { boxLabel: 'Permission Message',   name: 'rb', inputValue: 'versions.commands.permission_message', checked: true }
            ]
        }]
    },
    {
        xtype           : 'fieldset',
        name            : 'permission_fieldset',
        title           : 'Permisssion Fields',
        collapsible     : true,
        checkboxToggle  : true,
        items           : [{
            xtype		    : 'checkboxgroup',
            name		    : 'permission_fields',
            columns		    : 4,
            vertical	    : true,
            items		    : [
                { boxLabel: 'Role', 				name: 'rb', inputValue: 'versions.permissions.role', checked: true },
                { boxLabel: 'Default', 				name: 'rb', inputValue: 'versions.permissions.default', checked: true }
            ]
        }]
    },
    {
        xtype           : 'fieldset',
        name            : 'popularity_fieldset',
        title           : 'Popularity Fields',
        collapsible     : true,
        checkboxToggle  : true,
        items           : [{
            xtype		    : 'checkboxgroup',
            name		    : 'popularity_fields',
            columns		    : 4,
            vertical	    : true,
            items		    : [
                { boxLabel: 'Daily', 				name: 'rb', inputValue: 'popularity.daily', checked: true },
                { boxLabel: 'Weekly', 				name: 'rb', inputValue: 'popularity.weekly', checked: true },
                { boxLabel: 'Monthly', 				name: 'rb', inputValue: 'popularity.monthly', checked: true }
            ]
        }]
    },
/*
    {
    	xtype				: 'combobox',
    	fieldLabel			: 'Category Filter',
    	queryMode			: 'remote',
    	valueField			: 'name',
    	displayField		: 'name',
        editable            : false,
    	store				: 'Category',
    	anchor				: '90%',
        tpl                 : Ext.create('Ext.XTemplate',
            '<tpl for=".">',
                '<div class="x-boundlist-item">{name} ({count})</div>',
            '</tpl>'
        )
    },
*/
    {
        xtype               : 'fieldset',
        name                : 'pagination',
        title               : 'Pagination',
        layout              : {
            type                : 'hbox',
            align               : 'top',
            defaultMargins      : {top: 0, right: 5, bottom: 10, left: 5}
        },
        items               : [{
            xtype				: 'numberfield',
            name				: 'start_size',
            fieldLabel			: 'Starting record to return (Defaults to 0)',
            value				: 0,
            minValue			: 1,
            maxValue			: 9999,
            maxLength			: 4,
            enforceMaxLength	: true,
            width               : 250,
            labelAlign			: 'top'
        },
        {
            xtype				: 'numberfield',
            name				: 'limit_size',
            fieldLabel			: 'Total number of records to return',
            minValue			: 1,
            maxValue			: 9999,
            maxLength			: 4,
            enforceMaxLength	: true,
            width               : 225,
            labelAlign			: 'top'
        }]
    },
    {
    	xtype			: 'fieldset',
    	name			: 'sorting',
    	title			: 'Sorting',
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
    		icon	: '/images/icons/cross.png'
    	},
    	{
    		xtype	: 'button',
    		text	: 'Search',
    		name	: 'searchButton',
    		icon	: '/images/icons/magnifier.png'
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