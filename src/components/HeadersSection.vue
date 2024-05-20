<script lang="ts">
import { defineComponent } from 'vue'
import { HeaderRecord } from '../types/HeaderRecord'
import { store } from '../store'
import HeaderRow from './HeaderRow.vue'
import Section from './Section.vue'

export default defineComponent({
    name: 'HeadersSection',
    components: {
        Section,
        HeaderRow
    },
    data() {
        return {
            store,
            headersDisabled: false,
            headers: [] as HeaderRecord[]
        }
    },
    mounted() {
        this.addHeader()
    },
    methods: {
        addHeader() {
            this.headers.push({
                key: '',
                value: '',
                enabled: true
            } as HeaderRecord)
        },
        toggleHeaders() {
            this.headersDisabled = !this.headersDisabled
        }
    }
})

</script>

<template>
    <Section>
        <template v-slot:default="{isDisabled}">
            <div v-show="!isDisabled">
                <HeaderRow v-for="(item, index) in headers" :id="index" />
                <div class="flex justify-center">
                    <button :class="`bg${store.requestColor}`" class="text-white p-2 px-4 rounded-md hover:opacity-85 transition-opacity m-2" @click="addHeader">Add Header</button>
                </div>
            </div>
        </template>
    </Section>
</template>