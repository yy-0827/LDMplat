<template>
  <div class="addDevice-page" id="modal">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/deviceManager' }"
        >设备管理</el-breadcrumb-item
      >
      <el-breadcrumb-item>添加设备</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 编辑内容区 -->
    <div class="addinfo">
      <h3>注册设备信息</h3>
      <el-form ref="form" :model="newinfo" id="add-form" >
        <el-form-item label="用户id">
          <el-input type="text" v-model="newinfo.userid"></el-input>
        </el-form-item>
        <el-form-item label="设备厂商">
          <el-input type="text" v-model="newinfo.vd"></el-input>
        </el-form-item>
        <el-form-item label="设备型号">
          <el-input type="text" v-model="newinfo.dt"></el-input>
        </el-form-item>
        <el-form-item label="设备绑定时间">
          <el-input type="text" v-model="newinfo.drt"></el-input>
        </el-form-item>
        <el-form-item label="设备ip地址">
          <el-input type="text" v-model="newinfo.ip"></el-input>
        </el-form-item>
        <el-form-item label="告警联系人电话">
          <el-input type="text" v-model="newinfo.aph"></el-input>
        </el-form-item>
        <el-form-item label="社区联系人电话">
          <el-input type="text" v-model="newinfo.cph"></el-input>
        </el-form-item>
        <el-form-item label="设备软件版本号">
          <el-input type="text" v-model="newinfo.dav"></el-input>
        </el-form-item>
        <el-form-item class="btn">
          <el-button class="confirm" @click="commitInfo">上传信息</el-button>
          <el-button class="cancel" @click="cancelcommit">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newinfo: {},
    };
  },
  methods: {
    commitInfo() {
      this.$store
        .dispatch("addDevice", this.newinfo)
        .then((data) => {
          this.$message({
            type: "success",
            message: "添加成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "出现错误！",
          });
        });
      this.$router.push({ name: "deviceManager" });
    },
    cancelcommit() {
      this.$router.push({ name: "deviceManager" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/addDevice.scss";
</style>