<template>
  <div class="container">
    <div class="pt-5 pb-5">
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row justify-content-center">
            <div class="title">
              <div class="p-1 fs-5 text-center">
                <a>{{ data1 | uppercase }}</a>
              </div>
              <div class="pb-2 text-center">
                <a>{{ data2 }}</a>
              </div>

              <div class="row justify-content-center">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <div class="col-12">
            <div
              class="flex-wrap d-flex justify-content-center gap-4 gap-sm-0 gap-lg-0"
            >
              <div
                class="col-5 col-sm-3 col-lg-3"
                v-for="appliance in appliances"
                :key="appliance.id"
              >
                <router-link
                  class="appliance-link"
                  :to="{ name: 'Appliance', params: { id: appliance.id } }"
                >
                  <div
                    class="cardone row align-items-center justify-content-center hover-effect"
                    :class="{ hovered: hoveredAppliances[appliance.id] }"
                    :style="getBackgroundStyle(appliance.id)"
                    @mouseover="setHovered(appliance.id, true)"
                    @mouseleave="setHovered(appliance.id, false)"
                  >
                    <div>
                      <div class="col-12 text-center">
                        <font-awesome-icon
                          class="size"
                          :icon="['fab', appliance.icon]"
                          style="color: black"
                        />
                      </div>

                      <div class="col-12 text-center">
                        <a class="appliance-title">{{ appliance.title }}</a>
                      </div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div></div>
        <div class="row justify-content-center pt-4">
          <button :style="{ backgroundColor: bgColor, display: disPlay }">
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
import { EventBus } from "../../main";
import axios from "axios";
export default {
  name: "AppLianceS",
  props: {
    bgColor: {
      type: String,
      default: "white",
    },
    disPlay: {
      type: String,
      default: "block",
    },
  },
  data() {
    return {
      data1: "",
      data2: "",
      appliances: [],
      hoveredAppliances: {},
      phoneNumber: "00293929392903",
    };
  },

  created() {
    EventBus.$on("update-title", (data1, data2, data3) => {
      (this.data1 = data1), (this.data2 = data2);
      this.data3 = data3;
    });
  },
  mounted() {
    this.fetchAppliances();
  },
  methods: {
    getBackgroundStyle(applianceId) {
      return {
        backgroundColor: this.hoveredAppliances[applianceId]
          ? "#ffd633"
          : "white",
      };
    },
    async fetchAppliances() {
      try {
        const response = await axios.get("http://localhost:3000/appliances");
        this.appliances = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    setHovered(id, state) {
      this.$set(this.hoveredAppliances, id, state);
    },
    makeCall() {
      console.log(`Calling ${this.phoneNumber}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.cardone {
  cursor: pointer;
}
.hover-effect {
  transition:
    transform 0.3s ease,
    color 0.3s ease;
}
.order-link {
  color: black;
}
.hovered {
  transform: scale(1.05);
}
.title {
  font-weight: 500;
  a {
    letter-spacing: 1px;
  }
  p {
    width: 10%;
    border-bottom: 3px solid $yellow;
  }
}
.appliance-title {
  color: black;
  text-decoration: none;
}
.appliance-link:hover .appliance-title {
  color: black;
  text-decoration: none;
}
.appliance-link {
  background: white !important;
}
.cardone {
  width: 90%;
  margin: 10px;
  height: 160px;
  border: 1px solid rgb(201, 200, 200);
  border-radius: 5px;
}
.size {
  font-size: 35px;
}
button {
  width: 150px;
  padding: 8px;
  margin-top: 18px;
  margin-left: 20px;
  border-radius: 6px;
  border: 1px solid black;
  font-size: 14px;
  font-weight: 600;
}
.coloryellow {
  background: $yellow;
}

@media only screen and (max-width: 576px) {
  .cardone {
    margin: 0;
    width: 100%;
  }
  .title {
    p {
      width: 60%;
      border-bottom: 3px solid $yellow;
    }
  }
}
</style>
