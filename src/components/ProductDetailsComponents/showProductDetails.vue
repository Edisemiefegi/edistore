<template>
  <div class="flex gap-5 w-10/12 mx-auto py-10">
    <div class="w-fit h-80">
      <img :src="product.imgurl" alt="" class="object-contain w-full h-full" />
    </div>
    <div>
      <p class="text-lg">{{ product.title }}</p>
      <p class="text-base">{{ product.price }}</p>
      <q-btn
        @click="addtoCart(product)"
        class="bg-black text-white text-sm"
        label="ADD TO CART"
      />
    </div>
  </div>
</template>

<script setup>
import { doc, getDoc, db } from "../../firebase.js";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { useCartStore } from "../../stores/cartstore.js";

const route = useRoute();
const product = ref({});
const cartStore = useCartStore();

onMounted(async () => {
  const docRef = doc(db, "edistore", route.params.id);
  const docSnap = await getDoc(docRef);
  //   product.value = docSnap.data();

  if (docSnap.exists()) {
    let productdata = docSnap.data();
    productdata.id = docSnap.id;

    product.value = productdata;

    console.log("Document data:", product.value, docSnap.id);
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
});

const addtoCart = (product) => {
  cartStore.addproductToCart(product);
};
</script>

<style></style>
