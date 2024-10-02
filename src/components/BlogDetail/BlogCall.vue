<template>
  <div class="row pt-5 pb-4">
    <div class="col-12 pt-5">
      <div class="card p-5">
        <div class="d-flex justify-content-center">
          <img
            src="../../assets/images/handydaddyblogdetail.png"
            class="card-img-top"
            alt="..."
          />
        </div>
        <div class="card-body pt-4">
          <p class="text-center">Is something wrong?</p>
          <p style="font-weight: 500" class="fix text-center">We’ll fix it!</p>
          <div class="pt-3">
            <div class="phone row justify-content-center">
              <p class="card-text text-center">+1 (780) 800-5574</p>
            </div>
          </div>

          <div class="btn pt-3 d-flex justify-content-center">
            <a class="clr" :href="`tel:${phoneNumber}`" @click="makeCall"
              >ORDER NOW</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCall",
  data() {
    return {
      phoneNumber: "230093209903",
    };
  },
  methods: {
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 24px;
  width: 100%;
  font-size: 24px;
  background: $yellow;
  img {
    width: 40%;
  }
}
.fix {
  margin-top: -20px;
}
.card-body {
  letter-spacing: 2px;
}
.phone {
  background: white;
  padding: 12px;
  p {
    font-size: 20px;
  }
  border-radius: 12px;
}
.btn {
  a {
    font-size: 20px;
    border-bottom: 1px solid black;
  }
}
.clr {
  color: black;
}
</style>
