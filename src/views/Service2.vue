<template>
  <div>
    <CommonHeader :htmlContent="htmlString"></CommonHeader>
    <Appliances></Appliances>
    <BannerContact></BannerContact>
  </div>
</template>

<script>
import CommonHeader from "@/components/layout/CommonHeader.vue";
import Appliances from "@/components/layout/Appliances.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import { EventBus } from "../main";

export default {
  name: "SerVice2",
  components: {
    CommonHeader,
    Appliances,
    BannerContact,
  },
  data() {
    return {
      data1: "installation Most Makes & Models:",
      data3: "Call Now",
      htmlString:
        '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"> Contact <span style="color:#ffd633">Us</span>  </h1>',
    };
  },
  mounted() {
    EventBus.$emit("update-title", this.data1, "", this.data3);
  },
};
</script>

<style lang="scss" scoped></style>
