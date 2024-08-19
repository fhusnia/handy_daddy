<template>
    <div>
        <CommonHeader :htmlContent="htmlString" :disPlay="disnone"></CommonHeader>
        <RefrigeratorMain></RefrigeratorMain>
        <BannerContact></BannerContact>
        <RefrigeratorbodyMain></RefrigeratorbodyMain>
        <Call></Call>
        <Appliances :disPlay="disnone"></Appliances>

    </div>
   

</template>

<script>
import RefrigeratorMain from '@/components/Refrigerator/RefrigeratorMain.vue';
import CommonHeader from '@/components/layout/CommonHeader.vue';
import Appliances from '@/components/layout/Appliances.vue';
import BannerContact from '@/components/layout/BannerContact.vue';
import RefrigeratorbodyMain from '@/components/Refrigerator/RefrigeratorbodyMain.vue';
import Call from '@/components/Refrigerator/Call.vue';
import { EventBus } from '../main';

export default{
    name:'RefriGerator',
    components:{
        RefrigeratorMain,
        CommonHeader,
        Appliances,
        BannerContact,
        RefrigeratorbodyMain,
        Call

    },
    data(){
        return{
            data1:'Other appliance',
            disnone:'none',
            htmlString: '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"><span style="color:#ffd633">freezer</span> Repair</h1>'

        }
    },
    mounted() {
        EventBus.$emit('update-title', this.data1);
    }
}
</script>

<style>
</style>