<template>
  <section class="px-6 md:px-10 pt-10 pb-10 md:pb-0 md:pt-[4.56rem]">
    <h2 class="heading text-dark-navy font-bold">Stay updated!</h2>
    <p class="mt-6 body text-dark-navy">Join 60,000+ product managers receiving monthly updates on:</p>

    <ul class="flex flex-col gap-[.63rem] mt-6">
      <SummaryListItem class="flex gap-4 items-center">
        Product discovery and building what matters
      </SummaryListItem>
      <SummaryListItem class="flex gap-4 items-center">
        Measuring to ensure updates are a success
      </SummaryListItem>
      <SummaryListItem>
        And much more!
      </SummaryListItem>
    </ul>

    <form class="flex flex-col gap-6 mt-10 md:max-w-[23.5rem] w-full" @submit.prevent="onSubmit">
      <Input v-model="email" placeholder="email@company.com" :errorMsg="errorMsg">Email address</Input>
      <Button>Subscribe to monthly newsletter</Button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { isEmail } from '../utils/validation'
import SummaryListItem from "./SummeryListItem.vue";
import Input from "./Input.vue";
import Button from './Button.vue'

///// props/emits /////
defineProps();

const emits = defineEmits<{
  (e: 'success'): void;
}>()

///// refs, provide or inject then variables /////
const email = ref('')
const errorMsg = ref()

///// computed /////

///// methods /////
const onSubmit = () => {
  const result = isEmail.safeParse(email.value)

  if (result.success) {
    errorMsg.value = undefined;
    emits('success')
  } else {
    errorMsg.value = result.error.format()._errors[0]
  }
}

///// watchers /////

///// lifecycle /////
</script>
