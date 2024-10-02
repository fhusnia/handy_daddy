<template>
  <div>
    <div class="container">
      <div class="p-sm-4 pt-4 pt-sm-0 p-0">
        <div class="row btn justify-content-center">
          <div class="lotterycontain">
            <img :src="lotteryImage[0].imageUrl1" />
            <div class="lotterposition row align-items-end">
              <div class="col-8">
                <div class="dreamlttry d-flex align-items-center p-2">
                  <div class="dreamabsolute">
                    <div class="d-flex justify-content-center">
                      <div class="col-6">
                        <h3>Dream Lottery in West Edmonton!</h3>
                      </div>
                      <div class="col-6 p-3">
                        <button>SEE MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-4 position-relative row align-items-end justify-content-end"
              >
                <div class="dreamimg">
                  <img src="../../assets/images/lotterychild.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="p-4">
            <div class="col-12">
              <div class="title">
                <a>{{ lottery[1].question1 }}</a>
                <p>{{ lottery[1].question2 }}</p>
              </div>
            </div>
            <div class="col-12 pt-2">
              <div class="detail">
                <p>{{ lottery[1].text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex p-5">
      <div class="col-5">
        <div class="watertitle">
          <div class="textwater">
            <a>{{ lottery[1].question1 }}</a>
            <p>{{ lottery[1].question2 }}</p>
            <div class="center">
              <button>Call Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="waterimg">
          <img class="objcover objposition" :src="lotteryImage[0].imageUrl4" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="filamingo">
        <img src="../../assets/images/filamingo.png" />
      </div>
      <div class="row flex-wrap justify-content-center">
        <div class="col-12">
          <div class="texttitle text-center">
            <a>{{ lottery[0].question1 }}</a>
            <p>{{ lottery[0].question2 }}</p>
          </div>
        </div>

        <div
          class="col-12 col-sm-12 pb-sm-5 pb-0 justify-content-center align-items-center"
        >
          <div class="text p-sm-5 p-3">
            <p>{{ lottery[0].text }}</p>
          </div>
        </div>
      </div>

      <div class="line d-none d-sm-block row justify-content-center">
        <img src="../../assets/images/linelottery.jpg" />
      </div>

      <div class="pt-0 pt-sm-5 d-none d-sm-block">
        <div class="row justify-content-center">
          <div class="col-6 p-3">
            <div class="uknownimg">
              <img :src="lotteryImage[0].imageUrl2" />
            </div>
          </div>
          <div class="col-6 p-3">
            <div class="uknownimg2 gap-5 d-flex flex-wrap">
              <div class="col-12">
                <img :src="lotteryImage[0].imageUrl3" />
              </div>
              <div class="col-12">
                <img :src="lotteryImage[0].imageUrl4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center d-block d-sm-none">
        <div class="col-12">
          <carousel
            navigationNextLabel="<a class='d-none d-sm-block d-md-block'>next</a>"
            navigationPrevLabel="<a class='d-none d-sm-block d-md-block'>prev</a>"
            :perPageCustom="[[360, 1]]"
            :navigationEnabled="true"
          >
            <slide>
              <div class="card">
                <div class="card-body">
                  <div class="p-2">
                    <div class="col-9 d-flex">
                      <div class="col-3">
                        <div class="cardimg">
                          <img :src="lotteryImage[0].imageUrl2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card">
                <div class="card-body">
                  <div class="p-2">
                    <div class="col-9 d-flex">
                      <div class="col-3">
                        <div class="cardimg">
                          <img :src="lotteryImage[0].imageUrl3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              <div class="card">
                <div class="card-body">
                  <div class="p-2">
                    <div class="col-9 d-flex">
                      <div class="col-3">
                        <div class="cardimg">
                          <img :src="lotteryImage[0].imageUrl4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderLottery",

  data() {
    return {
      lottery: [],
      lotteryImage: [],
    };
  },
  created() {
    this.getLotteryData();
    this.getLotteryImageData();
  },
  methods: {
    getLotteryData() {
      axios
        .get("http://localhost:3000/lotteries")
        .then((response) => {
          this.lottery = response.data.slice(-2);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getLotteryImageData() {
      axios
        .get("http://localhost:3000/lotteryimages")
        .then((response) => {
          this.lotteryImage = response.data;
          console.log(this.lotteryImage);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.lotterycontain {
  img {
    width: 100%;
  }
}

.dreamlttry {
  position: relative;
  bottom: 180px;
  left: 60px;
  width: 550px;
  height: 150px;
  background: $yellow;
  border-radius: 18px;
}
.dreamabsolute {
  position: absolute;
}
button {
  width: 135px;
  padding: 6px;
  border-radius: 6px;
  background: black;
  border: 1px solid black;
  font-size: 14px;
  color: $yellow;
}

.dreamimg {
  position: absolute;
  left: 65px;
  height: 200px;

  img {
    width: 30%;
    transform: scale(4);
  }
}
.detail {
  font-size: 20px;
  text-align: justify;
  line-height: 2;
}
.title {
  a {
    font-size: 35px;
    letter-spacing: 2px;
  }
  p {
    font-size: 30px;
    letter-spacing: 2px;

    font-weight: 600;
  }
}
.waterimg {
  width: 100%;

  img {
    width: 100%;
    height: 30vh;
  }
}
.watertitle {
  padding: 50px;
  height: 30vh;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  width: 50%;
  position: absolute;
  background-color: $yellow;
  a {
    font-size: 30px;
    letter-spacing: 2px;
  }
  p {
    font-size: 25px;
    letter-spacing: 2px;

    font-weight: 600;
  }
}
.water {
  width: 100%;
  height: 100%;
}
.filamingo {
  width: 300px;
  position: relative;
  bottom: 50px;
  left: -120px;
  height: 120px;

  img {
    width: 250px;
    height: 320px;
  }
}
.uknownimg2 {
  img {
    height: 200px;
  }
}
.uknownimg {
  img {
    height: 450px;
    object-fit: cover;
  }
}
.uknownimg2 {
  img {
    object-fit: cover;
  }
}
.text {
  background: rgb(255, 255, 255);
  p {
    text-align: justify;
    font-size: 18px;
    line-height: 2;
  }
  border-radius: 15px;
}

.texttitle {
  a {
    font-size: 30px;
    letter-spacing: 2px;
    padding: 8px;
  }
  p {
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: 600;
  }
}
.line {
  img {
    width: 100%;
  }
}
.uknownimg {
  img {
    width: 100%;
  }
}
.uknownimg2 {
  img {
    width: 100%;
  }
}
.cardimg2 {
  img {
    height: 00px;
  }
}
@media only screen and (max-width: 576px) {
  .title {
    a {
      padding: 12px;
      font-size: 24px;
      letter-spacing: 2px;
    }
    p {
      font-size: 24px;
      letter-spacing: 2px;

      font-weight: 600;
    }
  }
  .detail {
    font-size: 16px;
  }
  .text {
    font-size: 16px;
    background: none;
  }
  .lotterposition {
    display: none;
  }
  .waterimg {
    img {
      height: 25vh;
    }
  }
  .card {
    --bs-card-border-color: none;
    --bs-card-bg: none;
  }
  .card-body img {
    height: 50vh;
  }
  .watertitle {
    width: 65%;
    padding: 0px;
    height: 25vh;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    a {
      font-size: 20px;
      letter-spacing: 2px;
    }
    p {
      font-size: 18px;
      letter-spacing: 2px;

      font-weight: 600;
    }
  }

  .textwater {
    padding-left: 12px;
    padding-top: 24px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .card-body {
    padding: 0;
  }
}
</style>
