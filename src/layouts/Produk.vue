<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-blueGray-100">
      <admin-navbar />
      <new-header-stats />
      <div class="px-4 md:px-10 mx-auto w-full -m-24">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>

import AdminNavbar from "@/components/Navbars/AdminNavbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import NewHeaderStats from "@/components/Headers/NewHeaderStats.vue";


export default {
  name: "produk-layout",
  components: {
    AdminNavbar,
    Sidebar,
    NewHeaderStats
  },
};
</script>
