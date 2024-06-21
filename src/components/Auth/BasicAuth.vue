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
    <div class="flex flex-col w-full">
        <div class="">
            <input class="w-full p-2 border-2 rounded-md mb-2" @blur="createBasicAuthHeader" type="text" v-model="username" placeholder="Username"/>
        </div>
        <div>
            <input class="w-full p-2 border-2 rounded-md" @blur="createBasicAuthHeader" type="password" v-model="password" placeholder="Password"/>
        </div>
    </div>
</template>