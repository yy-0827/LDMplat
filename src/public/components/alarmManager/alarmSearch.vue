<template>
  <div class="alarm-search">
    <div class="input-container">
      <div class="select-range">
        <span>按用户/设备/告警id搜索</span>
        <el-select v-model="info.searchaim" placeholder="显示全部">
          <el-option
            v-for="item in aimoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="searchid">
        <span>请输入id</span>
        <el-input v-model="info.searchid" placeholder=""></el-input>
      </div>
      <div class="select-type">
        <span>选择告警类型</span>
        <el-select v-model="info.searchtype" placeholder="显示全部">
          <el-option
            v-for="item in alarmoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="choose-date">
        <el-checkbox v-model="info.alldate">选择所有日期</el-checkbox>
        <el-date-picker
          v-model="info.daterange"
          type="date"
          placeholder="选择日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
      <div class="choose-time">
        <el-checkbox v-model="info.alltime">选择全部时间</el-checkbox>
        <el-time-picker
          is-range
          v-model="info.timerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围"
          value-format="HH:mm:ss"
        >
        </el-time-picker>
      </div>
    </div>
    <div></div>
    <div class="buttom-container">
      <el-button @click="submitinfo">查询</el-button>
      <el-button @click="initialize">重置</el-button>
      <!-- <el-checkbox v-model="info.unbind">显示解绑信息</el-checkbox> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        searchaim: "",
        searchid: "",
        searchtype: "",
        daterange: "",
        alltime: true,
        alldate: true,
        unbind: true,
        //timerange: [new Date(), new Date()],
      },
      aimoptions: [
        {
          label: "按用户id搜索",
          value: "userid",
        },
        {
          label: "按设备id搜索",
          value: "di",
        },
        {
          label: "按告警id搜索",
          value: "aln",
        },
      ],
      alarmoptions: [
        {
          label: "I型告警（出范围）",
          value: 100,
        },
        {
          label: "II型告警（电量低）",
          value: 200,
        },
        {
          label: "III型告警（信号弱）",
          value: 300,
        },
      ],
    };
  },
  methods: {
    submitinfo() {
      if (!this.info.timerange) {
        this.info.alltime = true;
      }
      if (!this.info.daterange) {
        this.info.alldate = true;
      }
      this.$store.dispatch("searchAlarm", this.info);
    },
    initialize() {
      this.info = {
        alltime: true,
        alldate: true,
        unbind: true
      };
      this.$store.commit("setSearchLock", false);
      this.$store.dispatch("getAlarmList", { page: 1, limit: 10  });
    },
  },
};
</script>
