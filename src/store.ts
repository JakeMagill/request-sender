import { reactive } from 'vue';
import { RequestColors } from './enums/Colors'

export const store = reactive({
    requestColor: RequestColors.GET,
});