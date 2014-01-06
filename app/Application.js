Ext.define('Alert.Application', {
    name: 'Alert',

    requires: ['Ext.ux.Alert'],

    extend: 'Ext.app.Application',

    launch: function() {
        Ext.ux.Alert.show('Notification', 'Message Notification!', 'notification');
        Ext.ux.Alert.show('Information', 'Message Information!', 'information');
        Ext.ux.Alert.show('Success', 'Message Success!', 'success');
        Ext.ux.Alert.show('Warning', 'Message Warning!', 'warning');
        Ext.ux.Alert.show('Error', 'Message Error!', 'error');
    }
});
