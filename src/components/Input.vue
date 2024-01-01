<template>
  <label class="flex flex-col gap-2">
    <span class="w-full flex justify-between items-center">
      <span class="body-small text-dark-navy font-bold"><slot /></span>
      <span v-if="hasError" class="body-small text-vermilion font-bold">{{ props.errorMsg }}</span>
    </span>
    <input
      class="px-6 py-4 border border-grey/25 rounded-[.5rem] text-dark-navy placeholder:text-dark-navy/50 body"
      :class="{ 'border-vermilion bg-vermilion/15 text-vermilion placeholder:text-vermilion': hasError }"
      v-model="modelValue"
      :placeholder="props.placeholder"
      type="text"
    />
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

///// props/emits /////
const props = defineProps<{
  placeholder?: string;
  errorMsg?: string;
}>();

///// refs, provide or inject then variables /////
const modelValue = defineModel<string>();

///// computed /////
const hasError = computed(() => {
  return props.errorMsg != undefined;
});

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
