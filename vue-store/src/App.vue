<template>
  <div id="app">
    <!-- <router-view></router-view> -->
     <Navbar></Navbar>

      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-md-9">
            <router-view></router-view>
            <!-- <Inventory></Inventory> -->
          </div>
          <div class="col-md-3">
            <Cart></Cart>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import Cart from './components/Cart'
export default{
  components: {
    HelloWorld, Navbar, Inventory, Cart
  },
  name: 'App'
}
</script>

<style>

</style>
