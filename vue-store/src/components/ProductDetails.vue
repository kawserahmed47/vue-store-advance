<template>
    <div>
        <div v-if="!loading" class="row">
            <div class="col-md-6">
                  <img :src="item.image" class="card-img-top" alt="IMG">
            </div>
            <div class="col-md-6">
                <h4>{{item.title}}</h4>
                <p>{{item.description}}</p>
                <strong>{{item.price}}</strong>
                <button @click="addCart (item)" class="btn btn-outline-primary">Add to Cart</button>
            </div>

        </div>
        <div v-else>
            <h1>Loading...</h1>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default({
  Name: 'Product Details',
  data () {
    return {
      loading: true,
      item: []
    }
  },
  mounted () {
    this.fetchItem()
  },
  methods: {
    addCart (item) {
    //   console.log(item)
      this.$store.commit('addCart', item)
    },
    fetchItem () {
      var self = this
      axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
        console.log(response.data)
        setTimeout(function () {
          self.item = response.data
          self.loading = false
        }, 1000)
      })
    }
  }
})
</script>

<style scoped>

</style>
