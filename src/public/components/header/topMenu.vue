<template>
  <div class="top-menu">
    <dl class="menu">
      <dd
        :class="{ active: recentpage == 'synView' }"
        @click="changepage('synView')"
      >
        <router-link :to="{ path: '/synView' }">综合视图</router-link>
      </dd>
      <dd
        :class="{ active: recentpage == 'deviceManager' }"
        @click="changepage('deviceManager')"
      >
        <router-link :to="{ path: '/deviceManager' }">设备管理</router-link>
      </dd>
      <dd
        :class="{ active: recentpage == 'userManager' }"
        @click="changepage('userManager')"
      >
        <router-link :to="{ path: '/userManager' }">用户管理</router-link>
      </dd>
      <dd
        :class="{ active: recentpage == 'alertManager' }"
        @click="changepage('alertManager')"
      >
        <router-link :to="{ path: '/alarmManager' }">告警信息</router-link>
      </dd>
    </dl>
    <div class="user-info">
      <span class="iconfont">&#xe605;</span>
      <router-link :to="{ path: '/login' }">{{loginname}}</router-link>
      <router-link :to="{ path: '/register' }" class="gray">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recentpage: "synView",
    };
  },
  methods: {
    changepage(name) {
      this.recentpage = name;
    },
    // handleClick(tab, event) {
    //   this.$router.push({ name: tab.name });
    // },
  },
  computed:{
    loginname: function(){
      return this.$store.state.loginname || "yy"
    }
  }
};
</script>