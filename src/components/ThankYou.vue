<template>
  <main class="md:max-w-[31.5rem] w-full px-6 md:px-16 pt-[9.31rem] pb-10 md:pt-12 md:pb-16 bg-white md:rounded-[2.25rem] flex flex-col">
    <Tick class="w-16 h-16" />
    <h2 class="heading font-bold text-dark-navy mt-10">Thanks for subscribing!</h2> 
    <p class="mt-6 body text-dark-navy mb-10 md:mb-0">A confirmation email has been sent to <span class="font-bold">ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>

    <Button class="mt-auto md:mt-6 w-full" @click="onDismiss">Dismiss message</Button>
  </main>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import Button from './Button.vue';
import Tick from './Icons/Tick.vue';

///// props/emits /////
defineProps();

const emits = defineEmits<{
  (e: 'dismiss'): void;
}>()

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////
const onDismiss = () => {
  emits('dismiss')
}

///// watchers /////

///// lifecycle /////
</script>
