<template>
  <div class="device-search">
    <el-input v-model="searchinfo.di" placeholder="设备号"></el-input>
    <el-input v-model="searchinfo.userid" placeholder="用户id"></el-input>
    <el-input v-model="searchinfo.vd" placeholder="设备厂商"></el-input>
    <el-input v-model="searchinfo.dt" placeholder="设备型号"></el-input>
    <!-- <el-button @click="">设备状态控件</el-button> -->
    <el-button @click="submitinfo">查询</el-button>
    <el-button @click="initialize">清空</el-button>
    <el-button @click="alertAddInfo">注册新设备</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchinfo: {},
    };
  },
  methods: {
    submitinfo() {
      //判断是否为空
      if (Object.values(this.searchinfo).join(""))
        this.$store.dispatch("searchDevice", this.searchinfo);
    },
    initialize() {
      this.searchinfo = {};
      this.$store.commit("setSearchLock", false);
      this.$store.dispatch("getDeviceList", { page: 1 });
    },
    alertAddInfo() {
      this.$router.push({ name: "addDevice" });
    },
    renewlist() {
      this.$store.dispatch("getDeviceList", { page: 1, limit: 5 });
    },
  },
};
</script>