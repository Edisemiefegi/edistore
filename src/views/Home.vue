<template>
  <main class="">
    <navbar />
    <div class="flex flex-col gap-8 w-10/12 mx-auto">
      <banner />

      <div
        class="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <product :product="item" v-for="item in products" :key="item" />
      </div>
    </div>
    <loader v-if="loading" />
  </main>
</template>

<script setup>
import loader from "../components/loader.vue";
import banner from "../components/banner.vue";
import navbar from "../components/navbar.vue";
import Product from "../components/product.vue";

import axios from "axios";
import { onMounted, ref } from "vue";

import { db, collection, getDocs } from "../firebase.js";

const products = ref([]);

const loading = ref(false);

onMounted(async () => {
  try {
    loading.value = true;
    const result = await getDocs(collection(db, "edistore"));
    console.log(result, "result");

    result.forEach((doc) => {
      let product = { ...doc.data() };
      product.id = doc.id;
      products.value.push(product);
      // doc.data() is never undefined for query doc snapshots
      console.log(products.value);
    });
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});

// const getproduct = async () => {
//   load.value = true;
//   try {
//     const url = `https://fakestoreapi.com/products`;
//     const res = await axios.get(url);
//     // console.log(res);

//     products.value = res.data;
//     load.value = false;
//     // console.log(products.value.title);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("done");
//   }
// };
</script>

<style></style>
