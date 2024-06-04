import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useResponseStore = defineStore('response', () => {
    // State 
    const statusCode = ref(0);
    const statusText = ref('');
    const error = ref('');
    const responseJson = ref('');

    return { statusCode, statusText, error, responseJson }
});