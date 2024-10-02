<template>
  <div class="cmnheader cursor-pointer" @click="closeModal">
    <div class="cmnback d-flex align-items-center">
      <div class="container">
        <div class="row justify-content-center align-items-center">
          <div class="content">
            <div
              class="headtitle d-flex justify-content-center"
              v-html="htmlContent"
            ></div>

            <div class="headbtn d-none d-sm-block">
              <div class="d-flex justify-content-center">
                <div class="btn1 m-2">
                  <button>
                    <a
                      class="clr"
                      :href="`tel:${phoneNumber}`"
                      @click="makeCall"
                      >CALL NOW</a
                    >
                  </button>
                </div>
                <div class="position-relative btn2 m-2">
                  <button @click.stop="toggleModal">Order Now</button>

                  <div class="d-flex justify-content-end">
                    <div class="col-4">
                      <transition name="modal-slide" type="animation">
                        <div v-show="show" class="modal1">
                          <div class="modal-content p-3">
                            <div class="modal-header p-2">
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
import Swal from "sweetalert2";
import axios from "axios";
export default {
  name: "CommonHeader",
  data() {
    return {
      show: false,
      phoneNumber: "083883290290",
      form: {
        fullName: "",
        phone: "",
        address: "",
        date: "",
        dateInput: "",
        applianceType: "",
      },
      errors: {
        fullName: false,
        phone: false,
        address: false,
        date: false,
        dateInput: false,
        applianceType: false,
      },
    };
  },
  props: {
    htmlContent: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleModal() {
      this.show = !this.show;
    },

    closeModal() {
      this.show = false;
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }
      const postData = {
        id: this.generateUUID(),
        ...this.form,
      };
      axios
        .post("http://localhost:3000/contactforms", postData)
        .then((response) => {
          this.submissionSuccess = true;
          this.resetForm();
          console.log(response);

          Swal.fire({
            title: "Success!",
            text: "Your information has been saved successfully.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            willClose: () => {
              this.submissionSuccess = false;
            },
          });
        })
        .catch((error) => {
          this.submissionSuccess = false;
          console.error(error);

          Swal.fire({
            title: "Error!",
            text: "There was a problem saving your information.",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: true,
            willClose: () => {
              this.submissionSuccess = false;
            },
          });
        });
    },
    validateForm() {
      this.errors = {
        fullName: !this.form.fullName,
        phone: !this.form.phone,
        address: !this.form.address,
        date: !this.form.date,
        dateInput: !this.form.dateInput,
        applianceType: !this.form.applianceType,
      };
      return Object.values(this.errors).every((error) => !error);
    },
    clearError(field) {
      this.errors[field] = false;
    },
    resetForm() {
      this.form = {
        fullName: "",
        phone: "",
        address: "",
        date: "",
        dateInput: "",
        applianceType: "",
      };
      this.errors = {};
      this.submissionSuccess = false;
    },

    generateUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        let r = (Math.random() * 16) | 0;
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cmnheader {
  height: 400px;
  background-image: url("../../assets/images/repairman3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.cmnback {
  background-color: rgba(2, 2, 2, 0.7);
  height: 400px;
}

input[type="date"] {
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
}
.headtitle {
  h1 {
    font-size: 60px;
    color: white;
  }
  span {
    color: #ffd633;
  }
}

.headbtn {
  padding: 12px;
  a {
    text-align: center;
  }
  .btn1 button {
    text-align: center;
    padding: 7px;
    border-radius: 3px;
    background-color: white;
    color: black;
    width: 180px;
    border: none;
  }
  .btn2 button {
    text-align: center;
    padding: 7px;
    border-radius: 3px;
    background-color: #ffd633;
    width: 180px;
    border: none;
  }
}
.headtitle {
  h1 {
    font-size: 80px;
  }
  span {
    color: #ffd633;
  }
}
.clr {
  color: black;
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
  left: 0%;
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
}
input::placeholder {
  color: #999;
  font-size: 14px;
}
.col button {
  width: 330px !important;
  padding: 13px;
  margin: 9px;
}
</style>
