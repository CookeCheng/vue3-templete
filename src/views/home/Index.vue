<template>
  <div class="home">
    {{ $t('message.hello') }}
    <!-- <div class="lang">
      中文：{{ lang.zh }} <br />
      英文：{{ lang.en }} <br />
      日语：{{ lang.ja }}
    </div>
    <el-form label-width="80px" :model="lang">
      <el-form-item label="中文">
        <el-input v-model="lang.zh"></el-input>
      </el-form-item>
      <el-form-item label="英文">
        <el-input v-model="lang.en"></el-input>
      </el-form-item>
      <el-form-item label="日语">
        <el-input v-model="lang.ja"></el-input>
      </el-form-item>
    </el-form> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  data() {
    return {
      lang: {
        zh: '中文',
        en: '英文',
        ja: '日语'
      }
    };
  },
  mounted() {
    // console.log(this.$utils.dayjs().format('YYYY-MM-DD hh:mm:ss'));
    // console.log((this.$i18n.locale = 'en'));
    enum GenderEnum {
      'male' = '男生',
      'female' = '女生'
    }
    console.log(typeof GenderEnum);
  }
});
</script>
<style lang="scss" scoped>
.home {
  padding: 20px;
  .lang {
    margin: 20px;
  }
}
</style>
