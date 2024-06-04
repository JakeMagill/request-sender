import { defineStore } from 'pinia'
import { Ref, ref, computed } from 'vue'
import { HeaderRecord } from '../types/headerRecord';
import { RequestColors } from '../enums/Colors';
import { QueryParameter } from '../types/queryParameter';

export const useRequestStore = defineStore('requst', () => {
    // State
    //const url = ref('');
    const requestColor = ref(RequestColors.GET);

    const headers: Ref<HeaderRecord[]> = ref([
        {
            id: 0,
            key: 'Content-Type',
            value: 'application/json',
            enabled: true
        },
    ]);

    const queryParameters: Ref<QueryParameter[]> = ref([{
        id: 0,
        key: '',
        value: '',
        enabled: true
    }]);

    // Getters
    // const requestUrl = computed(() => {
    //     const queryString = queryParameters.value
    //         .filter((qp: QueryParameter) => qp.enabled)
    //         .map((qp: QueryParameter) => `${qp.key}=${qp.value}`)
    //         .join('&');

    //     return `${url.value}?${queryString}`;
    // });

    const requestHeaders = computed((): Record<string, string> => {
        const enabledHeaders = headers.value.filter((h: HeaderRecord) => h.enabled);
    
        const mappedHeaders: Record<string, string> = enabledHeaders.reduce((acc: Record<string, string>, h: HeaderRecord) => {
            acc[h.key] = h.value;
            return acc;
        }, {});
    
        return mappedHeaders;
    });

    // Actions
    function addQueryParameter(key: string, value: string) {
        queryParameters.value = {
            ...queryParameters.value,
            [key]: value
        }
    }

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

    return { 
        requestColor, 
        headers,
        queryParameters, 
        requestHeaders,
        updateHeader, 
        addHeader, 
        addQueryParameter 
    }
});