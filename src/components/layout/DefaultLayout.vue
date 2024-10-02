<template>
  <div>
    <header-component />
    <body>
      <main>
        <slot />
      </main>
    </body>

    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./Header.vue";
import FooterComponent from "./Footer.vue";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped></style>
