import { RequestTypes } from '../enums/RequestTypes';
import { RequestColors } from '../enums/Colors';

const setRequestColour = (requestType: string) => {
    let requestColorClass = '';

    switch(requestType) {
        case RequestTypes.GET:
            requestColorClass = RequestColors.GET
            break
        case RequestTypes.POST:
            requestColorClass = RequestColors.POST
            break
        case RequestTypes.PUT:
            requestColorClass = RequestColors.PUT
            break
        case RequestTypes.PATCH:
            requestColorClass = RequestColors.PATCH
            break
        case RequestTypes.DELETE:
            requestColorClass = RequestColors.DELETE
            break
    }

    return requestColorClass
}

export { setRequestColour }