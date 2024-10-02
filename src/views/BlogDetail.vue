<template>
  <div>
    <BlogDetailMain></BlogDetailMain>
    <BannerContact></BannerContact>
    <Appliances class="d-none d-sm-block" :disPlay="disnone"></Appliances>
  </div>
</template>

<script>
import BlogDetailMain from "@/components/BlogDetail/BlogDetailMain.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import Appliances from "@/components/layout/Appliances.vue";
import { EventBus } from "../main";

export default {
  name: "BlogDetail",
  components: {
    BannerContact,
    BlogDetailMain,
    Appliances,
  },
  data() {
    return {
      data1: "Other Appliance",
      disnone: "none",
    };
  },
  mounted() {
    EventBus.$emit("update-title", this.data1);
  },
};
</script>

<style lang="scss" scoped></style>
