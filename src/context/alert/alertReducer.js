import { SHOW_ALERT, HIDE_ALERT } from "../types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    DEFAULT: (state, action) => state 
}

export const alertReducer = (state, action) => {
    
    //switch (action.type) {
    //    case SHOW_ALERT: return action.payload //state и будет значение из action
    //    case HIDE_ALERT: return null //скрываем
    //    default: return state
    //}

    const handler = handlers[action.type] || handlers.DEFAULT
    return handler(state, action)
}