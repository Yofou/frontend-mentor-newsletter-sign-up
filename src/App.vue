<script setup lang="ts">
import { ref } from "vue";
import Main from "./layout/Main.vue";
import Card from "./components/Card.vue";
import ThankYou from "./components/ThankYou.vue";

const wasSuccess = ref(false);

const onSuccess = () => {
  wasSuccess.value = true;
};

const onDismiss = () => {
  wasSuccess.value = false;
};
</script>

<template>
  <Main>
    <ThankYou v-if="wasSuccess" @dismiss="onDismiss" />
    <Card v-else @success="onSuccess" />
  </Main>
</template>
