<template>
    <div>
        <CommonHeader :htmlContent="htmlString"></CommonHeader>
        <RefRepairMain></RefRepairMain>
        <BannerContact></BannerContact>
        <Appliances :disPlay='disnone'></Appliances>
      
    </div>
</template>

<script>
import CommonHeader from '@/components/layout/CommonHeader.vue';
import BannerContact from '@/components/layout/BannerContact.vue';
import Appliances from '@/components/layout/Appliances.vue';
import RefRepairMain from '@/components/RefrigeratorRepair/RefRepairMain.vue';
import { EventBus } from '../main';

export default{
    name:"RefRepair",
    components:{
        CommonHeader,
        BannerContact,
        Appliances,
        RefRepairMain
    },
    data(){
        return{
            data1:'Other appliance',
            disnone:'none',
            htmlString: '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"><span style="color:#ffd633">Refrigerator</span> Repair</h1>'

        }
    },
    mounted() {
        EventBus.$emit('update-title', this.data1);
    },
  
}
</script>

<style lang="scss" scoped>
</style>