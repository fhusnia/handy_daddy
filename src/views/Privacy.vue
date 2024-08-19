<template>
    <div>
        <CommonHeader :htmlContent="htmlString"></CommonHeader>
        <PrivacyMain></PrivacyMain>
        <BannerContact></BannerContact>
    </div>
</template>

<script>
import CommonHeader from '@/components/layout/CommonHeader.vue';
import BannerContact from '@/components/layout/BannerContact.vue';
import PrivacyMain from '@/components/Privacy/PrivacyMain.vue';


export default{
    name: "PrivacyY",
    components:{
        CommonHeader,
        BannerContact,
        PrivacyMain
    },
    data(){
        return{
            htmlString: '<h1 style="color:white;  text-transform: uppercase; font-weight:bold">  <span style="color:#ffd633">Privacy</span> Policy </h1>'

        }
    }
}
</script>

<style lang="scss" scoped>

</style>