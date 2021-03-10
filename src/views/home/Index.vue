<template>
  <div class="home">
    sdfas
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {},
  mounted() {
    console.log(this.$utils.dayjs().format('YYYY-MM-DD hh:mm:ss'));
  }
});
</script>
