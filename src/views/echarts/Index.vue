<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
  name: 'Echarts',
  data() {
    return {};
  },
  components: {},
  mounted() {
    const myChart = this.$echarts.init(document.getElementById('main'), null, {
      renderer: 'svg'
    });
    // myChart.showLoading();
    const option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          name: '销量',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    myChart.on('click', function(params) {
      // 控制台打印数据的名称
      console.log(params);
    });
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({})
  },
  computed: {
    ...mapGetters({})
  }
};
</script>

<style scoped lang="scss">
// @import '~@/temp.scss';
</style>
