Ext.define('Bukget.store.FieldList', {
    extend	: 'Ext.data.Store',
    model	: 'Bukget.model.FieldList',
    requires: [
	    'Bukget.model.FieldList'
	],
    
    data	: [{
    	db_name: 'slug',
    	display_name: 'Slug',
    	help_text: ''
    },
    {
    	db_name: 'plugin_name',
    	display_name: 'Plugin Name',
    	help_text: ''
    },
    {
    	db_name: 'server',
    	display_name: 'Server',
    	help_text: ''
    },
    {
    	db_name: 'categories',
    	display_name: 'Categories',
    	help_text: ''
    },
    {
    	db_name: 'authors',
    	display_name: 'Authors',
    	help_text: ''
    },
    {
    	db_name: 'logo',
    	display_name: 'Logo',
    	help_text: ''
    },
    {
    	db_name: 'logo_full',
    	display_name: 'Full Logo',
    	help_text: ''
    },
    {
    	db_name: 'webpage',
    	display_name: 'Webpage',
    	help_text: ''
    },
    {
    	db_name: 'dbo_page',
    	display_name: 'Dbo Page',
    	help_text: ''
    },
    {
    	db_name: 'description',
    	display_name: 'Description',
    	help_text: ''
    },
    {
    	db_name: 'versions',
    	display_name: 'Versions',
    	help_text: ''
    },
    {
    	db_name: 'versions.version',
    	display_name: 'Versions.version',
    	help_text: ''
    },
    {
    	db_name: 'versions.md5',
    	display_name: 'Versions.md5',
    	help_text: ''
    },
    {
    	db_name: 'versions.filename',
    	display_name: 'Versions.filename',
    	help_text: ''
    },
    {
    	db_name: 'versions.link',
    	display_name: 'Versions.link',
    	help_text: ''
    },
    {
    	db_name: 'versions.download',
    	display_name: 'Versions.download',
    	help_text: ''
    },
    {
    	db_name: 'versions.type',
    	display_name: 'Versions.type',
    	help_text: ''
    },
    {
    	db_name: 'versions.status',
    	display_name: 'Versions.status',
    	help_text: ''
    },
    {
    	db_name: 'versions.changelog',
    	display_name: 'Versions.changelog',
    	help_text: ''
    },
    {
    	db_name: 'versions.game_versions',
    	display_name: 'Versions.game_versions',
    	help_text: ''
    },
    {
    	db_name: 'versions.date',
    	display_name: 'Versions.date',
    	help_text: ''
    },
    {
    	db_name: 'versions.slug',
    	display_name: 'Versions.slug',
    	help_text: ''
    },
    {
    	db_name: 'versions.hard_dependencies',
    	display_name: 'Versions.hard_dependencies',
    	help_text: ''
    },
    {
    	db_name: 'versions.soft_dependencies',
    	display_name: 'Versions.soft_dependencies',
    	help_text: ''
    },
    {
    	db_name: 'versions.permissions',
    	display_name: 'Versions.Permissions',
    	help_text: ''
    },
    {
    	db_name: 'versions.permissions.role',
    	display_name: 'Versions.Permissions.role',
    	help_text: ''
    },
    {
    	db_name: 'versions.permissions.default',
    	display_name: 'Versions.Permissions.default',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands',
    	display_name: 'Versions.Commands',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands.usage',
    	display_name: 'Versions.Commands.usage',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands.alias',
    	display_name: 'Versions.Commands.alias',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands.command',
    	display_name: 'Versions.Commands.command',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands.permission',
    	display_name: 'Versions.Commands.permission',
    	help_text: ''
    },
    {
    	db_name: 'versions.commands.permission_message',
    	display_name: 'Versions.Commands.permission_message',
    	help_text: ''
    }]
});