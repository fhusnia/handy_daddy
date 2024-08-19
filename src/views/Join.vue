<template>
    <div>
        <CommonHeader :htmlContent="htmlString"></CommonHeader>
        <JoinMain></JoinMain>
    </div>
</template>

<script>
import CommonHeader from '@/components/layout/CommonHeader.vue';
import JoinMain from '@/components/Join/JoinMain.vue';
export default{
    name:"JoinN",
    components:{
        JoinMain,
        CommonHeader
    },
    data(){
        return{
            htmlString: '<h1 style="color:white;  text-transform: uppercase; font-weight:bold"> JOIn <span style="color:#ffd633">Us</span>  </h1>'

        }
    }
}
</script>

<style lang="scss" scoped>
</style>