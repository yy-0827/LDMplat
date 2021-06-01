<template>
  <div class="user-page">
    <h4 class="page-title">用户管理</h4>
    <!-- 搜索框 -->
    <search-box />
    <!-- 信息列表 -->
    <table-list />
    <!-- 列表页数 -->
    <list-info :name="name" />
    <!-- 编辑弹窗 -->
    <edit-user v-if="$store.state.show.edit" />
    <!-- 添加弹窗 -->
    <add-user v-if="$store.state.show.add" />
  </div>
</template>

<script>
import searchBox from "../components/userManager/userSearch";
import tableList from "../components/userManager/userTable";
import listInfo from "../layout/listInfo";
import editUser from "../components/userManager/editUser";
import addUser from "../components/userManager/addUser";
export default {
  data() {
    return {
      name: "User",
    };
  },
  components: {
    searchBox,
    tableList,
    listInfo,
    editUser,
    addUser
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/usermanager.scss";
</style>