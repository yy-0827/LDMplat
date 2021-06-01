<template>
  <div>
    <table class="user-info-list">
      <thead>
        <tr>
          <th>用户id</th>
          <th>姓名</th>
          <th>性别</th>
          <th>年龄</th>
          <th>联系电话</th>
          <th>设备数</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="(item, index) in recentlist" :key="index">
          <td>{{ item.userid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.sex ? "女" : "男" }}</td>
          <td>{{ calage(item.bir) }}</td>
          <td>{{ item.ph }}</td>
          <td>{{ item.devicecount }}</td>
          <td>
            <button class="btn edit" @click="alertEditInfo(item)">编辑</button>
            <button class="btn del" @click="alertDelInfo(item.userid)">
              解绑
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>``

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.getUserList({
      page: 1,
      limit: 10,
    });
  },
  methods: {
    ...mapMutations(["setShow"]),
    ...mapActions(["getUserList", "delUser"]),
    alertDelInfo(id) {
      this.$confirm(`确定删除id为${id}的用户?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.delUser(id).then(() => {
          //删除的api
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        });
      });
    },
    alertEditInfo(info) {
      this.$store.commit("setShow", ["edit", true]);
      this.$store.commit("setItemInfo", info);
    },
    calage(bir) {
      bir = new Date(bir);
      let year = 1000 * 60 * 60 * 24 * 365;
      let now = new Date();
      return parseInt((now - bir) / year);
    },
  },
  computed: {
    ...mapState(["recentlist"]),
  },
};
</script>