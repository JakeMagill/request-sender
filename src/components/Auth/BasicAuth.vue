<script setup lang="ts">
import { ref  } from 'vue'

const username = ref('')
const password = ref('')

const emit = defineEmits(['createHeader'])

function createBasicAuthHeader() {
    const header = `Basic ${btoa(`${username.value}:${password.value}`)}`
    emit('createHeader', header)
}

</script>

<template>
    <div class="flex nowrap w-full">
        <span>Username</span>
        <input @blur="createBasicAuthHeader" type="text" v-model="username" />

        <span>Password</span>
        <input type="password" v-model="password" />
    </div>
</template>