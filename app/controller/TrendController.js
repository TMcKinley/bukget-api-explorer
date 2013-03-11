Ext.define('Bukget.controller.TrendController', {
    extend	: 'Ext.app.Controller',
    
    stores	: [
        'Trend'
    ],
    models	: [
        'Trend'
	],
    views	: [
	    'TrendInfo'
	],
	
    //refs	: [{
    //	ref		: 'clearBtn',
    //	selector: 'viewport generation_info_form button[name="clearButton"]'
    //}],
	
    init	: function() {
        this.control({
            'viewport trendinfo': {
                afterrender	: this.onTrendInfoAfterRender
            }
        });
    },
    
    onTrendInfoAfterRender		: function(container) {
    	var chart = container.down('chart');
    	var store = chart.getStore();
    	store.load({
    	    scope: this,
    	    callback: function(records, operation, success) {
    	        console.log(records);
    	    }
    	});
    }
});