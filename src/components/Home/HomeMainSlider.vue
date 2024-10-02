<template>
  <div>
    <div class="carouselheight">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            v-for="(image, index) in sliderImages"
            :key="image.id"
            :class="{ active: index === 0 }"
            :data-bs-target="'#carouselExampleCaptions'"
            :data-bs-slide-to="index"
            :aria-label="'Slide ' + (index + 1)"
          ></button>
        </div>
        <div class="carousel-inner">
          <div
            v-for="(image, index) in sliderImages"
            :key="image.id"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <img
              :src="image.imageUrl1"
              class="d-block w-100"
              alt="Slide image"
            />

            <div class="carousel-caption overlay d-flex flex-column">
              <div class="headtitle">
                <h1>WE’LL <span>FIX IT</span></h1>
              </div>
              <div class="headdetail">
                <p>
                  Liquam turpis ligula velit augue dictum quam libero.Mattis
                  elementum diam at turpis lectus maecenas.
                </p>
              </div>

              <div
                class="headbtn d-flex flex-column flex-sm-row flex-lg-row gap-3"
              >
                <div class="btn1">
                  <button>
                    <a
                      class="clr"
                      :href="`tel:${phoneNumber}`"
                      @click="makeCall"
                      >CALL NOW</a
                    >
                  </button>
                </div>
                <div class="position-relative btn2">
                  <button @click.stop="toggleModal">Order Now</button>

                  <div
                    class="row justify-content-center justify-sm-content-end justify-lg-content-end"
                  >
                    <div class="col-4">
                      <transition name="modal-slide" type="animation">
                        <div v-show="show" @click.stop class="modal1">
                          <div class="modal-content p-3">
                            <div class="modal-header p-3">
                              <a>We'll get back to you in 30 minutes!</a>
                            </div>
                            <form
                              @submit.prevent="handleSubmit"
                              class="modal-body1 p-2"
                            >
                              <div class="col">
                                <input
                                  v-model="form.fullName"
                                  :class="[
                                    'form-control',
                                    { 'is-invalid': errors.fullName },
                                  ]"
                                  placeholder="Enter email"
                                  @input="clearError('fullName')"
                                />

                                <div
                                  v-if="errors.fullName"
                                  class="invalid-feedback p-2"
                                >
                                  !!!This field is required
                                </div>
                              </div>
                              <div class="col">
                                <input
                                  v-model="form.phone"
                                  @input="clearError('phone')"
                                  placeholder="(+994)"
                                  :class="[
                                    'form-control',
                                    { 'is-invalid': errors.phone },
                                  ]"
                                />
                                <div
                                  v-if="errors.phone"
                                  class="invalid-feedback p-2"
                                >
                                  !!!This field is required
                                </div>
                              </div>
                              <div class="col">
                                <input
                                  v-model="form.address"
                                  @input="clearError('address')"
                                  placeholder="Adress"
                                  :class="[
                                    'form-control',
                                    { 'is-invalid': errors.address },
                                  ]"
                                />
                                <div
                                  v-if="errors.address"
                                  class="invalid-feedback p-2"
                                >
                                  !!!This field is required
                                </div>
                              </div>

                              <div class="d-flex justify-content-center">
                                <div class="col3">
                                  <select
                                    id="date"
                                    v-model="form.date"
                                    :class="[
                                      'form-control',
                                      { 'is-invalid': errors.address },
                                    ]"
                                  >
                                    <option><a>09:00 - 12:00 AM</a></option>
                                    <option>07:00 - 10:00 AM</option>
                                    <option>08:00 - 11:00 AM</option>
                                    <option>09:00 - 12:00 AM</option>
                                  </select>
                                  <div
                                    v-if="errors.date"
                                    class="invalid-feedback p-2"
                                  >
                                    !!!This field is required
                                  </div>
                                </div>

                                <div class="col3">
                                  <input
                                    v-model="form.dateInput"
                                    :class="[
                                      'form-control',
                                      { 'is-invalid': errors.dateInput },
                                    ]"
                                    type="date"
                                  />
                                  <div
                                    v-if="errors.dateInput"
                                    class="invalid-feedback p-2"
                                  >
                                    !!!This field is required
                                  </div>
                                </div>
                              </div>
                              <div class="col">
                                <input
                                  v-model="form.applianceType"
                                  @input="clearError('applianceType')"
                                  placeholder="Appliancetype"
                                  :class="[
                                    'form-control',
                                    { 'is-invalid': errors.applianceType },
                                  ]"
                                />
                                <div
                                  v-if="errors.applianceType"
                                  class="invalid-feedback p-2"
                                >
                                  !!!This field is required
                                </div>
                              </div>
                              <div
                                class="col pt-2 pb-3 d-flex justify-content-center"
                              >
                                <button type="submit">Submit</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </transition>
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
  name: "MainSlider",
  data() {
    return {
      show: false,
      form: {
        fullName: "",
        phone: "",
        address: "",
        date: "",
        dateInput: "",
        applianceType: "",
        phoneNumber: "083883290290",
      },
      sliderImages: [],
      errors: {},
    };
  },

  mounted() {
    this.fetchSliderImages();
  },
  methods: {
    async fetchSliderImages() {
      try {
        const response = await axios.get("http://localhost:3000/sliderimages");
        this.sliderImages = response.data;
        console.log(this.sliderImages);
      } catch (error) {
        console.error(error);
      }
    },
    toggleModal() {
      this.show = !this.show;
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },

    closeModal() {
      this.show = false;
    },
    handleSubmit() {
      this.errors = this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        alert("Form successfully ");
      }
    },
    validateForm() {
      const errors = {};
      for (const key in this.form) {
        if (!this.form[key].trim()) {
          errors[key] = true;
        }
      }
      return errors;
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="date"] {
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}

