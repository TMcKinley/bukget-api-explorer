Ext.define("Bukget.view.GenerationInfo.ChangeGridPanel", {
    extend	: 'Ext.grid.Panel',
    alias	: 'widget.generation_change_grid',
    
    columns	: [
	    { text: 'Version',  dataIndex: 'version' },
	    { text: 'Plugin Name', dataIndex: 'plugin', flex: 1 }
	]
});