<template>
  <section class="container">
    <div>
      I am the product row page
      {{title}}
      <ProductRow rendition="four_product_example"/>
    </div>
  </section>
</template>

<script>
import ProductRow from '~/components/ProductRow.vue'

export default {
  layout: 'pruco',
  async asyncData ({ params }) {
    //    let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    return { title: 'sw' }
  },
  components: {
    ProductRow
  }

}
</script>

<style>
  h2 {
    color: green
  }
</style>
