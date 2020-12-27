export const types = {
    EXPAND_NAV: 'EXPAND_NAV'
};

export function expandNav(expand) {
    return {
        type: types.EXPAND_NAV,
        expand
    };
}
