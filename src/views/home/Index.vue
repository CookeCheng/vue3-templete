<template>
  <div class="home">
    {{ $t('message.hello') }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  mounted() {
    // console.log(this.$utils.dayjs().format('YYYY-MM-DD hh:mm:ss'));
    // console.log((this.$i18n.locale = 'zh'));
  }
});
</script>
