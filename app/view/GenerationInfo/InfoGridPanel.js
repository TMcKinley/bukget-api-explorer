Ext.define("Bukget.view.GenerationInfo.InfoGridPanel", {
    extend	: 'Ext.grid.Panel',
    alias	: 'widget.generation_info_grid',
    requires: [
	    'Bukget.store.GenerationInfo'
	],
    
	store	: 'GenerationInfo',
    columns	: [
	    { text: 'Parser',  dataIndex: 'parser' },
	    { text: 'Type',  dataIndex: 'type' },
	    { text: 'Duration',  dataIndex: 'duration' },
	    {
	    	text		: 'Timestamp',
	    	dataIndex	: 'timestamp',
	    	flex		: 1
	    }
	]
});