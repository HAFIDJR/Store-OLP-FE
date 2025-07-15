<template>
    <div>
        <div class="flex flex-row gap-2 items-center">
            <!-- Input dengan ikon -->
            <div class="relative w-full md:w-auto flex-1 mr-2">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-blueGray-400 ml-2 mt-1">
                    <i class="fas fa-search"></i>
                </span>
                <input type="text" placeholder="Nama produk"
                    class="w-full pl-10 pr-4 py-2 border border-blueGray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-blueGray-300 text-sm" />
            </div>

            <!-- Container tombol dengan gap -->
            <div class="flex gap-2">
                <!-- Tombol Tambah Produk -->
                <button
                    class="bg-emerald-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button">
                    <i class="fas fa-heart"></i> Tambah Produk
                </button>

                <!-- Tombol Kategori Produk -->

            </div>

            <!-- Filter Produk -->
            <div class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                href="#pablo">
                <i class="fas fa-cog text-lg leading-lg text-emerald-600 opacity-75 cursor-pointer"></i>
            </div>
        </div>
    </div>
</template>
