<template>
  <div class="container">
    <h2 class="heading-style-standard text-center">{{productrows1.title}}</h2>
    <div class="product-row product-row--productRow.products.length">
      <div class="row product-row__row">
        <div v-for="productrow in productrows" class="product-row__item">
          <p v-bind:class="productrows.products.length">ed</p>
          <div class="product-row__item-header">
            <h3 class="product-row__item-header-title heading4">name</h3>
            <div class="product-row__item-header-icon icon-block-icon">
              <svg class="icon">
              </svg>
            </div>
          </div>
          <div class="product-row__item-body">
            <ul class="block-list no-bullet">
              <li class="block-list-item">
              </li>
            </ul>

          </div>
          <div class="product-row__item-footer">
            <a href="#" class="btn btn-primary" data-dtm-id="" data-dtm-data="">
              <svg class="icon">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right5"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    productrows1 () {
      return this.$store.state.productrow.productrow1
    }
  }
}
</script>

<style>

</style>
