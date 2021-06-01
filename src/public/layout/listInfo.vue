<template>
  <div class="listinfo">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="10"
      layout="sizes, prev, pager, next, jumper"
      :total="totalitems"
    >
    </el-pagination>
    <span
      >显示第 {{ recentindex[0] }} 到 {{ recentindex[1] }} 条 共
      {{ totalitems }} 条数据</span
    >
  </div>
</template>


<script>
export default {
  props: ["name"],
  methods: {
    handleSizeChange(val) {
      let action = `get${this.name}List`;
      this.$store.dispatch(action, { page:1,limit: val});
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      let action = `get${this.name}List`
      this.$store.dispatch(action, { page: val });
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    totalitems() {
      return this.$store.state.totalitems;
    },
    recentindex() {
      let upindex =
        (this.$store.state.recentpage - 1) * this.$store.state.size + 1;
      let downindex = Math.min(
        this.$store.state.totalitems,
        this.$store.state.recentpage * this.$store.state.size
      );
      return [upindex, downindex];
    },
  },
};
</script>

<style lang="scss">
    @import '@/assets/css/footer/listinfo.scss'
</style>