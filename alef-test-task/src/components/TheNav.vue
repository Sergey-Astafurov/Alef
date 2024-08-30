<template>
  <div class="w-full flex justify-center ">
    <ul class="flex gap-6 text-gray-500 text-base">
      <li><router-link to="/form">Форма </router-link></li>
      <li  ><router-link :disabled="false" to="/preview" :class="{' pointer-events-none text-slate-200' : !mainStore.isSubmit}">Превью </router-link></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useMainStore} from '../stores/main';

const mainStore = useMainStore();

</script>

<style scoped></style>
