<template>
  <div>
    <table class="device-info-list">
      <thead>
        <tr>
          <th>用户id</th>
          <th>设备号</th>
          <th>设备状态</th>
          <th>更新时间</th>
          <th>经纬度</th>
          <th>所在城市</th>
          <th>设备厂商</th>
          <th>设备型号</th>
          <th>其他信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="(item, index) in recentlist" :key="index">
          <td>{{ item.userid }}</td>
          <td>{{ item.di }}</td>
          <td>{{ calst(item.st) }}</td>
          <td>{{ item.rt }}</td>
          <td>{{ calcs(item.ocs) }}</td>
          <td>{{ item.pr }}</td>
          <td>{{ item.vd }}</td>
          <td>{{ item.dt }}</td>
          <!-- <td :class="{ low: item.rp < 20 }">{{ item.rp + "%" }}</td>
          <td>{{ 20 * item.ss + "%" }}</td> -->
          <td>
            <button class="btn moreinfo" @click="alertMoreInfo(item)">
              图
            </button>
          </td>
          <td>
            <button class="btn edit" @click="alertEditInfo(item)">编辑</button>
            <button class="btn del" @click="alertDelInfo(item.di)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  created() {
    this.getDeviceList({
      page: 1,
      limit: 10,
    });
  },
  methods: {
    ...mapActions(["getDeviceList"]),
    ...mapMutations(["setShow", "setItemInfo"]),
    alertEditInfo(info) {
      this.setShow(["edit", true]);
      this.setItemInfo(info);
    },
    alertDelInfo(di) {
      this.$confirm("确认删除该设备?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api.delDevice(di).then(data => {
            //删除的api
            this.getDeviceList({ page: 1 }).catch((err) => console.log(err));
            if (!data.data.data) {
              //没有权限
              this.$message({
                type: "info",
                message: "您没有操作权限！",
              });
            } else {
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    alertMoreInfo(item) {
      this.setShow(["more", true]);
      this.setItemInfo(item);
    },
    calst(st) {
      return (st = st ? "运行中" : "休眠中");
    },
    calcs(cs) {
      if (typeof cs != "string") return null;
      const arr = cs.split(",");
      arr[0] = (+arr[0]).toFixed(3);
      arr[1] = (+arr[1]).toFixed(3);
      let str = arr.join(" , ");
      return str;
    },
    calwt(wt) {
      if (wt) {
        wt = "全天运行";
      }
      return wt;
    },
  },
  computed: {
    ...mapState(["recentlist"]),
  },
};
</script>