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
      console.log(cart.value, 'cart');
  },
  

  removeProductFromCart  (id) {
    this.cart = cart.filter((e) => {
        console.log(e , 'e', id);
      return   e.id === id
    })
}

  },
   
persist : true


})