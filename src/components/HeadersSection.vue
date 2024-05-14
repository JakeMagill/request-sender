<script lang="ts">
import { defineComponent } from 'vue'
import { HeaderRecord } from ''
import HeaderRow from './HeaderRow.vue'

export default defineComponent({
    name: 'HeadersSection',
    components: {
        HeaderRow
    },
    data() {
        return {
            headers: [] as HeaderRecord[]
        }
    },
    methods: {
        addHeader() {
            this.headers.push({
                key: '',
                value: '',
                enabled: true
            })
        }
    }
})

</script>

<template>
    <div class="w-full border rounded-md mt-6 p-2">
    <HeaderRow v-for="(item, index) in headers" :id="index" />
      <div>
        <button class="bg-blue-500 text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity" @click="addHeader">Add Header</button>
      </div>
    </div>
</template>