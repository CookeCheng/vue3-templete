<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';
export default defineComponent({
  name: 'App',
  async mounted() {
    const langRes = await this.appRequest.getLanguage({
      params: { a: 1 },
      headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8',
        'X-Requested-With': 'sdf'
      }
    });
    const i18n: any = this.$i18n;
    for (const lang in langRes) {
      i18n.setLocaleMessage(lang, langRes[lang]);
    }
  },
  methods: {
    ...mapMutations({
      setToken: 'app/setToken'
    })
  },
  computed: {
    ...mapGetters({
      token: 'app/token'
    })
  }
});
</script>
<style lang="scss"></style>
