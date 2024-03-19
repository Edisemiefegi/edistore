// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue'; // Example import, replace with your components
import ProductDetails from './views/ProductDetails.vue'; // Example import, replace with your components
import Orders from './views/Orders.vue'; // Example import, replace with your components



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/productDetails/:id',
    name: 'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  // Add more routes here as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
