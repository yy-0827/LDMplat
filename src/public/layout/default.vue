<template>
  <div class="page-default">
      <div>
          <my-header />
      </div>
      <div>
          <my-menu />
      </div>
      <router-view />
  </div>
  
</template>

<script>
import myHeader from '@/components/header/topBar';
import myMenu from '@/components/header/topMenu'
export default {
    components:{
        myHeader,
        myMenu
    }
};
</script>

<style lang="scss">
    @import "@/assets/css/header/top.scss";
</style>