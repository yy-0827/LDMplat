<template>
  <div class="synView-page">
    <!-- <h4 class="page-title">综合视图</h4> -->
    <!-- <el-button @click="getToken()">登录</el-button>
    <el-button @click="getDeviceData()">设备数据</el-button>
    <el-button @click="getServiceData(token,gaintype,starttime,endtime)">业务/健康/告警数据接口</el-button>
    <el-button @click="test({'id': '13204','name':'罗刚'})">其他</el-button>
    <div class="answer">{{ deviceData }}</div> -->
    <!-- <div class="console">
      <el-button @click="initialize()">获取地图</el-button>
      <el-button @click="addPoint()">添加标注</el-button>
    </div> -->
    <left-plat></left-plat>
    <back-map ></back-map>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState, mapActions } from "vuex";
import leftPlat from "../components/synView/leftplat";
import backMap from "../components/synView/backmap";
export default {
  components: {
    leftPlat,
    backMap,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/synView.scss";
</style>