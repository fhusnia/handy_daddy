<template>
    <div class="container">
        <div class="p-2 p-sm-4">
            <div class="row pt-5 justify-content-center">
                <div class="col-12 col-sm-8">
                    <BlogTop></BlogTop>
                    <BlogText></BlogText>
                </div>
                <div class="col-12 col-sm-4 pt-5">
                    <BlogCall class="d-none d-sm-block"></BlogCall>
                    <Problems></Problems>
                    <BlogSocial></BlogSocial>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogTop from './BlogTop.vue';
import BlogText from './BlogText.vue';
import BlogCall from './BlogCall.vue';
import Problems from './Problems.vue';
import BlogSocial from './BlogSocial.vue';

export default{
    name:"BlogDetailMain",
    components:{
        BlogTop,
        BlogText,
        BlogCall,
        Problems,
        BlogSocial
    }
}
</script>

<style lang="scss" scoped>

</style>