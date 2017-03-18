
import ACTION_TYPES from '../actions/actionTypes'
import {load} from '../store/items'

const dispatchActions = function (dispatch) {
    return {
        addItem: function (item) {
            dispatch({
                type: ACTION_TYPES.ADD_ITEM,
                payload: item
            })
        },
        loadItems: function () {
            dispatch({ type: ACTION_TYPES.LOADING_START });

            const payload = load();
            dispatch(function (dispatch) {
                dispatch({
                    type: ACTION_TYPES.LOADING_END, payload
                });
            });
        }
    }
}

export default dispatchActions;