<template>
  <div class="whyus pt-5 pb-5">
    <div class="container">
      <div class="row flex-column flex-sm-row flex-lg-row">
        <div class="col-12 col-sm-6 col-lg-6">
          <div class="imageslide">
            <div class="imgslide1">
              <img :src="limitedItem.image1" alt="Main Image" />
            </div>

            <div class="row justify-content-center d-sm-flex" v-if="!close">
              <div
                class="col-6 col-sm-6"
                v-for="(doc, index) in extraItem"
                :key="index"
              >
                <div
                  style="cursor: pointer"
                  class="imgslide2"
                  @click="swapImage(doc)"
                >
                  <img
                    :src="doc.image1"
                    alt="Image Description"
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-6 bg-white">
          <div class="pt-4">
            <div class="row">
              <div class="col-10">
                <div class="title">
                  <h4>WHY US</h4>
                </div>
              </div>

              <div class="col-2 p-3 row justify-content-end">
                <div @click="closeModal" v-show="show" class="close">
                  <font-awesome-icon icon="fa-solid fa-angle-up" />
                </div>
              </div>
            </div>

            <ul class="list">
              <div>
                <li class="listitem">
                  <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                  <a>{{ limitedItem.text1 }}</a>
                </li>
                <li class="listitem">
                  <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                  <a>{{ limitedItem.text2 }}</a>
                </li>
                <li class="listitem">
                  <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                  <a>{{ limitedItem.text3 }}</a>
                </li>
                <li class="listitem">
                  <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                  <a>{{ limitedItem.text4 }}</a>
                </li>
              </div>

              <div v-show="!close">
                <div v-for="(doc, index) in extraItem" :key="index">
                  <li class="listitem">
                    <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                    <a>{{ doc.text1 }}</a>
                  </li>
                  <li class="listitem">
                    <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                    <a>{{ doc.text2 }}</a>
                  </li>
                  <li class="listitem">
                    <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                    <a>{{ doc.text3 }}</a>
                  </li>
                  <li class="listitem">
                    <font-awesome-icon icon="fa-solid fa-check" size="xs" />
                    <a>{{ doc.text4 }}</a>
                  </li>
                </div>
              </div>
            </ul>

            <button
              @click="openModal"
              class="d-none d-sm-block"
              :class="{ 'd-sm-none': show }"
            >
              <a class="order-link fs-6">SEE MORE</a>
            </button>

            <div class="d-sm-none d-lg-none row justify-content-center">
              <div v-show="!show" @click="openModal" class="close opn">
                <font-awesome-icon icon="fa-solid fa-angle-down" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-2">
        <div class="callbtn">
          <button v-show="show">
            <a
              :href="`tel:${phoneNumber}`"
              class="order-link fs-6"
              @click="makeCall"
              >CALL NOW</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeWhyUs",
  data() {
    return {
      show: false,
      close: true,
      items: [],
      limitedItem: {},
      extraItem: {},
      phoneNumber: "",
    };
  },

  mounted() {
    this.fetchData();
    this.getContactInfo();
  },
  methods: {
    getContactInfo() {
      axios
        .get("http://localhost:3000/contacts")
        .then((response) => {
          this.phoneNumber = response.data[response.data.length - 1].phone1;
          console.log(this.phoneNumber);
        })
        .catch((error) => {
          console.error("Error fetching contact info:", error);
        });
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
    limitedItems() {
      this.limitedItem = this.items.docs[0];
    },
    extraItems() {
      this.extraItem = this.items.docs.slice(1);
    },
    openModal() {
      this.show = true;
      this.close = false;
    },
    closeModal() {
      this.show = false;
      this.close = true;
    },
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/homewhyuss");
        const docs = response.data;
        if (docs.length > 0) {
          this.items = docs[docs.length - 1];
          this.limitedItems();
          this.extraItems();
        }
      } catch (error) {
        console.error(error);
      }
    },
    swapImage(doc) {
      const currentImage = this.limitedItem.image1;
      this.limitedItem.image1 = doc.image1;
      doc.image1 = currentImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.imgslide1 {
  width: 100%;
  img {
    width: 100%;
    height: 395px;
  }
}
.imgslide2 {
  padding: 12px;
  width: 100%;
  img {
    width: 100%;
    height: 30vh;
  }
}
.listitem {
  padding: 8px;
  border-bottom: 1px solid rgb(230, 230, 230);
  list-style: none;
  a {
    padding: 12px;
  }
}
.title {
  padding: 18px;
  margin-left: 12px;
  text-align: center;
  h4 {
    width: 105px;
    padding: 6px;
    border-bottom: 3px solid $yellow;
    text-align: center;
  }
}
button {
  width: 150px;
  padding: 8px;
  margin-top: 18px;
  margin-left: 32px;
  border-radius: 6px;
  background: $yellow;
  border: 1px solid $yellow;
  font-size: 14px;
}
.order-link {
  color: black !important;
}
.close {
  width: 40px;
  height: 40px;
  background: $yellow;
  text-align: center;
  padding: 6px;
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
}

.callbtn button {
  width: 150px;
  margin-left: 32px;
  border-radius: 6px;
  background: $yellow;
  border: 1px solid $yellow;
  font-size: 14px;
}
</style>
