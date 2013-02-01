Ext.define("Bukget.view.GenerationInfo.Layout", {
    extend	: 'Ext.container.Container',
    alias	: 'widget.generation_info_layout',
    requires: [
        'Ext.layout.container.Border'
    ],
    
	title		: 'Generation Information',
	layout		: {
		type			: 'border',
		regionWeights	: {
			west	: 20,
			north	: 10,
			south	: -10,
			east	: -20
		}
	},
    items		: [{
    	xtype		: 'generation_info_form',
    	region		: 'west',
    	flex		: 1
    },
    {
    	xtype		: 'generation_change_grid',
    	region		: 'center',
    	flex		: 4
    },
    {
    	xtype		: 'generation_info_grid',
    	region		: 'north',
    	flex		: 3
    }]
});