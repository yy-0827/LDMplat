<template>
  <div class="alarm-page">
    <h4 class="page-title">告警管理</h4>
    <!-- 搜索框 -->
    <search-box />
    <!-- 信息列表 -->
    <table-list />
    <!-- 列表页数 -->
    <list-info :name="name" />
  </div>
</template>

<script>
import searchBox from "../components/alarmManager/alarmSearch";
import tableList from "../components/alarmManager/alarmTable";
import listInfo from "../layout/listInfo";
// import editAlarm from "../components/userManager/editUser";
// import addAlarm from "../components/userManager/addUser";
export default {
  data() {
    return {
      name: "Alarm",
    };
  },
  components: {
    searchBox,
    tableList,
    listInfo
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/alarmManager.scss";
</style>