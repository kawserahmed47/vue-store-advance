<template>
       <div v-if="!loading" class="row">
              <div v-for="(item, index) in items" :key="index" class="col-md-4 mt-2">
                      <div class="card" style="width: 18rem;">
                          <router-link :to="{path: '/product/'+item.id}">
                         <img :src="item.image" class="card-img-top" alt="IMG">
                          </router-link>
                         <hr>
                        <div class="card-body">
                            <div class="float-left">
                                <router-link :to="{path: '/product/'+index}">
                                <p class="card-text">{{item.title}}</p>
                                </router-link>
                            </div>
                             <div class="float-right"><strong>${{item.price}}</strong></div>

                        </div>
                        <div class="card-footer">
                            <div class="float-left"><router-link :to="{path: '/product/'+item.id}"   class="btn btn-outline-success">Details</router-link ></div>
                             <div @click="addCart(item)" class="float-right"><button  class="btn btn-outline-primary">Add to Cart</button></div>
                        </div>
                      </div>
              </div>

        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Inventory',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    items () {
      return this.$store.getters.getInventory
    }
  },
  mounted () {
    this.fetchInventory()
  },
  methods: {
    addCart (item) {
    //   console.log(item)
      this.$store.commit('addCart', item)
    },
    fetchInventory () {
      var self = this
      axios.get('http://localhost:3000/items').then(response => {
        console.log(response.data)
        setTimeout(function () {
          self.$store.commit('setInventory', response.data)
          self.loading = false
        }, 1000)
      })
    }
  }

}
</script>

<style>

</style>
