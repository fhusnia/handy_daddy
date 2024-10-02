<template>
  <div class="container privacy">
    <div class="row flex-wrap justify-content-center">
      <div class="p-3 p-sm-5">
        <div class="col-12 p-2">
          <h3>{{ title }}</h3>
          <span>Last updated: May 2022</span>
        </div>
        <div class="col-12">
          <div class="line p-2 d-flex justify-content-center">
            <img src="../../assets/images/linelottery.jpg" />
          </div>
        </div>

        <div class="col-12 p-2">
          <div v-html="description"></div>
        </div>
        <div class="d-none d-sm-block">
          <div class="col-12">
            <router-link to="/">
              <div class="row justify-content-center">
                <button>BACK</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PrivacyMain",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  mounted() {
    this.getPrivacyData();
  },
  methods: {
    getPrivacyData() {
      axios
        .get("http://localhost:3000/privacies")
        .then((response) => {
          const privacyData = response.data;
          if (privacyData.length > 0) {
            this.title = privacyData[0].title;
            this.description = privacyData[0].description;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scss="lang.scss" scoped>
.privacy {
  color: #5c5b5b;
  h3 {
    color: black;
  }
  span {
    font-size: 15px;
  }
  p {
    font-size: 15px;
    text-align: justify;
    line-height: 1.8;
  }
  a {
    color: black;
    font-weight: 500;
    text-decoration: none;
  }
}
.line {
  img {
    width: 100%;
  }
}
.black {
  color: black !important;
  font-weight: 500;
}
button {
  width: 20%;
  padding: 8px;
  margin-top: 18px;
  margin-left: 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid black;
}
</style>
