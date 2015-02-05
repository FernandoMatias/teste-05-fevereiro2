Ext.define('realPneus.store.clientesStore',{
extend: 'Ext.data.Store',
requires: [
    'Ext.data.proxy.Sql'
],
config: {
    autoLoad:false,
    model:'realPneus.model.clientesModel',
    storeId:'clientesStore',
    proxy:{
        type: 'sql',
        database: 'realPneus',
        table: 'clientes'
    }
}
});