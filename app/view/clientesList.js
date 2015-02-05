Ext.define('realPneus.view.clientesList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.clientesList',
    config: {
	store: 'clientesStore',
	itemTpl: 'Cliente: {nome_cliente}',
	onItemDisclosure: true,
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		//ui: 'light',
		title: 'Lista de Coletas'
	    }
	]
    }
});