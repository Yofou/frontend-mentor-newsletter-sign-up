<template>
  <li class="flex gap-4 items-center body text-dark-navy"><Tick /> <slot /></li>
</template>

<script setup lang="ts">
  import Tick from './Icons/Tick.vue';
</script>
