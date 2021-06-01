<template>
  <div class="user-search">
    <el-input v-model="userid" placeholder="用户id"></el-input>
    <el-input v-model="name" placeholder="姓名"></el-input>
    <el-button @click="searchUser">查询</el-button>
    <el-button @click="initialize">清空</el-button>
    <el-button @click="alertAddInfo">注册用户</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userid: "",
      name: "",
    };
  },
  methods: {
    searchUser() {
      if (this.userid || this.name) {
        let info = { userid: this.userid, name: this.name };
        this.$store.dispatch("searchUser", info);
      }
    },
    initialize() {
      this.userid = "",
      this.name = "",
      this.$store.commit("setSearchLock", false);
      this.$store.dispatch("getUserList", { page: 1 });
    },
    alertAddInfo() {
      this.$store.commit("setShow",['add',true])
    }
  },
};
</script>