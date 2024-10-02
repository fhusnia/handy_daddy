<template>
  <div class="container">
    <div class="row flex-wrap justify-content-center">
      <div class="p-0 p-sm-4">
        <div class="col-12">
          <div class="title p-3 text-center text-sm-start">
            <h4>About services</h4>
            <div class="d-flex d-block d-sm-none justify-content-center">
              <p></p>
            </div>
            <p class="d-none d-sm-block"></p>
          </div>
          <div class="col-12 p-2">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div
                class="accordion-item"
                v-for="(faq, index) in faqs"
                :key="faq.id"
              >
                <h2 class="accordion-header" :id="'flush-heading' + index">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="'#flush-collapse' + index"
                    aria-expanded="false"
                    :aria-controls="'flush-collapse' + index"
                  >
                    {{ faq.question }}
                  </button>
                </h2>
                <div
                  :id="'flush-collapse' + index"
                  class="accordion-collapse collapse"
                  :aria-labelledby="'flush-heading' + index"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">{{ faq.description }}</div>
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
  name: "FAQMain",
  data() {
    return {
      faqs: [],
    };
  },
  mounted() {
    this.getFaqs();
  },
  methods: {
    getFaqs() {
      axios
        .get("http://localhost:3000/faqs")
        .then((response) => {
          this.faqs = response.data;
        })
        .catch((error) => {
          console.error("Error fetching FAQ data:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  p {
    width: 13%;
    border-bottom: 3px solid $yellow;
  }
}
.accordion-button {
  background: rgb(245, 244, 244) !important;
}
.accordion-body {
  background: rgb(245, 244, 244) !important;
}
.accordion-button:focus {
  box-shadow: none !important;
}
@media only screen and (max-width: 576px) {
  .title {
    p {
      width: 40%;
      border-bottom: 3px solid $yellow;
    }
  }
}
</style>
