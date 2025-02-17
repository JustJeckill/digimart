<script lang="ts">

</script>

<template>
  <form action="/" method="post" class="contact-form">
    <div class="contact-form__fieldset">
      <input type="text" name="contact-name" class="contact-form__field" placeholder="Your name">
      <span class="contact-form__error"></span>
    </div>
    <div class="contact-form__fieldset">
      <input type="text" name="contact-email" class="contact-form__field" placeholder="Your email">
      <span class="contact-form__error"></span>
    </div>
    <div class="contact-form__fieldset">
      <input type="text" name="contact-message" class="contact-form__field" placeholder="Your message">
      <span class="contact-form__error"></span>
    </div>
    <div class="contact-form__action">
      <button type="button" class="contact-form__button">Submit</button>
    </div>
  </form>
</template>

<style scoped>

</style>
