const initialState = {
    loading: false,
    cached: false
};

export function meta (state = initialState, action) {
    switch (action.type) {
        case 'LOADING_START':
            return Object.assign({}, state, {loading: true});

        case 'LOADING_END':
            return Object.assign({}, state, {loading: false, cached: true});

        default:
            return state;
    }
}