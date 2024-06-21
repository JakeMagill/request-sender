import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { HeaderRecord } from '../types/headerRecord';
import { RequestColors } from '../enums/RequestColors';

export const useRequestStore = defineStore('requst', () => {

    // State
    const headers = ref<HeaderRecord[]>([
        {
            id: 0,
            key: 'Content-Type',
            value: 'application/json',
            enabled: true
        }
    ]);

    const headersCount = ref<number>(1);
    const requestColor = ref<RequestColors>(RequestColors.GET);

    // Getters
    const enabledRequestHeaders = computed((): Record<string, string> => {
        const enabledHeaders = headers.value.filter((h: HeaderRecord) => h.enabled);
    
        const mappedHeaders: Record<string, string> = enabledHeaders.reduce((acc: Record<string, string>, h: HeaderRecord) => {
            acc[h.key] = h.value;
            return acc;
        }, {});
    
        return mappedHeaders;
    });

    // Actions
    function updateHeader(updatedHeader: HeaderRecord) {
        let headerIndex = headers.value.findIndex((h: HeaderRecord) => h.id === updatedHeader.id);

        if (headerIndex === -1){
            headerIndex = headers.value.findIndex((h: HeaderRecord) => h.key === updatedHeader.key);

            if (headerIndex === -1){
                addHeader(updatedHeader);
            }
        }

        console.log(headerIndex);

        updatedHeader.id = headersCount.value;
        headers.value.splice(headerIndex, 1, updatedHeader);
        
        headersCount.value++;
    }

    function addHeader(header: HeaderRecord){
        console.log('Adding header:', header);
        header.id = headersCount.value;
        headers.value.push(header);
        
        headersCount.value++;
    }

    function removeHeader(headerId: number){
        const headerIndex = headers.value.findIndex((h: HeaderRecord) => h.id === headerId);
        headers.value.splice(headerIndex, 1);
    }

    return {
        headers,
        requestColor,
        enabledRequestHeaders,
        updateHeader, 
        addHeader,
        removeHeader
    }
});