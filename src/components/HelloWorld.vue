<template>
  <el-button type="primary" @click="text">你好</el-button>
</template>
<script>
import { defineComponent } from 'vue';
import { getCategory } from '@/api/common';
export default defineComponent({
  components: {
  },
  setup() {
    const text = (e =>{
      getCategory().then( res => {
        console.log("res==",res);
      })
    })
    return {
      text
    };
  },
});
</script>