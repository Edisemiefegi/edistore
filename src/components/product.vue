<template>
  <div>
    <div
      @click="showProduct(product.id)"
      class="flex flex-col p-4 gap-2 w-full shadow-lg shadow-blue-500/50 transition-transform duration-300 transform hover:-translate-y-2 cursor-pointer"
    >
      <div class="w-fit h-52 mx-auto">
        <img
          :src="product?.imgurl"
          alt=""
          class="object-contain w-full h-full cursor-pointer"
        />
      </div>
      <div class="flex gap flex-row w-full">
        <p class="w-10/12 cursor-pointer">{{ product?.title }}</p>
        <!-- <p class="text-xs text-green-700 font-semibold w-1/12">
          {{ product?.rating?.count }}
        </p> -->
        <p class="text-sm font-semibold text-green-700">{{ product?.price }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

// console.log("DB:", db);

const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
  },
});

const showProduct = (id) => {
  console.log(id);

  router.push(`ProductDetails/${id}`);
};
</script>

<style></style>
