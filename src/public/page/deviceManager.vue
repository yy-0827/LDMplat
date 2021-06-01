<template>
  <div class="device-page">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>设备管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <search-box />
    <!-- 信息列表 -->
    <table-list />
    <!-- 列表页数 -->
    <list-info :name="name" />
    <!-- 编辑弹窗 -->
    <edit-device v-if="$store.state.show.edit" />
    <!-- 更多信息弹窗 -->
    <more-info v-if="$store.state.show.more" />
  </div>
</template>

<script>
import searchBox from "../components/deviceManager/deviceSearch";
import tableList from "../components/deviceManager/deviceTable";
import listInfo from "../layout/listInfo";
import editDevice from "../components/deviceManager/editDevice";
import moreInfo from "../components/deviceManager/moreInfo";
export default {
  data() {
    return {
      name: "Device",
    };
  },
  components: {
    searchBox,
    tableList,
    listInfo,
    editDevice,
    moreInfo,
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/devicemanager.scss";
</style>