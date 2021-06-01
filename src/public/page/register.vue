<template>
  <div class="page-register">
    <div class="register-form">
      <p class="page-title">注册用户账号</p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input type="text" v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input type="text" v-model="form.loginid"></el-input>
        </el-form-item>
        <el-form-item label="邀请码">
          <el-input type="text" v-model="form.invitecode"></el-input>
        </el-form-item>
        <el-form-item label="输入密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
        <div class="pw-strength">
          <label>*密码强度</label>
          <div :class="['bar', strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        loginid:"",
        invitecode: "",
        password: "",
        repassword: "",
      },
      strengthClass: "weak",
    };
  },
  methods: {
    onSubmit() {
      this.$api.register(this.form).then((data) => {
        if (data.data.data.id) {
          this.$message({
            type: "success",
            message: "注册成功!",
          });
          this.$router.push({ name: "synView" }); //跳转至首页
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/register.scss";
</style>