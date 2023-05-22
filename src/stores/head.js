import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getHead } from '@/api/layout';
export const useHeadStore = defineStore('head', () => {

  const cateGoryList = ref([]);
  const getHeadList = () => {
    getHead().then(res => {
      if (res.code === '1') {
        cateGoryList.value = res.result
      }
    })
  }
  return { getHeadList ,cateGoryList}
})
