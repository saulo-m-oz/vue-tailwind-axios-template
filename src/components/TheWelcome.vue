<template>
  <section
    class="text-center text-neutral-200 border rounded-md p-4 max-w-md mx-auto bg-neutral-800"
  >
    <h1 class="text-4xl font-bold">Hello World!</h1>
    <div class="text-xl font-medium">
      <p>This is a project template that uses Tailwind for styling</p>
      <p>and Axios for handling API calls.</p>
    </div>
    <button @click="increment">Count is: {{ count }}</button>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@stores/counter'

const { increment } = useCounterStore()
const { count } = storeToRefs(useCounterStore())
</script>
