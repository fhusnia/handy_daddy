<template>
  <div>
    <ErrorTop></ErrorTop>
    <Appliances></Appliances>
    <BannerContact></BannerContact>
  </div>
</template>

<script>
import Appliances from "@/components/layout/Appliances.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import ErrorTop from "@/components/Error/ErrorTop.vue";
import { EventBus } from "../main";

export default {
  name: "ErRor",
  components: {
    Appliances,
    BannerContact,
    ErrorTop,
  },
  data() {
    return {
      data1: "dont be sad! these services are still availables",
      data3: "Call Now",
    };
  },
  mounted() {
    EventBus.$emit("update-title", this.data1, "", this.data3);
  },
};
</script>

<style lang="scss" scoped></style>
