<template>
  <main class="max-w-[58rem] w-full grid grid-rows-[max-content,1fr] md:grid-rows-1 grid-cols-1 md:grid-cols-[1fr,25rem] bg-white md:rounded-[2.25rem] card-shadow md:p-6">
    <section class="md:hidden overflow-hidden relative">
      <GraphicMobile class="" />
    </section>

    <CardSummery @success="onSuccess" />

    <section class="hidden md:block">
      <GraphicDesktop />
    </section>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import GraphicDesktop from './Icons/GraphicDesktop.vue';
import CardSummery from './CardSummery.vue'
import GraphicMobile from './Icons/GraphicMobile.vue';

///// props/emits /////
defineProps();

const emits = defineEmits<{
  (e: 'success'): void;
}>()

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onSuccess = () => {
  emits('success')
}

///// watchers /////

///// lifecycle /////
</script>
