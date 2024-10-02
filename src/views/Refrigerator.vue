<template>
  <div>
    <CommonHeader :htmlContent="htmlString" :disPlay="disnone"></CommonHeader>
    <RefrigeratorMain></RefrigeratorMain>
    <RefrigeratorbodyMain></RefrigeratorbodyMain>
    <BannerContact></BannerContact>
  </div>
</template>

<script>
import RefrigeratorMain from "@/components/Refrigerator/RefrigeratorMain.vue";
import CommonHeader from "@/components/layout/CommonHeader.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import RefrigeratorbodyMain from "@/components/Refrigerator/RefrigeratorbodyMain.vue";
import { EventBus } from "../main";

export default {
  name: "RefriGerator",
  components: {
    RefrigeratorMain,
    CommonHeader,
    BannerContact,
    RefrigeratorbodyMain,
  },
  data() {
    return {
      data1: "Other appliance",
      disnone: "none",
      htmlString:
        '<h1 style="color:white;  text-transform: uppercase; font-weight:bold">Repair</h1>',
    };
  },
  mounted() {
    EventBus.$emit("update-title", this.data1);
  },
};
</script>

<style></style>
