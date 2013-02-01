Ext.define("Bukget.view.plugin.listing.SortContainer", {
	extend	: 'Ext.container.Container',
    alias	: 'widget.plugin_listing_sort_container',
    requires: [
        'Ext.container.Container'
    ],
   
    layout			: 'hbox',
    
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
        	items	: [{
        		xtype			: 'checkbox',
        		name			: 'enable_sort',
        		flex			: 1
        	},
        	{
        		xtype			: 'combobox',
        		
        		flex			: 3
        	}]
        });
        
    }
});