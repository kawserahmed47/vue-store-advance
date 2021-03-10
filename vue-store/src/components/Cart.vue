<template>
      <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Cart List
                </div>
                <ul class="list-group list-group-flush">
                    <li v-for="(item, index) in items" :key="index" class="list-group-item">
                        <div class="float-left"><button @click="removeItem(index)" class="btn btn-danger" >X</button> {{item.title}} </div>
                        <div class="float-right">
                             <strong> ${{item.price}} </strong>
                        </div>
                    </li>
                </ul>
                <div class="card-footer">
                    <div class="float-left"> Total:</div>
                    <div class="float-right"> <strong> ${{totalPrice}}</strong>  </div>
                </div>
                 <div v-if="items.length > 0">
                    <button @click="checkout" class="btn btn-block btn-success">Checkout</button>
                </div>
        </div>

</template>

<script>
export default {

  name: 'Cart',
  computed: {
    items () {
      return this.$store.getters.getCart
    },
    totalPrice () {
      var total = 0
      this.items.forEach(element => {
        total += parseFloat(element.price)
      })
      return total
    }
  },
  methods: {
    removeItem (index) {
      this.$store.commit('removeCartItem', index)
    },
    checkout () {
      if (confirm('Are you sure to checkout?')) {
        this.$store.commit('clearCart')
        alert('Your order is successfully added.')
      }
    }
  }

}
</script>

<style>

</style>
