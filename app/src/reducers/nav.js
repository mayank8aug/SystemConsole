import { types } from '../actions/nav';

const initialState = {
    expanded: false
};

function nav(prevState = initialState, action) {
    switch(action.type) {
        case types.EXPAND_NAV:
            return Object.assign({}, prevState, {
                expanded: action.expand
            });
        default:
            return prevState;
    }
}

export default nav;
