<template>
    <div>
        <common-header  :htmlContent="htmlString"></common-header>
        <why-us-main></why-us-main>
        <banner-contact></banner-contact>
    </div>
</template>


<script>
import BannerContact from '@/components/layout/BannerContact.vue';
import CommonHeader from '@/components/layout/CommonHeader.vue';
import WhyUsMain from '@/components/WhyUs/WhyUsMain.vue';


export default {
    name: 'WhyUS',
    components: {
        BannerContact,
        CommonHeader,
        WhyUsMain
        
    },
    data(){
        return{
            htmlString: '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"><span style="color:#ffd633">Why</span> Us</h1>'

        }
    },
    

  }

</script>

<style>

</style>