ej.grids.Grid.Inject(ej.grids.Filter);
var filter1=false;
var grid = new ej.grids.Grid({
    dataSource: data,
    allowFiltering: true,
    filterSettings: {type: 'CheckBox'},
    columns: [
        { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', width: 250, textAlign: 'Right' },
        { field: 'CustomerID', headerText: 'Customer Name', width: 250 },
        { field: 'Freight', width: 250, format: 'C2', textAlign: 'Right' },
        { field: 'ShipCountry', headerText: 'Ship Country', width: 250 },
    ],
    actionBegin: function (args) {
        if (args.requestType === 'filtering') {
            // args.cancel = true;
            args.cancel = filter1;
            filter1 = true;
        }
    }
});
grid.appendTo('#Grid');