<!-- Declarative rendering -->
<script setup>
import { ref } from 'vue'

const message = ref('Hello World')

const counter = ref({
  count: 0
})
</script>

<template>
  <h1>Make me dynamic!</h1>
  <p>{{ message }}</p>
  <p>Count is : {{ counter.count }}</p>
</template>
