<template>
  <navbar />

  <div class="w-10/12 mx-auto mt-16">
    <q-form @submit="onSubmit" class="q-gutter-md w-96">
      <q-input
        filled
        v-model="form.name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="form.contact"
        label="Your Contact *"
        lazy-rules
      />

      <q-input
        filled
        type="text"
        v-model="form.address"
        label="Your Address *"
        lazy-rules
      />

      <div class="flex gap-2">
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn color="black" label="Home" @click="goToHomePage" />
        <!-- <q-btn label="Alert" color="primary" @click="alert" /> -->
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import navbar from "../components/navbar.vue";
import { useCartStore } from "../stores/cartstore.js";
import { collection, addDoc, db } from "../firebase.js";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const $q = useQuasar();
const router = useRouter();

const form = ref({
  name: "",
  contact: null,
  address: "",
  order: cartStore.cart,
  total: cartStore.total,
});

const onSubmit = async () => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "orders"), form.value);
  console.log("Document written with ID: ", docRef.id);

  form.value = {
    name: "",
    contact: null,
    address: "",
    order: cartStore.cart,
    total: cartStore.total,
  };

  $q.dialog({
    title: "Alert",
    message: "Your order has been placed successfully",
  })
    .onOk(() => {
      // console.log('OK')
    })
    .onCancel(() => {
      // console.log('Cancel')
    })
    .onDismiss(() => {
      // console.log('I am triggered on both OK and Cancel')
    });
};

const goToHomePage = () => {
  router.push({ name: "Home" });
};
</script>

<style></style>
