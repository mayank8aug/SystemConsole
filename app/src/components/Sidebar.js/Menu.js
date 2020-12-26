import React from 'react';
import menus from '../../menu.json';
import MenuItem from './MenuItem';
import GitInfo from 'react-git-info/macro';
import './Menu.scss';

const gitInfo = GitInfo();

function Menu() {
    const expanded = true;
    return (
        <div className={`display-flex flex-column justify-space-between nav-menu bg-secondary${expanded ? ' expanded' : ''}`}>
            <div className="overflow-y-auto">
                {
                    menus.menu.map(menuItem => {
                        return (
                            <MenuItem key={menuItem.url} expanded={expanded} menuItem={menuItem} />
                        )
                    })
                }
            </div>
            {expanded &&
                <div className="pd-16 fw-500 fs-14 fst-i">
                    <div>Version {gitInfo.commit.shortHash}</div>
                    <div>© System Console 2020</div>
                </div>
            }
        </div>
    );
}

export default Menu;
