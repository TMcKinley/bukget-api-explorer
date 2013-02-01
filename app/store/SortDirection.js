Ext.define('Bukget.store.SortDirection', {
    extend	: 'Ext.data.Store',
    model	: 'Bukget.model.FieldList',
    requires: [
        'Bukget.model.FieldList'
    ],

    data	: [{
        db_name: 'ascending',
        display_name: 'Ascending',
        help_text: ''
    },
    {
        db_name: 'descending',
        display_name: 'Descending',
        help_text: ''
    }]
});