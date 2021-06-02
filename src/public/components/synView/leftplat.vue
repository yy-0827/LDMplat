<template>
  <el-tabs type="border-card" class="console" @tab-click="gettotal()">
    <el-tab-pane label="查找设备/告警">
      <div class="search-bar" style="margin-top: 15px">
        <el-input
          placeholder="请输入id"
          v-model="info.searchid"
          class="input-with-select"
        >
          <el-select v-model="info.searchaim" slot="prepend" placeholder="搜索">
            <el-option label="按用户搜索" value="userid"></el-option>
            <el-option label="按设备搜索" value="di"></el-option>
            <el-option label="按告警搜索" value="aln"></el-option>
          </el-select>
          <el-button
            slot="append"
            icon="el-icon-search"
            @click="searchdevicelist()"
          ></el-button>
        </el-input>
        <i class="el-icon-delete-solid" @click="getstatic()"></i>
      </div>
      <div class="item-list">
        <el-collapse accordion>
          <el-collapse-item v-for="item in devicelist" :key="item.id">
            <!-- 设备标题栏 -->
            <template slot="title">
              <i
                class="el-icon-map-location"
                @click="getstatic([item.ocs, item.rd, item.di])"
              ></i>
              <span>用户id：{{ item.userid }}</span>
              <span>设备id:{{ item.di }}</span>
              <span v-if="item.alarmlist">{{
                item.alarmlist.length
                  ? "告警数:" + item.alarmlist.length + "个"
                  : "无告警信息"
              }}</span>
              <i class="el-icon-edit" @click="edit(item.di, item.rd)"></i>
              <!-- 查看定位，点击后地图移至中心,点击弹出位置信息 -->
            </template>
            <!-- 该行的展开内容区域 -->
            <ul>
              <li class="edit">
                <span>点击地图选取新的点</span>
                <span>设置围栏范围:</span>
                <input placeholder="请输入半径" v-model="editinfo.rd" />
                <i class="el-icon-edit-outline" @click="editradius(item)"></i>
                <i class="el-icon-check" @click="submitedit(editinfo)"></i>
              </li>
              <li v-for="alarm in item.alarmlist" :key="alarm.id">
                <span>告警号:{{ alarm.aln }}</span>
                <span>告警时间：{{ alarm.tt }}</span>
                <i class="el-icon-position" @click="gettracklist(alarm.di)"></i>
              </li>
            </ul>
          </el-collapse-item>
        </el-collapse>
      </div>
    </el-tab-pane>
    <el-tab-pane label="数据统计">
      <div class="static">
        <div>
          <i class="el-icon-s-custom" @click="changepage('userManager')"></i>
          <span>用户总数：{{ total.usercount }}</span>
        </div>
        <el-divider></el-divider>
        <div>
          <i class="el-icon-pie-chart" @click="changepage('deviceManager')"></i>
          <span>注册设备：{{ total.devicecount }}</span>
          <i class="el-icon-loading" @click="changepage('deviceManager')"></i>
          <span>运行中设备：{{ total.rundevice }}</span>
        </div>
        <el-divider></el-divider>
        <div>
          <i class="el-icon-message-solid" @click="changepage('alarmManager')"></i>
          <span>未处理的告警信息：{{ total.alarmbind }}</span>
          <p></p>
          <i class="el-icon-bell" @click="changepage('alarmManager')"></i>
          <span>所有告警信息：{{ total.alarmcount }}</span>
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import bus from "./eventBus";
export default {
  data() {
    return {
      info: {
        searchaim: "",
        searchid: "",
      },
      searchinfo: {},
      showlist: [],
      firstindex: 0,
      total: 0,
      count: 0,
      editinfo: {},
      total: {},
    };
  },
  methods: {
    // searchitem() {
    //   //获取列表
    //   this.total = this.searchlist.length;
    //   let first = this.firstindex;
    //   let last = Math.min(this.total, first + 6);
    //   this.showlist = this.searchlist.slice(first, last);
    // },
    edit(di, rd) {
      this.editinfo.di = di;
      this.editinfo.rd = rd;
      bus.$emit("edit", this.editinfo);
    },
    editradius(item) {
      if (!this.editinfo.rd) {
        this.editinfo.rd = item.rd;
      }
      bus.$emit("givepoint", [item.ocs, this.editinfo.rd, item.di, "true"]);
    },
    searchdevicelist() {
      if (this.info.searchid && this.info.searchaim)
        this.$store.dispatch("searchDevice", this.info);
    },
    getstatic(item) {
      bus.$emit("givepoint", item);
    },
    gettracklist(id) {
      this.$api.gettrack(id).then((data) => {
        if (typeof data.data.data == "object") {
          bus.$emit("givetrack", data.data.data);
        }
      });
    },
    submitedit(info) {
      //提交信息
      console.log(this.editinfo);
      bus.$emit("editend");
    },
    uppage() {
      this.firstindex = this.firstindex - 6;
      let last = Math.min(this.total, this.firstindex + 6);
      this.showlist = this.searchlist.slice(this.firstindex, last);
    },
    downpage() {
      this.firstindex = this.firstindex + 6;
      let last = Math.min(this.total, this.firstindex + 6);
      this.showlist = this.searchlist.slice(this.firstindex, last);
    },
    gettotal() {
      if (JSON.stringify(this.total) != "{}") {
        return false;
      }
      console.log("123");
      this.$api.statistics().then((data) => {
        this.total = data.data.data;
      });
    },
    changepage(name){
      this.$router.push({ name })
    }
  },
  computed: {
    calstate(data) {
      return (data) => {
        return "正常 无告警信息";
      };
    },
    devicelist() {
      return this.$store.state.recentlist;
    },
  },
};
</script>