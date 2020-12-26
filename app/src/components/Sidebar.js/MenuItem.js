import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaDocker } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import './MenuItem.scss';

const icons = {
    FaDocker: FaDocker,
    SiKubernetes: SiKubernetes
};

function MenuItem(props) {
    const { expanded, menuItem: { label, url, icon } } = props;
    const location = useLocation();
    const Icon = icons[icon];
    return (
        <Link to={url} className={`menu-item pd-16 cursor-pointer fs-16 fw-500 outline-none display-flex align-items-center${location.pathname === url ? ' text-primary' : ' text-black'}`}>
            <span>
                <Icon size={20} />
                {/* <span className="mr-l8 tooltip">{label}</span> */}
            </span>
            {expanded && <span className="mr-l8">{label}</span>}
        </Link>
    );
}

export default MenuItem;