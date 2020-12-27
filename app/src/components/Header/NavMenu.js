import React, { useCallback } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { expandNav } from '../../actions/nav';

function NavMenu() {
    const dispatch = useDispatch();
    const { expanded } = useSelector(state => state.nav);
    const toggleNav = useCallback(() => {
        dispatch(expandNav(!expanded));
    }, [dispatch, expanded])
    return (
        <GiHamburgerMenu onClick={toggleNav} className="cursor-pointer" />
    );
}

export default NavMenu;
