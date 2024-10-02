<template>
  <div>
    <CommonHeader :htmlContent="htmlString"></CommonHeader>
    <ContactTop></ContactTop>
    <BannerContact></BannerContact>
    <ContactBottom></ContactBottom>
  </div>
</template>

<script>
import ContactTop from "@/components/Contact/ContactTop.vue";
import BannerContact from "@/components/layout/BannerContact.vue";
import CommonHeader from "@/components/layout/CommonHeader.vue";
import ContactBottom from "@/components/Contact/ContactBottom.vue";

export default {
  name: "ContactC",
  components: {
    ContactTop,
    BannerContact,
    CommonHeader,
    ContactBottom,
  },
  data() {
    return {
      htmlString:
        '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"> Contact <span style="color:#ffd633">Us</span> </h1>',
    };
  },
};
</script>

<style></style>
