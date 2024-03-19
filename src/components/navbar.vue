<template>
  <div class="">
    <nav
      class="flex justify-between w-10/12 mx-auto border-b-2 pt-4 font-medium text-sm border-gray-500"
    >
      <router-link to="">Home</router-link>
      <div class="flex gap-10">
        <router-link to="">Account</router-link>
        <div class="flex">
          <q-icon
            name="shopping_cart"
            class="pt-1 cursor-pointer"
            @click="openDialog"
          />
          <p class="text-xs">{{ cartStore.cartCount }}</p>
        </div>
      </div>
    </nav>
    <cartPopup v-if="dialog" :dialogbox="dialog" />
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/cartstore.js";
import cartPopup from "../components/cartComponents/cartPopup.vue";
import { ref } from "vue";

const cartStore = useCartStore();

const dialog = ref(false);

const openDialog = () => {
  dialog.value = !dialog.value;
  console.log(dialog.value);
};
// console.log(cartStore.cartCount);
</script>

<style></style>
