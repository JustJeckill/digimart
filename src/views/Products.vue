<script lang="ts">
  export default {
    data() {
      return {
        products: [
          {
            id: "1",
            title: "Flat Icons Pack",
            description: "Pack of 1000+ icons by format SVG and PNG.",
            price: 19.99,
            category: "icons",
            image: "https://example.com/flat-icons-preview.jpg",
            fileUrl: "https://example.com/download/flat-icons.zip",
            rating: 4.8,
            reviews: 32,
            author: "John Doe",
            authorAvatar: "https://example.com/john-avatar.jpg"
          },
          {
            id: "2",
            title: "Modern UI Kit",
            description: "Modern UI-kit for web and mobile apps",
            price: 29.99,
            category: "ui-kits",
            image: "https://example.com/ui-kit-preview.jpg",
            fileUrl: "https://example.com/download/ui-kit.zip",
            rating: 4.5,
            reviews: 21,
            author: "Jane Smith",
            authorAvatar: "https://example.com/jane-avatar.jpg"
          },
          {
            id: "3",
            title: "Stock Photo Bundle",
            description: "Collection of personal photos.",
            price: 9.99,
            category: "photos",
            image: "https://example.com/photo-bundle-preview.jpg",
            fileUrl: "https://example.com/download/photo-bundle.zip",
            rating: 4.7,
            reviews: 15,
            author: "Emily Brown",
            authorAvatar: "https://example.com/emily-avatar.jpg"
          }
        ]
      }
    },
    methods: {
      addProduct() {
        console.log('add product');
      }
    }
  }
</script>

<template>
  <form>
    <input type="text" placeholder="Product Title">
    <input type="text" placeholder="Product description">
    <input type="text" placeholder="Product price">
    <button type="button" @click="addProduct">Add product</button>
  </form>


  <div class="products">
    <div class="product"
         v-for="product in products"
         :key ="product.id"
    >
      <h3 class="product__title">{{ product.title }}</h3>
      <p class="product__description">{{ product.description }}</p>
      <p class="product__rating">{{ product.rating }}</p>
      <p class="product__price">{{ product.price }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>
