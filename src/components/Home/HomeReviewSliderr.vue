<template>
  <div class="reviewslider">
    <div class="container">
      <div class="p-1 p-sm-5">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="title pt-3 pb-3">
                <div class="fs-5 text-center"><a>TESTIMONALS</a></div>
                <div class="pb-2 fs-4 text-center">
                  <a>Read our customers reviews</a>
                </div>
                <div class="d-flex justify-content-center">
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-12">
              <carousel
                navigationNextLabel="<a class='d-none d-sm-block d-md-block'>next</a>"
                navigationPrevLabel="<a class='d-none d-sm-block d-md-block'>prev</a>"
                :perPageCustom="[
                  [360, 1],
                  [576, 2],
                ]"
                :navigationEnabled="true"
              >
                <slide v-for="review in reviews" :key="review.id">
                  <div class="card">
                    <div class="card-body">
                      <div class="p-2 d-flex">
                        <div class="col-9 d-flex">
                          <div class="col-2">
                            <div class="cardimg">
                              <img src="../../assets/images/blueprofil.jpg" />
                            </div>
                          </div>
                          <div class="col-9 p-1">
                            <a>{{ review.fullName }}</a>
                            <p style="font-size: 14px">
                              <span
                                ><font-awesome-icon
                                  icon="fa-solid fa-check"
                                  size="s"
                              /></span>
                              {{ review.service }}
                            </p>
                          </div>
                        </div>
                        <div class="col-4 d-block col-sm- none">
                          <a v-for="n in review.point" :key="n" class="ms-1"
                            ><font-awesome-icon
                              size="xs"
                              style="color: #ffd633"
                              icon="fa-solid fa-star"
                          /></a>
                        </div>
                      </div>
                      <div class="text col-12 p-sm-2 p-lg-2">
                        <p>{{ review.comment }}</p>
                      </div>
                    </div>
                  </div>
                </slide>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "HomeReviewSliderr",
  data() {
    return {
      reviews: [],
    };
  },
  components: {
    Carousel,
    Slide,
  },
  mounted() {
    this.fetchReviews();
  },
  methods: {
    async fetchReviews() {
      try {
        const response = await axios.get("http://localhost:3000/reviews");
        this.reviews = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  a {
    font-size: 20px;
    letter-spacing: 1px;
  }
  p {
    width: 10%;
    border-bottom: 3px solid $yellow;
  }
}
.cardimg {
  img {
    width: 55px;
    height: 55px;
    border-radius: 100px;
  }
}
.card {
  width: 95%;
  height: 280px;
  border: 1px solid #343434;
  border-radius: 20px;
  background: #343434;
}
.card-body {
  color: white;

  span {
    color: #1ad343 !important;
  }
}
.text {
  letter-spacing: 1px;
}
.reviewslider {
  background-color: #eeeeee;
}
@media (max-width: 576px) {
  .card {
    width: 100%;
  }
  .title {
    p {
      width: 40%;
      border-bottom: 3px solid $yellow;
    }
  }
}
</style>
