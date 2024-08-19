<template>
         <div>
            <main-slider></main-slider>
            <homewhyus></homewhyus>
            <banner-lottery></banner-lottery>
            <appliances :bgColor="buttonColor"></appliances>
            <home-review-sliderr></home-review-sliderr>
            <banner-contact></banner-contact>
         </div>
</template>

<script>
import MainSlider from '../components/Home/HomeMainSlider.vue';
import Homewhyus from '@/components/Home/Homewhyus.vue';
import BannerLottery from '@/components/Home/BannerLottery.vue';
import Appliances from '@/components/layout/Appliances.vue';
import HomeReviewSliderr from '@/components/Home/HomeReviewSliderr.vue';
import BannerContact from '@/components/layout/BannerContact.vue';
import { EventBus } from '../main';

export default {
    name: 'HomePage',
    components: {
        MainSlider,
        Homewhyus,
        BannerLottery,
        Appliances,
        HomeReviewSliderr,
        BannerContact
        
    },
    data(){
      return{
        data1:'home appliances',
        data2: 'We Proudly Provide These Services',
        data3:'See More',
        buttonColor: '#ffd633',
      }
     

    },
    mounted() {
      EventBus.$emit('update-title', this.data1,this.data2,this.data3);
    },
  }
</script>
