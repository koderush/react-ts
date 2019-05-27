import {
    ADD_TRACE, REMOVE_TRACE, TraceActionTypes, TraceState
} from "./types";

const initialState: TraceState = {
    traces: ["Bit Depth", "Flow"],
};

export function TraceReducer(
    state = initialState,
    action: TraceActionTypes
): TraceState {
    switch (action.type) {
        case ADD_TRACE:
            return {
                traces: [...state.traces, action.payload],
            };
        case REMOVE_TRACE:
            return {
                traces: state.traces.slice(0,state.traces.length - 1),
            };
        default:
            return state;
    }
}
