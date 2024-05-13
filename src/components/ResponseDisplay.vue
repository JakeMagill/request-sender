<script lang="ts">
import { defineComponent } from 'vue'
import JsonViewer from 'vue-json-viewer'

export default defineComponent({
    name: 'ResponseDisplay',
    components: {
        JsonViewer,
    },
    data() {
        body: ''
    },
    props: {
        isError: Boolean,
        response: String,
    }
})
</script>

<template>
    <div class="w-full border rounded-md mt-6 p-2">
       <JsonViewer :value="response" :copyable="true" :expanded="true" />
    </div>
</template>