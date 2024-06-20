import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import { HeaderRecord } from '../types/headerRecord';
import { RequestColors } from '../enums/RequestColors';

interface RequestStoreState {
    headers: HeaderRecord[];
    headersCount: number;
    requestColor: RequestColors;
}

export const useRequestStore = defineStore('requst', () => {

    const state: RequestStoreState = reactive({
        headers: [{
            id: 0,
            key: 'Content-Type',
            value: 'application/json',
            enabled: true
        }],
        headersCount: 1,
        requestColor: RequestColors.GET
    });

    // Getters
    // const requestUrl = computed(() => {
    //     const queryString = queryParameters.value
    //         .filter((qp: QueryParameter) => qp.enabled)
    //         .map((qp: QueryParameter) => `${qp.key}=${qp.value}`)
    //         .join('&');

    //     return `${url.value}?${queryString}`;
    // });


    const requestHeaders = computed((): Record<string, string> => {
        const enabledHeaders = state.headers.filter((h: HeaderRecord) => h.enabled);
    
        const mappedHeaders: Record<string, string> = enabledHeaders.reduce((acc: Record<string, string>, h: HeaderRecord) => {
            acc[h.key] = h.value;
            return acc;
        }, {});
    
        return mappedHeaders;
    });

    // Actions

    function updateHeader(updatedHeader: HeaderRecord) {
        let headerIndex = state.headers.findIndex((h: HeaderRecord) => h.id === updatedHeader.id);

        if (headerIndex === -1){
            headerIndex = state.headers.findIndex((h: HeaderRecord) => h.key === updatedHeader.key);

            if (headerIndex === -1){
                addHeader(updatedHeader);
            }
        }

        console.log(headerIndex);

        updatedHeader.id = state.headersCount;
        state.headers.splice(headerIndex, 1, updatedHeader);
        
        state.headersCount++;
    }

    function addHeader(header: HeaderRecord){
        console.log('Adding header:', header);
        header.id = state.headersCount;
        state.headers.push(header);
        
        state.headersCount++;
    }

    function removeHeader(headerId: number){
        const headerIndex = state.headers.findIndex((h: HeaderRecord) => h.id === headerId);
        state.headers.splice(headerIndex, 1);
    }

    return { 
        state,
        requestHeaders,
        updateHeader, 
        addHeader,
        removeHeader
    }
});