Ext.define('Bukget.controller.GenerationController', {
    extend	: 'Ext.app.Controller',
    
    stores	: [
        'Category',
        'GenerationInfo'
    ],
    views	: [
	    'GenerationInfo.Layout',
	    'GenerationInfo.InfoGridPanel',
	    'GenerationInfo.ChangeGridPanel',
	    'GenerationInfo.SearchPanel'
	],
	
    refs	: [{
    	ref		: 'clearBtn',
    	selector: 'viewport generation_info_form button[name="clearButton"]'
    },
    {
    	ref		: 'searchBtn',
    	selector: 'viewport generation_info_form button[name="searchButton"]'
    },
    {
    	ref		: 'generationForm',
    	selector: 'viewport generation_info_form'
    },
    {
    	ref		: 'generationInfoGrid',
    	selector: 'viewport generation_info_grid'
    },
    {
    	ref		: 'generationChangeGrid',
    	selector: 'viewport generation_change_grid'
    }],
	
    init	: function() {
        this.control({
            'viewport generation_info_form button[name="clearButton"]': {
                click	: this.onClearButtonClick
            },
            'viewport generation_info_form button[name="searchButton"]': {
                click	: this.onSearchButtonClick
            },
            'viewport generation_info_grid': {
            	select	: this.onGridRowSelect
            }
        });
    },
    
    onClearButtonClick	: function(button, event) {
    	var infoGrid = this.getGenerationInfoGrid();
    	infoGrid.getStore().removeAll();
    	
    	var changeGrid = this.getGenerationChangeGrid();
    	changeGrid.getStore().removeAll();
    	
    	var form = this.getGenerationForm();
    	var numberfield = form.down('numberfield[name="generation_size"]');
    	numberfield.reset();
    	
    	var urlfield = form.down('component[name="generated_url_value"]');
    	urlfield.update({});
    },
    
    onSearchButtonClick	: function(button, event) {
    	var form = this.getGenerationForm();
    	var numberfield = form.down('numberfield[name="generation_size"]');
    	var newUrl = 'http://api.bukget.org/3/geninfo?size=' + numberfield.getValue();
    	
    	var urlfield = form.down('component[name="generated_url_value"]');
    	urlfield.update({
    		target: '#',
    		text: newUrl,
    		href: newUrl
    	});
    	
    	var grid = this.getGenerationInfoGrid();
    	var store = grid.getStore();
    	var proxy = store.getProxy();
    	proxy.url = newUrl;
    	store.load();
    },
    
    onGridRowSelect		: function(selModel, record, index, event) {
    	var extendedRecords = record.changesStore.getRange();
    	
    	var changeGrid = this.getGenerationChangeGrid();
    	changeGrid.getStore().loadRecords(extendedRecords);
    }
});