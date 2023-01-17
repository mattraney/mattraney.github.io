window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple1 = document.getElementById('datatablesOrders');
    if (datatablesSimple1) {
        new simpleDatatables.DataTable(datatablesOrders);
    }

    const datatablesSimple2 = document.getElementById('datatablesWH');
    if (datatablesSimple2) {
        new simpleDatatables.DataTable(datatablesWH);
    }    

    const datatablesSimple3 = document.getElementById('datatablesPriceMatch');
    if (datatablesSimple3) {
        new simpleDatatables.DataTable(datatablesPriceMatch);
    }

});
