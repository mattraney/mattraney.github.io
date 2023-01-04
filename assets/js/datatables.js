window.addEventListener('DOMContentLoaded', event => {

    const datatablesSimple = document.getElementById('datatablesOrders');
    if (datatablesOrders) {
        new simpleDatatables.DataTable(datatablesOrders);
    }
});
