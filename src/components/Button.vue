<template>
  <button class="bg-btn rounded-[.5rem] btn-empty-shadow hover:btn-shadow transition-colors py-4 text-center body font-bold text-white">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>

<style scoped >


.bg-btn {
    background: linear-gradient(204deg, var(--color-1) 0%, var(--color-2) 100%);
    transition: --color-1 150ms, --color-2 150ms;
}

.bg-btn:hover {
  --color-1: #FF6A3A;
  --color-2: #FF527B;
}
</style>
