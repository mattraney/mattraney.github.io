window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple1 = document.getElementById('datatablesOrders');
    if (datatablesSimple1) {
        new simpleDatatables.DataTable(datatablesOrders, {
            labels: {
                placeholder: "Search",
                perPage: "{select} per page",
                noRows: "No orders to display",
                info: "Showing {start} to {end} of {rows} orders",
                noResults: "No orders found",
            }
        });
    }

    const datatablesSimple2 = document.getElementById('datatablesWH');
    if (datatablesSimple2) {
        new simpleDatatables.DataTable(datatablesWH, {
            labels: {
                placeholder: "Search",
                perPage: "{select} per page",
                noRows: "No warehouses to display",
                info: "Showing {start} to {end} of {rows} warehouses",
                noResults: "No warehouses found",
            }
        });
    }

    const datatablesSimple3 = document.getElementById('datatablesPriceMatch');
    if (datatablesSimple3) {
        new simpleDatatables.DataTable(datatablesPriceMatch, {
            sortable: false,
            labels: {
                placeholder: "Search",
                perPage: "{select} per page",
                noRows: "No opportunities to display",
                info: "Showing {start} to {end} of {rows} opportunities",
                noResults: "No opportunities found",
            }
        });
    }

});
