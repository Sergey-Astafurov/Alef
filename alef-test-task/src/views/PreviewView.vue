<template>
  <div class="contaner w-1/2 mx-auto">
    <h1>Персонльные данные</h1>
    <div class="font-bold text-xl mb-20">
      {{ mainStore.name }}, {{ mainStore.age }} лет
    </div>

    <div v-if="mainStore.childrenList.length > 0">
      <h3 class="mb-4">Дети</h3>
      <ul class="flex flex-col gap-4">
        <li class="bg-gray-300 font-bold  p-3 w-64 " v-for="(children, index) in mainStore.childrenList" :key="index">
          {{ index+1 }}.
          {{ children.name == "" ? " Имя не указано " : children.name }},
          {{
            children.age == 0 || "" ? " Возраст не указан" : children.age + ' лет'
          }}

        </li>
      </ul>
    </div>
    <div class="" v-else>Без детей</div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "../stores/main";
const mainStore = useMainStore();
</script>

<style scoped></style>
