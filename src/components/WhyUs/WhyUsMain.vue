<template>
  <div class="container">
    <div class="p-sm-5x">
      <div class="row justify-content-center">
        <div class="pt-5">
          <div class="col-12 firstwhite">
            <div class="p-1 p-sm-5">
              <div class="row flex-column flex-sm-row justify-content-center">
                <div class="col-12 col-sm-6">
                  <div class="pb-3 pb-s-0 pt-4 pt-s-0">
                    <div class="imagecol d-flex justify-content-center">
                      <img
                        class="d-none d-sm-block"
                        :src="whyuss[0].docs[0].image1"
                      />
                      <div class="col-6 d-sm-none d-block">
                        <img src="../../assets/images/Handyman.jpg" />
                      </div>
                      <div class="col-6 d-block d-sm-none">
                        <div class="d-flex flex-column mobdetail">
                          <a>We'll FIX IT</a>
                          <button>Call Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6 mobwhite">
                  <div class="pt-4">
                    <ul class="list">
                      <li class="list1 d-flex gap-3">
                        <span>1</span
                        ><a>{{ whyuss[whyuss.length - 1].docs[0].text1 }}</a>
                      </li>
                      <li class="list1 d-flex gap-3">
                        <span>2</span
                        ><a>{{ whyuss[whyuss.length - 1].docs[0].text2 }}</a>
                      </li>
                      <li class="list1 d-flex gap-3">
                        <span>3</span
                        ><a>{{ whyuss[whyuss.length - 1].docs[0].text3 }}</a>
                      </li>
                      <li class="list1 d-flex gap-3">
                        <span>4</span
                        ><a>{{ whyuss[whyuss.length - 1].docs[0].text4 }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BannerContact class="d-block d-sm-none"></BannerContact>

        <div class="col-12">
          <div class="p-1 p-sm-5">
            <div class="row flex-column flex-sm-row justify-content-around">
              <div class="col-12 col-sm-6 mobwhite">
                <div class="pt-4">
                  <ul class="list">
                    <li class="list1 d-flex gap-3">
                      <span>5</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[1].text1 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>6</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[1].text2 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>7</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[1].text3 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>8</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[1].text4 }}</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-12 col-sm-4 d-none d-sm-block">
                <div class="pb-3 pb-s-0 pt-4 pt-s-0">
                  <div class="imagecol d-flex justify-content-center">
                    <img
                      class="d-none d-sm-block"
                      :src="whyuss[whyuss.length - 1].docs[1].image1"
                    />
                    <div class="col-6 d-sm-none d-block">
                      <img src="../../assets/images/Handyman.jpg" />
                    </div>
                    <div class="col-6 d-block d-sm-none">
                      <div class="d-flex flex-column mobdetail">
                        <a>We'll FIX IT</a>
                        <button>Call Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 firstwhite">
          <div class="p-1 p-sm-5">
            <div class="row flex-column flex-sm-row justify-content-center">
              <div class="col-12 col-sm-6">
                <div class="pb-3 pb-s-0 pt-4 pt-s-0">
                  <div
                    class="imagecol d-none d-sm-block d-flex justify-content-center"
                  >
                    <img :src="whyuss[whyuss.length - 1].docs[2].image1" />
                  </div>
                  <div class="col-12 d-sm-none d-block">
                    <img src="../../assets/images/whymobile.png" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 mobwhite">
                <div class="pt-4">
                  <ul class="list">
                    <li class="list1 d-flex gap-3">
                      <span>9</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[2].text1 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>10</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[2].text2 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>11</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[2].text3 }}</a>
                    </li>
                    <li class="list1 d-flex gap-3">
                      <span>12</span
                      ><a>{{ whyuss[whyuss.length - 1].docs[2].text4 }}</a>
                    </li>
                  </ul>
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
import BannerContact from "../layout/BannerContact.vue";
import axios from "axios";
export default {
  name: "WhyUsMain",

  components: {
    BannerContact,
  },
  data() {
    return {
      whyuss: [],
    };
  },
  created() {
    this.getWhyData();
  },
  methods: {
    getWhyData() {
      axios
        .get("http://localhost:3000/whyuss")
        .then((response) => {
          this.whyuss = response.data;
          console.log(this.whyuss);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  list-style: none;

  .list1 {
    padding: 16px;
    border-bottom: 1px solid #e2e2e2;
  }
  span {
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffd633;
  }
}
.firstwhite {
  background: white;
}
.imagecol2 {
  width: 350px;
  height: 270px;
  background-color: #ffd633;
  border-radius: 16px;
  img {
    width: 330px;
  }
}
.imagecol {
  margin-top: 12px;
  width: 350px;
  height: 270px;
  background-color: #ffd633;
  border-radius: 16px;
  img {
    width: 330px;
    height: 320px;
    position: relative;
    bottom: 50px;
  }
}
.title {
  padding-bottom: 4px;
  p {
    width: 90px;
    border-bottom: 2px solid $yellow;
  }
}
@media only screen and (max-width: 576px) {
  .list {
    padding: 8px;
  }
  .mobwhite {
    background: white;
  }
  .firstwhite {
    background: #fafafa;
  }
  .imagecol {
    margin-top: 12px;
    width: 350px;
    height: 110px;
    background-color: #ffd633;
    border-radius: 0;
    img {
      width: 160px;
      height: 155px;
      position: relative;
      bottom: 44px;
    }
    button {
      width: 100px;
      margin-top: 6px;
      padding: 4px;
      border-radius: 6px;
      background: black;
      border: 1px solid black;
      font-size: 14px;
      font-weight: 600;
      color: $yellow;
    }
    a {
      font-weight: 600;
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
  .mobdetail {
    margin-top: 26px;
  }
}
</style>
