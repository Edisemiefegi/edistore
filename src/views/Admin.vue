<template>
  <navbar />
  <div class="flex flex-col gap-8 w-10/12 mx-auto">
    <p class="text-2xl">This is the admin page</p>
    <!-- <form action="" class="flex flex-col gap-3 w-7/12">
      <input
        v-model="form.name"
        type="text"
        placeholder="Your name.."
        class="w-full bg-gray-200 p-2.5 text-sm outline-none rounded-md"
      />
      <input
        v-model="form.telephone"
        type="number"
        placeholder="Your Contact.."
        class="w-full bg-gray-200 p-2.5 text-sm outline-none rounded-md"
      />
      <input
        v-model="form.address"
        type="text"
        placeholder="Your Address"
        class="w-full bg-gray-200 p-2.5 text-sm outline-none rounded-md"
      />

      <button class="bg-blue-500 text-xs p-2 rounded-md w-fit text-white">
        SUBMIT
      </button>
    </form> -->

    <addProductFormComponent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import navbar from "../components/navbar.vue";
import addProductFormComponent from "../components/adminComponents/addProductFormComponent.vue";

const form = ref({
  name: "",
  telephone: "",
  address: "",
});
</script>

<style></style>
