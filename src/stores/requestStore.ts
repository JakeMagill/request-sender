import { defineStore } from 'pinia'
import { Ref, ref } from 'vue'
import { HeaderRecord } from '../types/headerRecord';
import { RequestColors } from '../enums/Colors';

export const useRequestStore = defineStore('requst', () => {
    // State
    const requestColor = ref(RequestColors.GET);
    const headers: Ref<HeaderRecord[]> = ref([
        {
            id: 0,
            key: 'Content-Type',
            value: 'application/json',
            enabled: true
        },
    ]);

    // Actions
    function updateHeader(header: HeaderRecord) {
        const headerIndex = headers.value.findIndex((h: HeaderRecord) => h.id === header.id);

        headers.value[headerIndex].key = header.key;
        headers.value[headerIndex].value = header.value;
        headers.value[headerIndex].enabled = header.enabled;

        console.log('Updated header:', headers.value[headerIndex]);
    }

    function addHeader(header: HeaderRecord){
        headers.value.push(header);
    }

    return {requestColor, headers, updateHeader, addHeader}
});