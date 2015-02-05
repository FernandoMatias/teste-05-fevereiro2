Ext.define('realPneus.view.menuIniciar', {
    extend: 'Ext.Panel',
     requires: [
	'Ext.Toolbar' 
     ],
    alias: 'widget.menuIniciar',
    config: {
	items: [
	    {
		docked: 'top',
		xtype: 'toolbar',
		ui: 'light',
		title: 'Menu Iniciar'
	    },
	    {
		xtype: 'button',
		text: 'teste',
		height: 75,
		action: 'testesql'
	    },
	    {
		xtype: 'button',
		text: 'teste2',
		height: 75,
		action: 'testesql2'
	    },
	    {
		xtype: 'button',
		text: 'Lista de Clientes',
		height: 75,
		action: 'listaclientes'
	    }
	]
    }
});