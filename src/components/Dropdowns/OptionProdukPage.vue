<template>
    <div ref="dropdownContainer" class="relative">
        <div class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 cursor-pointer"
            @click="toggleDropdown" ref="btnDropdownRef">
            <i class="fas fa-cog text-lg text-emerald-600"></i>
        </div>

        <div ref="popoverDropdownRef" :class="{
            hidden: !dropdownPopoverShow,
            block: dropdownPopoverShow,
        }" class="absolute left-0 bg-white z-50 py-2 list-none rounded shadow-lg min-w-48 text-base ">
            <a href="javascript:void(0);"
                class="flex items-center gap-2 text-base p-3 font-semibold w-full whitespace-nowrap hover:bg-green-100 text-gray-700">
                <i class="fas fa-plus text-emerald-500 mr-3"></i>
                <section class="ml-1">Kategori Produk</section>

            </a>
            <a href="javascript:void(0);"
                class="flex items-center gap-2 text-base p-3 font-semibold w-full whitespace-nowrap hover:bg-green-100 text-gray-700">
                <i class="fas fa-print text-emerald-500 mr-3"></i>
                <section class="ml-1"> Cetak Resi</section>
            </a>
            <a href="javascript:void(0);"
                class="flex items-center gap-2 text-base p-3 font-semibold w-full whitespace-nowrap hover:bg-green-100 text-gray-700">
                <i class="fas fa-file-upload text-emerald-500 mr-3"></i>
                <section class="ml-1"> Upload Data Excel</section>

            </a>
        </div>
    </div>
</template>

<script>
import { createPopper } from "@popperjs/core";

export default {
    data() {
        return {
            dropdownPopoverShow: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownPopoverShow = !this.dropdownPopoverShow;
            if (this.dropdownPopoverShow) {
                createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
                    placement: "bottom-start",
                });
                document.addEventListener("click", this.handleClickOutside);
            } else {
                document.removeEventListener("click", this.handleClickOutside);
            }
        },
        handleClickOutside(event) {
            if (
                this.$refs.dropdownContainer &&
                !this.$refs.dropdownContainer.contains(event.target)
            ) {
                this.dropdownPopoverShow = false;
                document.removeEventListener("click", this.handleClickOutside);
            }
        },
    },
    beforeDestroy() {
        document.removeEventListener("click", this.handleClickOutside);
    },
};
</script>
