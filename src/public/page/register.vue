<template>
  <div class="page-register">
    <div class="register-form">
      <p class="page-title">注册用户账号</p>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input type="text" v-model="form.loginId"></el-input>
        </el-form-item>
        <el-form-item label="邀请码">
          <el-input type="text" v-model="form.invitecode"></el-input>
        </el-form-item>
        <el-form-item label="输入密码">
          <el-input
            type="password"
            v-model="form.loginPwd"
            @input="defineStrength"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <p>{{ info }}</p>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="cancel">取消</el-button>
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
        name: "",
        loginId: "",
        invitecode: "",
        loginPwd: "",
        repassword: "",
      },
      strengthClass: "",
      info: "",
    };
  },
  methods: {
    onSubmit() {
      if (
        //确保信息完整
        this.form.name &&
        this.form.loginId &&
        this.form.invitecode &&
        this.form.loginPwd
      ) {
        if (this.form.loginPwd != this.form.repassword) {
          this.info = "!!! 输入密码不一致";
          return false;
        }
        this.$api
          .register(this.form)
          .then((data) => {
            if (data.data.data.id) {
              this.$message({
                type: "success",
                message: "注册成功!",
              });
              this.info = "";
              this.$store.commit("login",data.data.data.name);
              this.$router.push({ name: "synView" }); //跳转至首页
            }
          })
          .catch((err) => {
            console.log(err);
            this.$message({
              type: "info",
              message: "系统未响应!",
            });
          });
      } else {
        this.info = "!!! 缺少信息";
        return false;
      }
    },
    defineStrength() {
      var regStr = /[a-zA-Z]+/g;
      var regNum = /(\d)+/g;
      var strongth =
        this.form.loginId.match(regStr) && this.form.loginId.match(regNum);
      if (this.form.loginId.length > 8 && strongth) {
        this.strengthClass = "strong";
      } else if (!this.form.loginId) {
        this.strengthClass = "";
      } else if (this.form.loginId.length <= 4) {
        this.strengthClass = "week";
      } else {
        this.strengthClass = "normal";
      }
    },
    cancel() {
      this.info = "";
      this.form = {};
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/register.scss";
</style>