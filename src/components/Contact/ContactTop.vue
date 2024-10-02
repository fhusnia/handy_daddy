<template>
  <div class="container">
    <div class="p-3 p-sm-5">
      <div class="row flex-column flex-sm-row justify-content-center flex-wrap">
        <div class="col-12 col-sm-5">
          <div class="title">
            <div>
              <a>How can</a>
            </div>
            <div>
              <p>we help you?</p>
            </div>

            <p class="line"></p>
          </div>

          <div class="imagecol d-none d-sm-block">
            <img src="../../assets/images/Handyman.jpg" />
          </div>
        </div>
        <div class="col-12 col-sm-7">
          <div class="row justify-content-center">
            <form @submit.prevent="handleSubmit" class="p-4">
              <div class="row pb-4 inpt justify-content-center">
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
              <div class="row justify-content-center">
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
              <div
                class="pt-3 row justify-content-center justify-sm-content-end"
              >
                <button type="submit">Send</button>
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
  name: "ContactTop",
  data() {
    return {
      form: {
        fullName: "",
        email: "",
        message: "",
      },
      errors: {
        fullName: false,
        email: false,
        message: false,
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
        email: !this.form.email,
        message: !this.form.message,
      };
      return Object.values(this.errors).every((error) => !error);
    },
    clearError(field) {
      this.errors[field] = false;
    },
    resetForm() {
      this.form = {
        fullName: "",
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
.imagecol {
  margin-top: 12px;
  width: 300px;
  height: 240px;
  background-color: #ffd633;
  border-radius: 16px;
  img {
    width: 260px;
    position: relative;
    bottom: 10px;
    margin-left: 30px;
  }
}
form {
  padding: 20px;
  width: 100%;
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
    padding: 10px;
    width: 100%;
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
  width: 160px;
  padding: 6px;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  border: 1px solid #8d8d8d73;
  font-size: 16px;
  color: #454545;
}
textarea::placeholder {
  color: gray;
  font-size: 15px;
  padding: 15px;
}
@media only screen and (max-width: 576px) {
  button {
    width: 92%;
    background-color: #ffd633;
  }
}
</style>
