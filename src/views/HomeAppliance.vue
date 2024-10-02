<template>
  <div>
    <CommonHeader :htmlContent="htmlString"></CommonHeader>
    <Appliances></Appliances>
    <BannerContact
      :backgroundColor="backgroundColor"
      :textColor="colorFont"
      :buttonBackground="btnbckground"
      :border="border"
      :btncolor="btncolor"
    ></BannerContact>
  </div>
</template>

<script>
import CommonHeader from "@/components/layout/CommonHeader.vue";
import Appliances from "@/components/layout/Appliances.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import { EventBus } from "../main";

export default {
  name: "HomeAppliance",
  data() {
    return {
      backgroundColor: "#231F20",
      colorFont: "#ffd633",
      btnbckground: "#ffd633",
      border: "1px solid #ffd633",
      btncolor: "#0a0a0a",
      data1: "home appliances",
      data2: "We Proudly Provide These Services",
      data3: "Call Now",
      htmlString:
        '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"> Home <span style="color:#ffd633">Appliances</span> </h1>',
    };
  },

  components: {
    CommonHeader,
    Appliances,
    BannerContact,
  },

  mounted() {
    EventBus.$emit("update-title", this.data1, this.data2, this.data3);
  },
};
</script>

<style lang="scss" scoped></style>
