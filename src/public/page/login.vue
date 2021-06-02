<template>
  <div class="page-login">
    <div class="login-form">
      <div class="login-pannel">
        <p>登录</p>
      </div>
      <div class="form">
        <p>{{ info }}</p>
        <el-input
          v-model="userinfo"
          placeholder="用户名/id"
          type="text"
        ></el-input>
        <el-input
          v-model="loginPwd"
          placeholder="密码"
          type="password"
        ></el-input>
        <div class="memory-code">
          <el-switch
            v-model="rememberWord"
            active-color="#36a"
            inactive-color="#ddd"
          >
          </el-switch>
          <p>记住密码</p>
          <a href="#">忘记密码？</a>
        </div>
        <el-button type="primary" @click="login()">登录</el-button>
        <div class="foot">
          <span>没有账号？</span>
          <router-link :to="{ path: '/register' }">注册一个</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: "",
      loginPwd: "",
      info: "",
      rememberWord: true,
    };
  },
  methods: {
    login() {
      //当用户填写信息不完整
      if (this.userinfo == "") {
        this.info = "请填写用户/id";
        return false;
      }
      if (this.loginPwd == "") {
        this.info = "请输入密码";
        return false;
      }
      this.$api
        .login(this.userinfo, this.loginPwd)
        .then((data) => {
          //成功登录
          if (data.data.data.id) {
            this.$message({
              type: "success",
              message: "登录成功!",
            });
            this.$store.commit("login", data.data.data.name);
            this.$router.push({ name: "synView" }); //跳转至首页
          } else {
            //账户不存在
            this.info = data.data.data.userexist
              ? "密码不正确"
              : "该用户不存在";
          }
        })
        .catch((err) => {
          console.log(err);
          this.$message({
            type: "info",
            message: "系统未响应!",
          });
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/page/login.scss";
</style>