.carouselheight img {
  height: 600px;
  object-fit: cover;
}
.carouselheight {
  background-color: black;
  z-index: 1;
}
.carousel-inner {
  cursor: pointer;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(2, 2, 2, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.headbtn {
  padding: 12px;
  a {
    text-align: center;
  }
  .btn1 button {
    text-align: center;
    padding: 7px;
    border-radius: 7px;
    background-color: white;
    color: black;
    width: 180px;
    border: none;
    font-weight: 500;
  }
  .btn2 button {
    text-align: center;
    padding: 7px;
    border-radius: 7px;
    cursor: pointer;
    background-color: $yellow;
    width: 180px;
    border: none;
    font-weight: 500;
  }
}
.clr {
  color: black;
}
.headtitle {
  h1 {
    font-size: 80px;
  }
  span {
    color: $yellow;
  }
}
.headdetail {
  p {
    letter-spacing: 1px;
  }
  padding-bottom: 16px;
}
.modal1 {
  background-color: white;
  width: 380px;
  position: absolute;
  border-radius: 6px;
  z-index: 3;
  left: 0;
  top: 50px;
}
.model-content {
  position: absolute;
  z-index: 3;
}
.modal-header {
  color: black;
  a {
    width: 100%;
    text-align: center;
  }
}

.col input {
  width: 317px;
  padding: 12px;
  margin: 8px;
  border-radius: 6px;
  border: 1px solid #a6a6a6;
}

.carousel-inner {
  overflow: unset !important;
}
.col3 input {
  width: 150px;
  padding: 12px;
  margin: 8px;
  border-radius: 6px;
  border: 1px solid #a6a6a6;
}
.col3 select {
  width: 150px;
  padding: 13.4px;
  margin: 8px;
  border-radius: 6px;
  border: 1px solid #a6a6a6;
  option {
    a {
      color: #999 !important;
    }
  }
}
input::placeholder {
  color: #999;
  font-size: 14px;
}
.col button {
  width: 317px !important;
  padding: 13px;
  margin: 16px;
}
@media (max-width: 576px) {
  .headtitle {
    h1 {
      font-size: 42px;
    }
    padding-bottom: 12px;
  }
  .headdetail {
    width: 300px;
    font-size: 14px;
  }
  .headbtn {
    .btn1 {
      button {
        width: 270px;
        padding: 12px;
      }
    }
    .btn2 {
      button {
        width: 270px;
        padding: 12px;
      }
    }
  }
  .modal1 {
    width: 350px;
    left: -42px;
  }
}
</style>
