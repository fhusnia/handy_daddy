<template>
  
    <default-layout>
       <router-view />
    </default-layout>
</template>

<script>

import DefaultLayout from './components/layout/DefaultLayout.vue';

export default {
  name: 'App',
  components:{
    DefaultLayout
  }
};
</script>

<style>
</style>
