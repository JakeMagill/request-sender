import { reactive } from 'vue';
import { RequestColors } from './enums/Colors'
import { HeaderRecord } from './types/headerRecord';

export const store = reactive({
    requestColor: RequestColors.GET,
    responseColor: RequestColors.GET,
    headers: [] as HeaderRecord[], 
    responseStatusCode: 0,
    responseError: ''
});