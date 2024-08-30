<template>
  <div class="border-b mb-7">

    <header class="py-6 container mx-auto">
      <div class="flex items-center">
        <div class="logo">
          <TheLogo />
        </div>

        <TheNav />
      </div>
    </header>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import TheNav from "../components/TheNav.vue";
import TheLogo from "./TheLogo.vue";
</script>

<style scoped></style>
