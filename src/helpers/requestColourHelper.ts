import { RequestTypes } from '../enums/RequestTypes';
import { RequestColors } from '../enums/Colors';

const setRequestColour = (requestType: string):RequestColors => {
    switch(requestType) {
        case RequestTypes.GET:
            return RequestColors.GET
        case RequestTypes.POST:
            return RequestColors.POST
        case RequestTypes.PUT:
            return RequestColors.PUT
        case RequestTypes.PATCH:
            return RequestColors.PATCH
        case RequestTypes.DELETE:
            return RequestColors.DELETE
        default:
            return RequestColors.GET
    }
}

export { setRequestColour }