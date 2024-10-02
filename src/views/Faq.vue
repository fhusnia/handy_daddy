<template>
  <div>
    <CommonHeader :htmlContent="htmlString" :disPlay="disnone"></CommonHeader>
    <FAQMain></FAQMain>
    <BannerContact></BannerContact>
  </div>
</template>

<script>
import CommonHeader from "@/components/layout/CommonHeader.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import FAQMain from "@/components/FAQ/FAQMain.vue";
export default {
  name: "FAQ",
  components: {
    CommonHeader,
    BannerContact,
    FAQMain,
  },
  data() {
    return {
      htmlString:
        '<h1 style="color:white;  text-transform: uppercase; font-weight:bold">  <span style="color:#ffd633">Frequently Asked </span> Questions </h1>',
      disnone: "none",
    };
  },
};
</script>

<style lang="scss" scoped></style>
