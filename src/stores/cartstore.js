import { defineStore } from "pinia";


export const useCartStore = defineStore('cartstore',  {
  state: () => ({
    cart : []
  }),

  getters: {
    cartCount(){
     return this.cart.length
    },
    total(){
      return  this.cart.reduce((total, item) => total + parseFloat(item.price), 0 )

    }
  },

  actions: {
    addproductToCart (product)  {
      this.cart.push(product);
  },
  removeProductFromCart  (id) {
    console.log(id, 'idd');
   this.cart = this.cart.filter((e) =>  e.id !== id)
}

  },
   
persist : true


})