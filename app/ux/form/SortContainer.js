Ext.define('Bukget.ux.form.SortContainer', {
	extend	: 'Ext.form.FieldContainer',
    alias	: 'widget.sortcontainer',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Bukget.store.FieldList',
        'Bukget.store.SortDirection'
    ],
	
	config			: {
		//height			: 40,
		comboWidth		: 100,
		comboStore		: '',
		comboValue		: '',
		textWidth		: 100,
		textMask		: null
	},

	addButton       : null,

	deleteButton	: null,

	sortCombo		: null,

	fieldCombo	    : null,

	
    constructor		: function(config) {
        this.initConfig(config);

        return this.callParent(arguments);
    },
    
    
    initComponent	: function() {
        var me = this;
        me.addEvents(
            'addcontainer',
            'deletecontainer'
        );
        me.listeners = (me.listeners || {});

        me.addButton = {
            xtype       : 'button',
            name		: 'addButton',
            icon		: 'images/icons/add.png',
            componentCls: 'x-btn-default-small',
            style		: {
                borderColor	: '#81A4D0'
            },
            listeners   : {
                click       : {
                    fn          : me.onBeforeContainerAdd,
                    scope       : me
                }
            }
        };

        me.fieldCombo = {
            xtype           : 'combobox',
            name		    : 'fieldcombobox',
            width		    : 300,
            value		    : '',
            queryMode		: 'local',
            valueField		: 'db_name',
            displayField	: 'display_name',
            store           : 'FieldList'
        };

        me.sortCombo = {
            xtype           : 'combobox',
            name		    : 'sortcombobox',
            width		    : 100,
            value		    : 'ascending',
            editable        : false,
            queryMode		: 'local',
            valueField		: 'db_name',
            displayField	: 'display_name',
            store           : 'SortDirection'
        };

        me.deleteButton = {
            xtype       : 'button',
            name		: 'deleteButton',
            icon		: 'images/icons/delete.png',
            componentCls: 'x-btn-default-small',
            style		: {
                borderColor	: '#81A4D0'
            },
            listeners   : {
                click       : {
                    fn          : me.onBeforeContainerRemove,
                    scope       : me
                }
            }
        };


        Ext.apply(me, {
        	layout 		: {
        		type			: 'hbox',
    			align			: 'middle',
    			pack			: 'start',
    			defaultMargins	: {
    				top		: 0,
    				right	: 5,
    				bottom	: 0,
    				left	: 5
    	    	}
    		},
            items 		: [
                me.addButton,
                me.fieldCombo,
                me.sortCombo,
                me.deleteButton
    		]
        });
        
        me.callParent(arguments);
    },

    onBeforeContainerAdd        : function(sortContainer, targetComponent) {
        this.fireEvent('addcontainer', this);
    },
    
    onBeforeContainerRemove		: function(sortContainer, targetComponent) {
		this.fireEvent('deletecontainer', this);
    },

    getSearchFragment           : function() {
        var modifier = (this.getSortCombo().getValue() == 'descending') ? '-' : '';
        var query = this.getFieldCombo().getValue();
        if (Ext.isEmpty(query)) {
            return '';
        }

        return modifier + query;
    },

    getFieldCombo               : function() {
        return this.down('combobox[name="fieldcombobox"]');
    },

    getSortCombo                : function() {
        return this.down('combobox[name="sortcombobox"]');
    }
});