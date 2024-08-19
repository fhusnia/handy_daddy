<template>
    <div>
        <BlogMain></BlogMain>
        <BannerContact></BannerContact>
        
    </div>
</template>

<script>
import BannerContact from '@/components/layout/BannerContact.vue';
import BlogMain from '@/components/Blog/BlogMain.vue';
export default{
    name:"BlogG",
    components:{
        BannerContact,
        BlogMain
    }

}
</script>

<style lang="scss" scoped>

</style>