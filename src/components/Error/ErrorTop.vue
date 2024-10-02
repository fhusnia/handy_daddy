<template>
  <div class="error d-flex align-items-center">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 d-flex p-3 justify-content-center">
          <h1>404 PAGE NOT FOUND</h1>
        </div>

        <div class="col-12 d-flex p-3 justify-content-center">
          <p>Sorry, the page doesn’t exist!</p>
        </div>
        <div class="col-12 d-flex p-3 justify-content-center">
          <img src="../../assets/images/404.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorTop",
};
</script>

<style lang="scss" scoped>
.error {
  background: rgb(237, 237, 237);
  height: 400px;
  text-transform: uppercase;
}
@media only screen and (max-width: 576px) {
  img {
    overflow: hidden;
  }
}
</style>
