Ext.define('realPneus.controller.main', {
    extend: 'Ext.app.Controller',
    config: {
	routes: {
	    '': 'showMenuIniciar'
	},
	refs: {
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    clientesList: {
		xtype: 'clientesList',
		selector: 'clientesList',
		autoCreate: true
	    },
	    testeBtn: 'button[action=testesql]',
	    testeBtn2: 'button[action=testesql2]',
	    showListaClientesBtn: 'button[action=listaclientes]'
	},
	control: {
	    testeBtn: {
		tap: 'teste'
	    },
	    testeBtn2: {
		tap: 'teste2'
	    },
	    showListaClientesBtn: {
		tap: 'showListaClientes'
	    }
	}
    },
    showMenuIniciar: function () {
	var store = Ext.getStore('clientesStore');
	store.load();
	Ext.Viewport.setActiveItem(this.getMenuIniciar());
    },
    showListaClientes: function(){
	var store = Ext.getStore('clientesStore');
	store.load();
	Ext.Viewport.setActiveItem(this.getClientesList());
    },
    teste: function () {

   },
    teste2: function(){
	var store = Ext.getStore('clientesStore');
	store.load();
	//store.add('nome_cliente', 'nome_cliente');
	store.add(Ext.create('realPneus.model.clientesModel', {nome_cliente:'teste1010210210'}));
	store.sync();
	
	console.log(store.data.get(1));
    }
});