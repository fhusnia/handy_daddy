<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="ref">
        <div class="pt-5 d-flex justify-content-center flex-wrap">
          <div class="title">
            <div class="text-center pb-1">
              <a style="font-weight: 500">{{ appliances[0].title }}</a>
            </div>
            <div class="text-center pb-3">
              <a>We proudly provide these services</a>
            </div>
            <p></p>
          </div>
        </div>

        <div class="row justify-content-center">
          <div class="p-3">
            <div class="bg-white">
              <div
                class="p-4"
                v-for="appliance in appliances"
                :key="appliance.id"
              >
                <div
                  class="d-flex flex-column flex-sm-row justify-content-center"
                >
                  <div class="col-12 col-sm-4">
                    <div class="imagecol text-center pt-4">
                      <img :src="appliance.imageUrl1" />
                    </div>
                  </div>
                  <div
                    class="col-12 col-sm-8 d-flex pt-4 pt-sm-0 justify-content-center align-items-center"
                  >
                    <div class="detail">
                      <p>{{ appliance.content1 }}</p>
                      <span>-Do not try to find the problem "by touch" </span>
                      <a></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="p-3">
            <div class="imagebanner">
              <img src="../../assets/images/refrigeratorbanner.png" />
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="line d-none d-sm-block">
            <div class="p-5">
              <img src="../../assets/images/linelottery.jpg" />
            </div>
          </div>
        </div>
        <div class="row justify-content-center d-none d-sm-block">
          <div class="p-3">
            <div class="bg-white">
              <div class="p-4">
                <div
                  class="d-flex flex-column flex-sm-row justify-content-center"
                  v-for="appliance in appliances"
                  :key="appliance.id"
                >
                  <div class="col-12 col-sm-4">
                    <div class="imagecol2 text-center pt-3">
                      <img :src="appliance.imageUrl2" />
                    </div>
                  </div>
                  <div
                    class="col-12 col-sm-8 pt-3 d-flex justify-content-center align-items-center"
                  >
                    <div class="detail">
                      <p>{{ appliance.content2 }}</p>

                      <a></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RefrigeratorMain",

  data() {
    return {
      appliances: [],
    };
  },
  mounted() {
    this.fetchAppliances();
  },
  methods: {
    fetchAppliances() {
      const Id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/appliances/${Id}`)
        .then((response) => {
          this.appliances = [response.data];
        })
        .catch((error) => {
          console.error("Error fetching appliances:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  a {
    letter-spacing: 2px;
    font-size: 18px;
  }
  p {
    margin-left: 86px;
    width: 40%;
    border-bottom: 3px solid $yellow;
  }
}
.imagecol {
  margin-top: 12px;
  width: 280px;
  height: 230px;
  background-color: #ffd633;
  border-radius: 16px;
  img {
    width: 168px;
  }
}
.imagecol2 {
  margin-top: 12px;
  width: 280px;
  height: 230px;
  background-color: #ffd633;
  border-radius: 16px;
  img {
    width: 270px;
    position: relative;
    bottom: 30px;
  }
}
.detail {
  p {
    text-align: justify;
    font-size: 20px;
    letter-spacing: 1.8px;
    line-height: 1.6;
  }
  span {
    padding: 6px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
    border-bottom: 2px solid $yellow;
  }
}
.imagebanner {
  img {
    width: 100%;
  }
}
.line {
  img {
    width: 1150px;
  }
}

@media only screen and (max-width: 576px) {
  .imagecol {
    img {
      width: 50%;
      height: 34vh;
    }
    width: 100%;
  }
  .imagebanner {
    img {
      width: 100%;
      height: 30vh;
    }
  }
}
</style>
