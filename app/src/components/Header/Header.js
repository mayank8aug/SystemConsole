import React from 'react';
import NavMenu from './NavMenu';

function Header() {
    return (
        <header className="bg-primary display-flex justify-space-between pd-16">
            <div className="text-white fs-24 fw-700 display-flex align-items-center">
                <NavMenu />
                <span className="mr-l16 cursor-pointer">System Console</span>
            </div>
            <div>

            </div>
        </header>
    );
}

export default Header;
