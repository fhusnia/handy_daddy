<template>
  <div class="container">
    <div class="p-sm-3 p-0 pt-5 pb-5">
      <div class="row flex-wrap justify-content-center">
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <div class="title p-4">
              <div class="pb-2">
                <a>FILL AND JOIN US</a>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="d-flex justify-content-center">
            <form @submit.prevent="handleSubmit" class="form p-4">
              <div class="row inpt justify-content-center">
                <div class="col-12 col-sm-6">
                  <label>Full Name</label>
                  <br />
                  <input
                    v-model="form.fullName"
                    :class="['form-control', { 'is-invalid': errors.fullName }]"
                    placeholder="Enter email"
                    @input="clearError('fullName')"
                  />

                  <div v-if="errors.fullName" class="invalid-feedback p-2">
                    !!!This field is required
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <label for="inputState" class="form-label"
                    >Select Field</label
                  >
                  <select
                    v-model="form.servicetype"
                    id="inputState"
                    @change="clearError('servicetype')"
                    class="form-select"
                    :class="[
                      'form-control',
                      { 'is-invalid': errors.servicetype },
                    ]"
                  >
                    <div v-if="errors.servicetype" class="invalid-feedback p-2">
                      !!!This field is required
                    </div>

                    <option disabled value="">Choose...</option>
                    <option>Home Appliances</option>
                    <option>Plumber</option>
                  </select>
                </div>
              </div>

              <div class="row inpt justify-content-center">
                <div class="col-12 col-sm-6">
                  <label>Phone</label>
                  <br />
                  <input
                    v-model="form.phone"
                    @input="clearError('phone')"
                    placeholder="(+994)"
                    :class="['form-control', { 'is-invalid': errors.phone }]"
                  />
                  <div v-if="errors.phone" class="invalid-feedback p-2">
                    !!!This field is required
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <label>Email</label>
                  <br />
                  <input
                    v-model="form.email"
                    @input="clearError('email')"
                    placeholder="example@gmail.com"
                    :class="['form-control', { 'is-invalid': errors.email }]"
                  />
                  <div v-if="errors.phone" class="invalid-feedback p-2">
                    !!!This field is required
                  </div>
                </div>
              </div>

              <div class="row p-2 justify-content-center">
                <div class="col-12">
                  <div class="message">
                    <label>Your Message</label>
                    <br />
                    <textarea
                      v-model="form.message"
                      @input="clearError('message')"
                      placeholder="Write your message"
                      :class="[
                        'form-control',
                        { 'is-invalid': errors.message },
                      ]"
                    ></textarea>
                    <div v-if="errors.message" class="invalid-feedback p-2">
                      !!!This field is required
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-2 row justify-content-center">
                <button type="submit">SEND</button>
              </div>
            </form>
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
  name: "JoinMain",
  data() {
    return {
      form: {
        fullName: "",
        servicetype: "",
        phone: "",
        email: "",
        message: "",
      },
      errors: {
        fullName: false,
        phone: false,
        email: false,
        message: false,
        servicetype: false,
      },
      submissionSuccess: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.validateForm()) {
        return;
      }
      const postData = {
        id: this.generateUUID(),
        ...this.form,
      };
      axios
        .post("http://localhost:3000/joins", postData)
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
        phone: !this.form.phone,
        fullName: !this.form.fullName,
        email: !this.form.email,
        message: !this.form.message,
        servicetype: !this.form.servicetype,
      };
      return Object.values(this.errors).every((error) => !error);
    },
    clearError(field) {
      this.errors[field] = false;
    },
    resetForm() {
      this.form = {
        fullName: "",
        servicetype: "",
        phone: "",
        email: "",
        message: "",
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
.uploadfile {
  input {
    display: none;
  }
}
select {
  margin-left: 6px;
  width: 96%;
  padding: 10px;
  border: 1px solid #8d8d8d73;
}
.title {
  a {
    letter-spacing: 1px;
    font-weight: 500;
  }
  p {
    margin-left: 14px;
    width: 80%;
    border-bottom: 3px solid $yellow;
  }
}
.form {
  width: 80%;
  background-color: white;
  border: 1px solid #8d8d8d73;
  border-radius: 10px;
}
.title {
  font-size: 40px;
  p {
    font-weight: 500;
    margin-top: -12px;
  }
  .line {
    width: 50%;
    border-bottom: 3px solid $yellow;
    margin-bottom: 30px;
  }
}

.inpt {
  input {
    width: 96%;
    margin: 8px;
    padding: 10px;
    border: 1px solid #8d8d8d73;
    border-radius: 6px;
  }
  label {
    padding: 6px;
  }
  input::placeholder {
    color: gray;
    font-size: 14px;
  }
}
input:focus,
button:focus {
  outline: none;
  background-color: rgb(252, 252, 252);
}

.message {
  textarea {
    width: 100%;
    height: 250px;
    border: 1px solid #8d8d8d73;
    border-radius: 6px;
    resize: none;
  }
  label {
    padding-bottom: 14px;
    padding-top: 8px;
  }
}
button {
  width: 30%;
  padding: 7px;
  border-radius: 6px;
  background: $yellow;
  border: 1px solid #8d8d8d73;
  font-size: 15px;
  color: #000000;
  font-weight: 600;
}
textarea::placeholder {
  color: gray;
  font-size: 15px;
  padding: 15px;
}

@media only screen and (max-width: 576px) {
  form {
    width: 100% !important;
  }
  button {
    width: 95%;
  }
}
</style>
