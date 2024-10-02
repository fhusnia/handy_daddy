<template>
  <div class="container">
    <div class="pt-sm-4 p-0">
      <div class="row flex-wrap justify-content-center">
        <div class="col-12">
          <div class="pt-3 row justify-content-center">
            <div class="title p-3 p-sm-0">
              <div class="text-center pb-1">
                <a style="font-weight: 500">REFRIGERATOR</a>
              </div>
              <div class="text-center pb-3 d-none d-sm-block">
                <a>we proudly provide these services</a>
              </div>
              <div class="d-flex justify-content-center">
                <p></p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12">
          <div class="p-sm-3 p-0 refrigeratorcard">
            <div
              class="p-sm-3 p-0 row justify-content-center flex-column flex-sm-row"
            >
              <div class="col-4 d-none d-sm-block">
                <div class="imagecol text-center">
                  <img src="../../assets/images/refrigerator.png" />
                </div>
              </div>
              <div class="col-4 d-block d-sm-none">
                <div class="imagecol d-flex justify-content-center">
                  <div class="col-6 d-sm-none d-block">
                    <img src="../../assets/images/refrigerator.png" />
                  </div>
                  <div class="col-6 d-block d-sm-none">
                    <div class="d-flex flex-column mobdetail">
                      <a>We'll FIX IT</a>
                      <button>Call Now</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-8 p-4 pt-5 pt-sm-3">
                <div
                  class="row justify-content-center whitebackground align-items-center"
                >
                  <div class="detail p-4">
                    <p>
                      Refrigerators are rather complex devices, and it is
                      possible to determine the exact cause of a breakdown only
                      with the help of special diagnostic equipment.
                    </p>
                    <span>-Do not try to find the problem "by touch" </span>
                    <a></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 p-4">
          <div class="text">
            <p>
              It is better to contact Handy Daddy specialists, who have all the
              necessary tools and impressive experience in repairing
              refrigerators of various types and brands. In the shortest time
              possible, our masters will determine the cause of the breakdown
              and bring your refrigerator to working condition.
            </p>
            <p>
              We recommend that you contact refrigerator repair specialists as
              soon as you notice the problem. We believe that there is no defect
              too small to check. A quick check could save you the expense of
              costly refrigerator repairs.
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 pt-2">
        <div class="pt-3 row justify-content-center">
          <div class="title">
            <div class="text-center pb-1">
              <a style="font-weight: 500">REFRIGERATOR</a>
            </div>
            <div class="text-center pb-3">
              <a>we proudly provide these services</a>
            </div>
            <div class="d-flex justify-content-center">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12">
        <div class="p-3">
          <div class="row">
            <div
              class="col-6 col-lg-3 border2"
              v-for="(brands, index) in brandLists"
              :key="index"
            >
              <ul class="list">
                <li v-for="(brand, brandIndex) in brands" :key="brandIndex">
                  <a>{{ brand }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefrepairMain",
  data() {
    return {
      brandLists: [
        ["Amana", "Bosch", "Broan", "Danby"],
        ["Electrolux", "Frigidaire", "GE", "Jenn-Air"],
        ["Kenmore", "KitchenAid", "LG", "Maytag"],
        ["Miele", "Panasonic", "Samsung", "Whirlpool"],
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  border-right: 1px solid #ccc; /* Example border style */
}

.no-border {
  border-right: none;
}
.brand-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.brand {
  flex: 1 1 50%;
}

@media (min-width: 768px) {
  .brand {
    flex: 1 1 25%;
  }
}
.title {
  a {
    letter-spacing: 2px;
    font-size: 18px;
  }
  p {
    margin-top: -10px;
    width: 10%;
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

.text {
  text-align: justify;
  font-size: 18px;
  color: rgb(39, 38, 38);
}
.list {
  border-right: 1px solid rgb(89, 89, 89);
  list-style: none;
  font-size: 24px;
  li {
    padding: 12px;
  }
}
.border2:last-child .list {
  border-right: none;
}

.refrigeratorcard {
  background: #fafafa;
}
.title {
  padding-bottom: 4px;
  p {
    width: 90px;
    border-bottom: 2px solid $yellow;
  }
}
@media only screen and (max-width: 992px) {
  .list {
    padding: 8px;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0;
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
      width: 120px;
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
  .refrigeratorcard {
    background: none;
  }
  .detail {
    p {
      font-size: 18px;
      letter-spacing: 0.4px;
      line-height: 1.4;
    }
    span {
      padding: 6px;
      font-size: 18px;
    }
  }
  .whitebackground {
    background-color: white;
  }
  .border2 > .col-6:last-child .list {
    border-right: none;
  }
  .div {
    padding: 0px;
  }
  .border2:nth-child(2) .list,
  .border2:nth-child(4) .list {
    border-right: none;
  }
}
</style>
