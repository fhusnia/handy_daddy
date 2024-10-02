<template>
  <div class="bannercontact" :style="bannerStyles">
    <div class="container">
      <div class="p-0 p-sm-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-8 col-sm-4 col-md-4">
            <div class="questiontitle" :style="borderStyle">
              <a>Is something wrong?</a>
              <p>We’ll fix it!</p>
            </div>
          </div>

          <div class="col-4 d-none d-sm-block d-lg-block">
            <div class="phone">
              <a>Call now:</a>
              <p>+{{ phoneNumber }}</p>
            </div>
          </div>

          <div class="col-4 col-sm-4 col-md-4 btnorder">
            <button :style="buttonStyles">
              <a :href="`tel:${phoneNumber}`" @click="makeCall">ORDER NOW</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BannerContact",
  data() {
    return {
      phoneNumber: "",
    };
  },
  mounted() {
    this.getContactInfo();
  },
  methods: {
    getContactInfo() {
      axios
        .get("http://localhost:3000/contacts")
        .then((response) => {
          this.phoneNumber = response.data[response.data.length - 1].phone1;
        })
        .catch((error) => {
          console.error("Error fetching contact info:", error);
        });
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
  },

  props: {
    backgroundColor: {
      type: String,
      default: "#ffd633",
    },
    textColor: {
      type: String,
      default: "#000",
    },
    buttonBackground: {
      type: String,
      default: "#0a0a0a",
    },
    btncolor: {
      type: String,
      default: "#ffd633",
    },
    border: {
      type: String,
      default: "1px solid #0a0a0a",
    },
  },
  computed: {
    bannerStyles() {
      return {
        background: this.backgroundColor,
        color: this.textColor,
      };
    },
    buttonStyles() {
      return {
        background: this.buttonBackground,
        color: this.btncolor,
      };
    },
    borderStyle() {
      return {
        borderRight: this.border,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.bannercontact {
  margin-top: 42px;
  margin-bottom: 42px;
}
.btnorder {
  a {
    text-decoration: none;
    color: $yellow;
  }
}
.questiontitle {
  height: 80px;
  a {
    font-size: 23px;
    letter-spacing: 1;
  }
  p {
    font-weight: 500;
    font-size: 25px;
  }
}
.phone {
  margin-left: 32px;
  padding-left: 32px;
  a {
    font-size: 20px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
  }
}

button {
  width: 150px;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid black;
  font-size: 12px;
  font-weight: bold;
}
@media only screen and (max-width: 576px) {
  .bannercontact {
    padding: 24px;
  }
  button {
    width: 120px;
  }

  .questiontitle {
    a {
      font-size: 20px;
    }
  }
}
</style>
