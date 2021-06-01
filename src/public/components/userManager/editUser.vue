<template>
  <div class="modal" id="modal">
    <!-- 遮罩层 -->
    <div
      class="mask"
      id="mask"
      @click="$store.commit('setShow', ['edit',false])"
    ></div>
    <!-- 编辑内容区 -->
    <div class="modal-content">
      <h3>编辑用户信息</h3>
      <form id="edit-form">
        <div>
          <label for="userid">用户id</label>
          <el-input
            v-model="iteminfo.userid"
            :disabled="true"
            label="userid"
          ></el-input>
        </div>
        <div>
          <label for="name">姓名</label>
          <el-input
            v-model="iteminfo.name"
            label="name"
          ></el-input>
        </div>
        <div>
          <label for="nick">昵称</label>
          <el-input
            label="nick"
            v-model="iteminfo.nick"
          ></el-input>
        </div>
        <!-- <div>
          <label for="sex">性别</label>
          <el-input
            label="sex"
            v-model="iteminfo.sex"
          ></el-input>
        </div> -->
        <div>
          <label for="bir">生日</label>
          <el-input
            label="bir"
            v-model="iteminfo.bir"
          ></el-input>
        </div>
        <div>
          <label for="ph">联系电话</label>
          <el-input
            label="ph"
            v-model="iteminfo.ph"
          ></el-input>
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
  data() {
    return {
    };
  },
  methods: {
    commitInfo() {
      //判断是否修改了数据
      this.$store
        .dispatch("updateUser",this.iteminfo)
        .then((data) => {
          this.$message({
            type: "success",
            message: "更新成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "更新出现错误！",
          });
        });
      this.$store.commit("setShow", ['edit',false]);
    },
    cancelcommit() {
      this.$store.commit("setShow", ['edit',false]);
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