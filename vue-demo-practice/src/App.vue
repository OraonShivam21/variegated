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
<!-- <script setup>
import { ref } from 'vue'

const titleClass = ref('title')
</script>

<template>
  <h1 :class="titleClass">Make me red</h1>
</template>

<style>
.title {
  color: red;
}
</style> -->

<!-- ---------------------------- -->

<!-- Event listeners -->
<!-- <script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++;
}
</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template> -->

<!-- ---------------------------- -->

<!-- Form bindings -->
<!-- <script setup>
import { ref } from 'vue'

const text = ref('')

function onInput(e) {
  text.value = e.target.value
}
</script>

<template> -->
  <!-- <input :value="text" @input="onInput" placeholder="Type here" /> -->
   <!-- <input v-model="text" placeholder="Type here" />
  <p>{{ text }}</p>
</template> -->
