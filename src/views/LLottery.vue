<template>
    <div>

            <header-lottery></header-lottery>
            <banner-contact></banner-contact>
      
    </div>
 
</template>

<script>
    import BannerContact from '@/components/layout/BannerContact.vue';
    import HeaderLottery from '@/components/Lottery/HeaderLottery.vue';

    export default{
        name:"LLottery",
        components:{
            BannerContact,
            HeaderLottery
          
        }
    }
</script>

<style>
</style>