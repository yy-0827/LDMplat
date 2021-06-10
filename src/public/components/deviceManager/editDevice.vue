<template>
  <div class="modal" id="modal">
    <!-- 遮罩层 -->
    <div
      class="mask"
      id="mask"
      @click="$store.commit('setShow', ['edit', false])"
    ></div>
    <!-- 编辑内容区 -->
    <div class="modal-content">
      <h3>编辑设备信息</h3>
      <form id="edit-form">
        <div>
          <label for="di">设备号</label>
          <el-input
            v-model="iteminfo.di"
            :disabled="true"
            label="di"
          ></el-input>
        </div>
        <div>
          <label for="userid">所属用户</label>
          <el-input
            v-model="iteminfo.userid"
            :disabled="true"
            label="userid"
          ></el-input>
        </div>
        <div>
          <label for="vd">设备厂商</label>
          <el-input label="vd" v-model="iteminfo.vd"></el-input>
        </div>
        <div>
          <label for="dt">设备型号</label>
          <el-input label="dt" v-model="iteminfo.dt"></el-input>
        </div>
        <div>
          <label for="aph">告警联系人电话</label>
          <el-input label="aph" v-model="iteminfo.aph"></el-input>
        </div>
        <div>
          <label for="cph">社区联系人电话</label>
          <el-input label="cph" v-model="iteminfo.cph"></el-input>
        </div>
        <div class="btn">
          <el-button class="confirm" @click="commitInfo">确定</el-button>
          <el-button class="cancel" @click="cancelcommit">取消</el-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // created(){
  //   this.iteminfo = Object.assign(this.iteminfo,this.usedinfo)
  //   console.log(this.iteminfo)
  // },
  data() {
    return {};
  },
  methods: {
    // editInfo(e, prop) {
    //   this.editedinfo[prop] = e.target.value;
    // },
    commitInfo() {
      //判断是否修改了数据
      this.$api
        .updateDevice(this.iteminfo.di, this.iteminfo)
        .then((data) => {
          if (!data.data.data) {
            //没有权限
            this.$message({
              type: "info",
              message: "您没有操作权限！",
            });
          } else {
            this.$message({
              type: "success",
              message: "更新成功!",
            });
          }
          this.$store.dispatch("getDeviceList", {});
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "更新出现错误！",
          });
        });
      this.$store.commit("setShow", ["edit", false]);
    },
    cancelcommit() {
      this.$store.commit("setShow", ["edit", false]);
    },
  },
  computed: {
    iteminfo() {
      return this.$store.state.iteminfo;
    },
  },
};
</script>

<style></style>