<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  async mounted() {
    const langRes = await this.appRequest.getLanguage();
    const i18n: any = this.$i18n;
    for (const lang in langRes) {
      i18n.setLocaleMessage(lang, langRes[lang]);
    }
    // console.log(
    //   (this.$i18n as any).setLocaleMessage('zh', { message: { hello: 'dfs' } })
    // );
  }
});
</script>
<style lang="scss"></style>
