<!-- Declarative rendering -->
<!-- <script setup>
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
</template> -->

<!-- ---------------------------- -->

<!-- Attribute Binding -->
<script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1> <!-- add dynamic class binding here -->
</template>

<style>
.title {
  color: red;
}
</style>
