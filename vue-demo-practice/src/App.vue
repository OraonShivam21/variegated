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

<!-- ---------------------------- -->

<!-- Conditional Rendering -->
<!-- <script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value
}
</script>

<template>
  <button @click="toggle">Toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else="awesome">Oh no 😢</h1>
</template> -->

<!-- ---------------------------- -->

<!-- List Rendering -->

<!-- <script setup>
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn Javascript' },
  { id: id++, text: 'Learn Vue' }
  ])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t != todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo" />
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template> -->

<!-- ---------------------------- -->

