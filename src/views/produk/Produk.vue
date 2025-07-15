<template>
    <div class="relative min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="p-5">
            <navbar-produk />
            <table-produk />
            <pagination />
        </div>

    </div>

</template>

<script>
import NavbarProduk from '../../components/Navbars/NavbarProduk.vue';
import TableProduk from '../../components/Produk/TableProduk.vue';
import Pagination from '../../components/Pagination/Pagination.vue';

export default {
    components: {
        NavbarProduk,
        TableProduk,
        Pagination
    },
};

</script>