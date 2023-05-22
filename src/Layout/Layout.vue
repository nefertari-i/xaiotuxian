<script setup>
import LayoutNav from '../components/LayoutNav.vue'
import LayoutHeader from '../components/LayoutHeader.vue'
import LayoutFooter from '../components/LayoutFooter.vue'
import LayoutSticky from '../components/LayoutSticky.vue';
import { useHeadStore } from '@/stores/head'
import { onMounted } from 'vue';
const head = useHeadStore()
onMounted(() => { head.getHeadList() })

</script>

<template>
  <LayoutSticky></LayoutSticky>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>