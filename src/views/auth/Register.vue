<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <alert ref="alert" />
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button">
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form @submit.prevent="register">
              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Full Name
                </label>
                <input type="text" v-model="form.fullName"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Full Name" />
                <p v-if="form.fullName && form.fullName.length < 3" class="text-red-500 text-sm mt-1">
                  Nama minimal 3 huruf
                </p>
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Email
                </label>
                <input type="email" v-model="form.email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email" />
              </div>

              <div class="relative w-full mb-3">
                <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input type="password" v-model="form.password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password" />
                <p v-if="form.password && form.password.length < 6" class="text-red-500 text-sm mt-1">
                  Password harus minimal 6 karakter
                </p>
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    I agree with the
                    <a href="javascript:void(0)" class="text-emerald-500">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <div class="text-center mt-6">
                  <button :disabled="isLoading || !isFormValid"
                    :class="[`bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 disabled:opacity-50`, { 'opacity-50 cursor-not-allowed': !isFormValid || isLoading }]"
                    type="submit">
                    <span v-if="isLoading" class="flex justify-center items-center">
                      <svg class="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                      </svg>
                      Loading...
                    </span>
                    <span v-else> Create Account</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import github from "@/assets/img/github.svg";
import google from "@/assets/img/google.svg";
import api from "@/api/axios";
import Alert from "../../components/Alert/Alert.vue";

export default {
  components: {
    Alert
  },
  data() {
    return {
      github,
      google,
      form: {
        fullName: '',
        email: '',
        password: ''
      },
      isLoading: false
    };
  },
  computed: {
    isFormValid() {
      return this.form.password.length >= 6 || this.form.fullName >= 3;
    }
  },
  methods: {
    async register() {
      this.isLoading = true
      try {
        await api.post('/register', this.form);
        this.$refs.alert.showAlert("Berhasil Register , Silahkan Login", "Succes")
        setTimeout(() => {
          this.$router.push('/auth/login');
        }, 2000)

      } catch (error) {
        this.$refs.alert.showAlert(error.response?.data || "Register Gagal");
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
