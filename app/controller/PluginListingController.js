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
    	ref		: 'resetBtn',
    	selector: 'viewport plugin_listing_form button[name="resetButton"]'
    },
    {
    	ref		: 'searchBtn',
    	selector: 'viewport plugin_listing_form button[name="searchButton"]'
    },
    {
        ref     : 'pageFieldSet',
        selector: 'viewport plugin_listing_form fieldset[name="pagination"]'
    },
    {
        ref     : 'sortFieldSet',
        selector: 'viewport plugin_listing_form fieldset[name="sorting"]'
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
            'viewport plugin_listing_form button[name="resetButton"]': {
                click	        : this.onResetButtonClick
            },
            'viewport plugin_listing_form button[name="searchButton"]': {
                click	        : this.onSearchButtonClick
            },
            'viewport plugin_listing_form fieldset[name="sorting"] sortcontainer': {
                addcontainer    : this.onSortContainerAddClick,
                deletecontainer : this.onSortContainerDeleteClick
            }
        });
    },
    
    onResetButtonClick	: function(button, event) {
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
        var fields = [];
    	var form = this.getPluginListingForm();
        var sortFieldSet = this.getSortFieldSet();
        var pageFieldSet = this.getPageFieldSet();

        /**
         * Inclusive/Exclusive Toggle
         * @type {*}
         */
    	var radiogroup = form.down('radiogroup[name="returned_fields_group"]');
    	var radio = radiogroup.down('radio[checked=true]');
    	if (radio && radio.inputValue == 'exclusive') {
    		modifier = '-';
    	}

        /**
         * Fields to Include/Exclude
         * @type {*}
         */
        var checkgroup = form.down('checkboxgroup[name="returned_fields"]');
        var checkValue = checkgroup.getValue();
        for (dbValue in checkValue) {
            Ext.Array.push(fields, dbValue);
        }
        modifier += fields.join(',');
        if (!Ext.isEmpty(modifier)) {
            newUrl = Ext.String.urlAppend(newUrl, 'fields=' + modifier);
        }


        /**
         * Error Checking
         */
    	if (!radio && fields.length > 0) {
    		Ext.Msg.alert('Error', 'You must select either inclusive or exclusive when picking specific fields.');
    		return;
    	}
    	if (radio && fields.length <= 0) {
    		Ext.Msg.alert('Error', 'You must select specific fields to include or exclude.');
    		return;
    	}


        /**
         * Pagination Fields
         * @type {*}
         */
    	var startfield = pageFieldSet.down('numberfield[name="start_size"]');
        if (!Ext.isEmpty(startfield.getValue())) {
            newUrl = Ext.String.urlAppend(newUrl, 'start=' + startfield.getValue());
        }

        var limitfield = pageFieldSet.down('numberfield[name="limit_size"]');
        if (!Ext.isEmpty(limitfield.getValue())) {
            newUrl = Ext.String.urlAppend(newUrl, 'size=' + limitfield.getValue());
        }


        /**
         * Sorting Fields
         * @type {*}
         */
        var sortFields = [];
        var sortContainers = sortFieldSet.query('sortcontainer');
        for (var i = 0; i < sortContainers.length; i++) {
            var sortContainer = sortContainers[i];
            var fieldCombo = sortContainer.down('combobox[name="fieldcombobox"]');
            var fieldValue = fieldCombo.getValue();
            if (Ext.isEmpty(fieldValue)) {
                continue;
            }

            var sortModifier = '';
            var sortCombo = sortContainer.down('combobox[name="sortcombobox"]');
            var sortValue = sortCombo.getValue();
            if (!Ext.isEmpty(sortValue) && sortValue === 'descending') {
                sortModifier = '-';
            }

            Ext.Array.push(sortFields, sortModifier + fieldValue);
        }
        if (sortFields.length > 0) {
            newUrl = Ext.String.urlAppend(newUrl, 'sort=' + sortFields.join(','));
        }

        /**
         * Generated URL Display
         * @type {*}
         */
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

    onSortContainerAddClick : function(sortContainer) {
        var sortFS = this.getSortFieldSet();
        sortFS.add({xtype: 'sortcontainer'});
    },

    onSortContainerDeleteClick : function(sortContainer) {
        var sortFS = this.getSortFieldSet();
        sortFS.remove(sortContainer);
    }
    
});