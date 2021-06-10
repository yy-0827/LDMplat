<template>
  <div class="modal" id="modal">
    <!-- 遮罩层 -->
    <div
      class="mask"
      id="mask"
      @click="$store.commit('setShow', ['more', false])"
    ></div>
    <!-- 编辑内容区 -->
    <div class="modal-content moreinfo">
      <h3>更多信息</h3>
      <table class="info-list">
        <tbody>
          <tr v-for="(val, i) in name" :key="i">
            <td>{{ val }}</td>
            <td>{{ calval(prop[i]) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="btn" @click="pagereturn">
          <i class="el-icon-arrow-right" >返回</i>
        <!-- <el-button class="cancel" >返回</el-button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: [
        "设备厂商",
        "设备型号",
        "IP地址",
        "使用人Id",
        "告警联系人电话",
        "社区联系人电话",
        "设备已运行时间",
        "设备更新时间",
        "设备软件版本号",
      ],
      prop: [
        "vd",
        "dt",
        "ip",
        "userid",
        "aph",
        "cph",
        "drt",
        "dut",
        "dav",
      ],
    };
  },
  methods: {
    pagereturn() {
      this.$store.commit("setShow", ["more", false]);
    },
  },
  computed: {
    item() {
      return this.$store.state.iteminfo;
    },
    calval(prop) {
      return (data) => this.item[data];
    },
  },
};
</script>

<style></style>