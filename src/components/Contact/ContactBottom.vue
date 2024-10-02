<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="p-3">
        <div class="col-12">
          <div class="map">
            <div class="d-flex justify-content-center">
              <div class="title p-4">
                <div class="pb-2">
                  <a>FIND US ON MAPS</a>
                </div>
                <p></p>
              </div>
            </div>

            <div class="mapimg">
              <div class="imagecol">
                <iframe
                  src="https://yandex.com.tr/map-widget/v1/?um=constructor%3A6c34c4287e705d7240b6a54500a4c4a15d26436819c0509439e3ffa40e20548f&amp;source=constructor"
                  width="100%"
                  height="400"
                  frameborder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 pt-4 pb-5 pb-sm-5 pt-sm-4">
      <div class="row flex-wrap justify-content-center">
        <div class="col-6 col-sm-4">
          <div class="cardone row align-items-center justify-content-center">
            <div>
              <div class="col-12 d-flex justify-content-center iconroute">
                <font-awesome-icon class="size" icon="fa-brands fa-figma" />
              </div>
              <div class="col-12 text-center">
                <a>{{ contact[contact.length - 1].phone1 }}</a>
              </div>
              <div class="col-12 text-center">
                <a> {{ contact[contact.length - 1].phone2 }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-sm-4">
          <div class="cardone row align-items-center justify-content-center">
            <div>
              <div class="col-12 d-flex justify-content-center iconroute">
                <font-awesome-icon class="size" icon="fa-brands fa-figma" />
              </div>
              <div class="col-12 text-center">
                <a>{{ contact[contact.length - 1].email1 }}</a>
              </div>
              <div class="col-12 text-center">
                <a>{{ contact[contact.length - 1].email2 }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-4">
          <div class="cardone d-flex align-items-center justify-content-center">
            <div>
              <div class="col-12 d-flex justify-content-center iconroute">
                <font-awesome-icon class="size" icon="fa-brands fa-figma" />
              </div>
              <div class="row justify-content-center">
                <div class="col-8 text-center">
                  <a>{{ contact[contact.length - 1].site }}</a>
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
  name: "ContactBottom",
  data() {
    return {
      contact: {},
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
          this.contact = response.data;
          console.log(this.contact);
        })
        .catch((error) => {
          console.error("Error fetching contact info:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  a {
    font-size: 24px;
    letter-spacing: 1px;
    font-weight: 500;
  }
  p {
    margin-left: 24px;
    width: 70%;
    border-bottom: 3px solid $yellow;
  }
}
.imagecol {
  img {
    width: 100%;
  }
}
.cardone {
  margin: 6px;
  height: 180px;
  border: 1px solid rgb(201, 200, 200);
  border-radius: 10px;
}
.size {
  font-size: 40px;
}
.iconroute {
  padding: 6px;
}
@media only screen and (max-width: 576px) {
  .imagecol {
    img {
      width: 100%;
      height: 300px;
    }
  }
  .cardone {
    margin: 0;
  }
}
</style>
