Ext.define('realPneus.model.clientesModel', {
    extend: 'Ext.data.Model',
    requires: [
	'Ext.data.Field'
    ],
    config: {
	fields: [
	    {name: 'nome_cliente'}
	]
    }
});