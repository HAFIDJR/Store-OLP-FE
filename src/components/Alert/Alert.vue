<template>
    <div v-if="alertOpen" :class="[`relative z-50 text-white px-6 py-4 border-0 rounded mb-4`, alertColor]">
        <span class="text-xl inline-block mr-5 align-middle">
            <i class="fas fa-bell"></i>
        </span>
        <span class="inline-block align-middle mr-8">
            <b class="capitalize">{{ alertType }}</b>
            {{ alertMessage }}
        </span>
        <button
            class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-2 mr-4 outline-none focus:outline-none"
            @click="closeAlert">
            <span>×</span>
        </button>
    </div>
</template>


<script>
export default {
    name: "red-alert",
    data() {
        return {
            alertOpen: false,
            alertMessage: "",
            alertType: "Alert",
            alertColor: "bg-red-500"
        }
    },
    methods: {
        closeAlert: function () {
            this.alertOpen = false;
        },
        showAlert(message, type = "Error") {
            this.alertMessage = message;
            this.alertType = type;
            this.alertColor =
                type === "Success"
                    ? "bg-green-500"
                    : type === "Warning"
                        ? "bg-yellow-500"
                        : "bg-red-500";
            this.alertOpen = true
        }
    }

}
</script>