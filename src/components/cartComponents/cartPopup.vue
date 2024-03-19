<template>
  <div class="">
    <q-dialog :seamless="true" :modelValue="dialogbox" position="right">
      <q-card class="h-[900px] mt-8">
        <q-card-section class="w-80 flex flex-col gap-8">
          <div>
            <div class="text-2xl">Recently Added Items</div>
          </div>
          <div>
            <p class="text-xl">
              Total :
              {{ totalAmount }}
            </p>
          </div>

          <div class="w-full" v-for="product in cartStore.cart" :key="product">
            <div class="flex justify-between border p-1.5">
              <div class="w-2/4 border">
                <img :src="product.imgurl" alt="" />
              </div>
              <div class="w-2/5">
                <p>{{ product.title }}</p>
                <p>{{ product.price }}</p>
                <q-icon
                  @click="removeFromCart(product.id)"
                  name="delete"
                  class="cursor-pointer"
                />
              </div>
            </div>
          </div>
          <q-btn
            label="Proceed"
            type="submit"
            @click="placeOrders"
            color="primary"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useCartStore } from "../../stores/cartstore.js";
import { useRouter } from "vue-router";

const router = useRouter();

const cartStore = useCartStore();
// const position = ref("right");

const props = defineProps({
  dialogbox: {
    type: Boolean,
  },
});

// const dialog = ref(true);

console.log(cartStore.cart, "pop");

const totalAmount = computed(() => cartStore.total);

const removeFromCart = (id) => {
  console.log(id);
  cartStore.removeProductFromCart(id);
};

const placeOrders = () => {
  router.push({ name: "Orders" });
};
</script>
