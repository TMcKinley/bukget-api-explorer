Ext.define('Bukget.controller.PluginListingController', {
    extend	: 'Ext.app.Controller',
    
    stores	: [
        'FieldList',
        'SortDirection'
    ],
    views	: [
	    'plugin.listing.Layout',
	    'plugin.listing.InfoGridPanel',
	    'plugin.listing.SearchPanel'
	],
	
    refs	: [{
    	ref		: 'clearBtn',
    	selector: 'viewport plugin_listing_form button[name="clearButton"]'
    },
    {
    	ref		: 'searchBtn',
    	selector: 'viewport plugin_listing_form button[name="searchButton"]'
    },
    {
    	ref		: 'pluginListingForm',
    	selector: 'viewport plugin_listing_form'
    },
    {
    	ref		: 'pluginListingGrid',
    	selector: 'viewport generation_info_grid'
    }],
	
    init	: function() {
        this.control({
            'viewport plugin_listing_form button[name="clearButton"]': {
                click	        : this.onClearButtonClick
            },
            'viewport plugin_listing_form button[name="searchButton"]': {
                click	        : this.onSearchButtonClick
            },
            'viewport plugin_listing_form sortcontainer': {
                addcontainer    : this.onAddSortContainerClick,
                deletecontainer : this.onDeleteSortContainerClick
            }
        });
    },
    
    onClearButtonClick	: function(button, event) {
    	var infoGrid = this.getPluginListingGrid();
    	infoGrid.getStore().removeAll();
    	
    	/**
    	 * Reset Exclusion/Inclusion fields.
    	 */
    	var form = this.getPluginListingForm();
    	var radiogroup = form.down('radiogroup[name="returned_fields_group"]');
    	radiogroup.reset();
    	
    	var multiselect = form.down('multiselect[name="returned_fields"]');
    	multiselect.reset();
    	
    	
    	/**
    	 * Reset Pagination fields.
    	 */
    	var pagefieldset = form.down('fieldset[name="pagination"]');
    	pagefieldset.collapse();
    	
    	var startfield = pagefieldset.down('numberfield[name="start_size"]');
    	startfield.reset();
    	
    	var limitfield = pagefieldset.down('numberfield[name="limit_size"]');
    	limitfield.reset();
    	
    	
    	/**
    	 * Reset Sorting fields.
    	 */
    	var sortfieldset = form.down('fieldset[name="sorting"]');
    	sortfieldset.collapse();
    	
    	var chkPlugin = sortfieldset.down('checkbox[name="enable_plugin_sort"]');
    	chkPlugin.reset();
    	
    	var cboPlugin = sortfieldset.down('combobox[name="plugin_sort_order"]');
    	cboPlugin.reset();
    	
    	var chkSlug = sortfieldset.down('checkbox[name="enable_slug_sort"]');
    	chkSlug.reset();
    	
    	var cboSlug = sortfieldset.down('combobox[name="slug_sort_order"]');
    	cboSlug.reset();
    	
    	var chkDescription = sortfieldset.down('checkbox[name="enable_description_sort"]');
    	chkDescription.reset();
    	
    	var cboDescription = sortfieldset.down('combobox[name="description_sort_order"]');
    	cboDescription.reset();
    	

    	/**
    	 * Reset Generated URL Value.
    	 */
    	var urlfield = form.down('component[name="generated_url_value"]');
    	urlfield.update({});
    },
    
    onSearchButtonClick	: function(button, event) {
    	var newUrl = 'http://api.bukget.org/3/plugins/';
    	var modifier = '';
    	var form = this.getPluginListingForm();
    	var radiogroup = form.down('radiogroup[name="returned_fields_group"]');
    	var radio = radiogroup.down('radio[checked=true]');
    	if (radio && radio.inputValue == 'exclusive') {
    		modifier = '-';
    	}

        var fields = [];
    	var multiselect = form.down('checkboxgroup[name="returned_fields"]');
    	var tempFields = multiselect.getValue().rb;
    	if (!radio && tempFields.length > 0) {
    		Ext.Msg.alert('Error', 'You must select either inclusive or exclusive when picking specific fields.');
    		return;
    	}
    	if (radio && tempFields.length <= 0) {
    		Ext.Msg.alert('Error', 'You must select specific fields to include or exclude.');
    		return;
    	}
        if (!Ext.isArray(tempFields)) {
            fields.push(tempFields);
        }
        else {
            fields = tempFields;
        }
    	
    	modifier += fields.join(',');
    	if (!Ext.isEmpty(modifier)) {
    		newUrl += '?fields=' + modifier;
    	}
    	
    	var pagefieldset = form.down('fieldset[name="pagination"]');
    	if (!pagefieldset.collapsed) {
    		var startfield = pagefieldset.down('numberfield[name="start_size"]');
    	}

        var sortString = "&sort=";
        var sortFieldSet = form.down('fieldset[name="sorting"]');
        if (!sortFieldSet.collapsed) {
            var chk = sortFieldSet.down('checkboxfield');
            if (chk.getValue()) {
                var field = sortFieldSet.down('combobox[name="plugin_field"]');
                sortString += field.getValue();
            }
        }

        newUrl += sortString;


    	
    	var urlfield = form.down('component[name="generated_url_value"]');
    	urlfield.update({
    		target: '#',
    		text: newUrl,
    		href: newUrl
    	});
    	
    	/*    	
    	var grid = this.getGenerationInfoGrid();
    	var store = grid.getStore();
    	var proxy = store.getProxy();
    	proxy.url = newUrl;
    	store.load();
    	*/
    },

    onAddSortContainerClick         : function(sortContainer, eventOptions) {
        var form = this.getPluginListingForm();
        var sortFS = form.down('fieldset[name="sorting"]');
        sortFS.add({xtype: 'sortcontainer'});
    },

    onDeleteSortContainerClick         : function(sortContainer, eventOptions) {
        var form = this.getPluginListingForm();
        var sortFS = form.down('fieldset[name="sorting"]');
        sortFS.remove(sortContainer);
    }
    
});