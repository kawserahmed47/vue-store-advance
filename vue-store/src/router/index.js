// import Vue from 'vue'
// import Router from 'vue-router'
import Inventory from '@/components/Inventory'
import HelloWorld from '@/components/HelloWorld'
import ProductDetails from '@/components/ProductDetails'
// Vue.use(Router)

export const routes = [
  {
    path: '/hello',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Product',
    component: Inventory
  },

  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails
  }
]
