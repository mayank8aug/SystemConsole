import { types } from '../actions/docker';

const initialState = {
    images: null,
    loading: false
};

function docker(prevState = initialState, action) {
    switch(action.type) {
        case types.GET_IMAGES:
            return Object.assign({}, prevState, {
                images: null,
                loading: true
            });
        case types.GET_IMAGES_SUCCESS:
            return Object.assign({}, prevState, {
                images: action.data,
                loading: false
            });
        case types.GET_IMAGES_FAIL:
            return Object.assign({}, prevState, {
                images: action.error,
                loading: false
            });
        default:
            return prevState;
    }
}

export default docker;
