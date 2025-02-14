<script lang="ts">

export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    }
  },
  methods: {
    addLike() {
      this.likes +=1;
    },
    addDislike() {
      this.dislikes +=1;
    }
  }
}
</script>

<template>
  <div>
    <div class="buttons">
      <button @click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>

    <div>Likes {{ likes }}</div>
    <div>Dislikes {{ dislikes }}</div>

    <RouterView />
  </div>
</template>

<style>

</style>
