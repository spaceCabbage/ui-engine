<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-6">UI Engine Demo</h1>
      
      <div class="space-y-4">
        <UiInput
          v-model="name"
          label="Name"
          placeholder="Enter your name"
        />
        
        <UiInput
          v-model="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
        />
        
        <UiInput
          v-model="message"
          label="Message"
          placeholder="Enter a message"
          :error="messageError"
        />
        
        <UiInput
          label="Disabled Input"
          placeholder="This is disabled"
          disabled
        />
      </div>
      
      <div class="mt-6 p-4 bg-gray-100 rounded">
        <h3 class="font-semibold mb-2">Form Values:</h3>
        <p><strong>Name:</strong> {{ name }}</p>
        <p><strong>Email:</strong> {{ email }}</p>
        <p><strong>Message:</strong> {{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { UiInput } from '../src/index.js'

const name = ref('')
const email = ref('')
const message = ref('')

const messageError = computed(() => {
  if (message.value && message.value.length < 5) {
    return 'Message must be at least 5 characters long'
  }
  return ''
})
</script>