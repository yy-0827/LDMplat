<template>
  <div>
    <table class="alarm-info-list">
      <thead>
        <tr>
          <th>告警编号</th>
          <th>设备id</th>
          <th>告警类型</th>
          <th>告警触发时间</th>
          <th>当前经纬度</th>
          <th>设备电量</th>
          <th>设备信号强度</th>
          <th>解除告警/取消解除</th>
        </tr>
      </thead>
      <tbody v-if="errinfo">
        <tr>
          {{
            errinfo
          }}
        </tr>
      </tbody>
      <tbody id="table-body" v-else>
        <tr
          v-for="(item, index) in recentlist"
          :key="index"
          :class="{ cancel: !item.als }"
        >
          <td>{{ item.aln }}</td>
          <td>{{ item.di }}</td>
          <td>{{ alarmtype(item.alc) }}</td>
          <td>{{ tritime(item.tt) }}</td>
          <td>{{ calcs(item.rcs) }}</td>
          <td :class="[item.rp <= 20 ? 'red' : '']">{{ item.rp + "%" }}</td>
          <td>{{ calss(item.ss) }}</td>
          <td>
            <div @click="cancelAlarm(item)">
              {{ item.als ? "解除告警" : "取消解除" }}
            </div>
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
    this.getAlarmList({
      page: 1,
      limit: 10,
    });
  },
  updated() {
    if (typeof this.recentlist == "string") {
      this.errinfo = this.recentlist;
    }
  },
  data() {
    return {
      errinfo: "",
    };
  },
  methods: {
    ...mapActions(["getAlarmList"]),
    cancelAlarm(item) {
      item.als = !item.als;
      this.$api.cancelAlarm(item.aln, item.als);
    },
    alarmtype(alc) {
      switch (alc) {
        case 100:
          return "出范围";
        case 200:
          return "电量低";
        case 300:
          return "信号弱";
      }
    },
    tritime(tt) {
      return tt;
    },
    calcs(cs) {
      if (typeof cs != "string") return null;
      const arr = cs.split(",");
      arr[0] = (+arr[0]).toFixed(3);
      arr[1] = (+arr[1]).toFixed(3);
      let str = arr.join(" , ");
      return str;
    },
    calss(ss) {
      let arr = ["无信号", "信号弱", "信号中等", "信号强"];
      return arr[ss];
    },
  },
  computed: {
    ...mapState(["recentlist"]),
  },
};
</script>