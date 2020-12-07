export const ADD_EVENTS_DATA_SUCCESS = 'ADD_EVENTS_DATA_SUCCESS'
export const ADD_EVENT_REQUEST = 'ADD_EVENT_REQUEST'
export const ADD_EVENT_SUCCESS = 'ADD_EVENT_SUCCESS'
export const REMOVE_EVENT_REQUEST = 'REMOVE_EVENT_REQUEST'
export const REMOVE_EVENT_SUCCESS = 'REMOVE_EVENT_SUCCESS'
export const EDIT_EVENT_REQUEST = 'EDIT_EVENT_REQUEST'
export const EDIT_EVENT_SUCCESS = 'EDIT_EVENT_SUCCESS'
export const SUBSCRIBE_EVENT_REQUEST = 'SUBSCRIBE_EVENT_REQUEST'
export const SUBSCRIBE_EVENT_SUCCESS = 'SUBSCRIBE_EVENT_SUCCESS'
export const CANCEL_SUBSCRIBE_EVENT_REQUEST = 'CANCEL_SUBSCRIBE_EVENT_REQUEST'
export const CANCEL_SUBSCRIBE_EVENT_SUCCESS = 'CANCEL_SUBSCRIBE_EVENT_SUCCESS'
export function addEventsData(eventsInfo)
{
    return{
        type:ADD_EVENTS_DATA_SUCCESS,
        eventsInfo
    }
}

export function addEventRequest(eventData)
{
    return{
        type:ADD_EVENT_REQUEST,
        eventData
    }
}

export function addEventSuccess(eventData)
{
    return{
        type:ADD_EVENT_SUCCESS,
        eventData
    }
}

export function removeEventRequest(eventID)
{
    return{
        type:REMOVE_EVENT_REQUEST,
        eventID
    }
}

export function removeEventSuccess(eventID)
{
    return{
        type:REMOVE_EVENT_SUCCESS,
        eventID
    }
}

export function editEventRequest(eventData)
{
    return{
        type:EDIT_EVENT_REQUEST,
        eventData
    }
}

export function editEventSuccess(eventData)
{
    return{
        type:EDIT_EVENT_SUCCESS,
        eventData
    }
}

export function subscribeEventRequest(eventID, user)
{
    return{
        type:SUBSCRIBE_EVENT_REQUEST,
        eventID,
        user
    }
}

export function subscribeEventSuccess(eventID, user, response)
{
    return {
        type:SUBSCRIBE_EVENT_SUCCESS,
        eventID,
        user,
        response,
    }
}

export function cancelSubEventRequest(subscribeID)
{
    return {
        type:CANCEL_SUBSCRIBE_EVENT_REQUEST,
        subscribeID
    }
}

export function cancelSubEventSuccess(subscribeID)
{
    return {
        type:CANCEL_SUBSCRIBE_EVENT_SUCCESS,
        subscribeID
    }
}