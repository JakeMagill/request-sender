import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useResponseStore = defineStore('response', () => {
    const responseBody = ref<string>('')
    const respponseHeders = ref<Record<string, string>>({})
    const responseStatus = ref<number>(0)
    const responseStatusText = ref<string>('')

    return {
        responseBody,
        respponseHeders,
        responseStatus,
        responseStatusText
    }
})