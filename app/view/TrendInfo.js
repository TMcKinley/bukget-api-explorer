Ext.define('Bukget.view.TrendInfo', {
    extend		: 'Ext.container.Container',
    alias		: 'widget.trendinfo',
    requires	: [
        'Ext.container.Container',
        'Ext.chart.Chart',
        'Ext.chart.axis.Time',
        'Ext.chart.axis.Numeric',
        'Ext.chart.series.Line'
    ],

	title		: 'Trending',
	layout		: {
		type		: 'vbox',
		align		: 'stretch'
	},
	items		: [{
		xtype		: 'chart',
		flex		: 1,
		store		: 'Trend',
		legend		: {
			position	: 'top'
		},
		axes		: [{
			title		: 'API Versions',
			type		: 'Numeric',
			position	: 'left',
			fields		: ['api1', 'api2', 'api3'],
	        grid		: {
	            odd			: {
	                opacity			: 1,
	                fill			: '#DDD',
	                stroke			: '#BBB',
	                'stroke-width'	: 1
	            }
	        }
		},
		{
			title		: 'Date Range',
			type		: 'Time',
			position	: 'bottom',
			fields		: ['timestamp'],
			dateFormat	: 'M d',
			grid		: true
		}],
	    series		: [{
	    	type		: 'line',
	    	title		: 'API 1 (Obsolete)',
	    	axis		: 'left',
	    	xField		: 'timestamp',
	    	yField		: ['api1'],
	    	highlight	: {
                size		: 10,
                radius		: 7
            },
	    	label		: {
	    		display		: 'rotate',
	    		field		: 'api1'
	    	}
	    },
	    {
	    	type		: 'line',
	    	title		: 'API 2 (Legacy)',
	    	axis		: 'left',
	    	xField		: 'timestamp',
	    	yField		: ['api2'],
	    	highlight	: {
                size		: 10,
                radius		: 7
            },
	    	label		: {
	    		display		: 'rotate',
	    		field		: 'api2'
	    	}
	    },
	    {
	    	type		: 'line',
	    	title		: 'API 3 (Current)',
	    	axis		: 'left',
	    	xField		: 'timestamp',
	    	yField		: ['api3'],
	    	highlight	: {
                size		: 10,
                radius		: 7
            },
	    	label		: {
	    		display		: 'rotate',
	    		field		: 'api3'
	    	}
	    }]
	},
	{
		xtype	: 'chart',
        flex	: 1,
        store: 'Trend',
        legend: {
          position: 'top'  
        },
        axes: [{
			title		: 'API Versions',
			type		: 'Numeric',
			position	: 'left',
			fields		: ['api1', 'api2', 'api3'],
	        grid		: {
	            odd			: {
	                opacity			: 1,
	                fill			: '#DDD',
	                stroke			: '#BBB',
	                'stroke-width'	: 1
	            }
	        }
        },
        {
			title		: 'Date Range',
			type		: 'Time',
			position	: 'bottom',
			fields		: ['timestamp'],
			dateFormat	: 'M d',
			grid		: true
        }],
        series: [{
            type: 'column',
            axis: 'left',
            xField: 'timestamp',
            yField: ['api1', 'api2', 'api3']
        }]
	}]
/*
	{
		xtype	: 'chart',
        flex	: 1,
        store: 'Trend',
        legend: {
          position: 'top'  
        },
        axes: [{
			title		: 'API Versions',
			type		: 'Numeric',
			position	: 'bottom',
			fields		: ['api1', 'api2', 'api3'],
	        grid		: {
	            odd			: {
	                opacity			: 1,
	                fill			: '#DDD',
	                stroke			: '#BBB',
	                'stroke-width'	: 1
	            }
	        }
        },
        {
			title		: 'Date Range',
			type		: 'Time',
			position	: 'left',
			fields		: ['timestamp'],
			dateFormat	: 'M d',
			grid		: true
        }],
        series: [{
            type: 'bar',
            axis: 'bottom',
            xField: 'timestamp',
            yField: ['api1', 'api2', 'api3']
        }]
	}]
*/
});