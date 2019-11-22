import React from 'react';
import scss from './MenuBar.module.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InvertColors from '@material-ui/icons/InvertColors';

import {ThemeContext} from '../../App';

const MenuBar = (props) => {
    const {handleToggleTheme} = React.useContext(ThemeContext);
console.log('rendering menubar');
    return (
        <AppBar className={scss.MenuBar} position="static">
            <Toolbar>
                <div className={scss.grow} />
                <div className={scss.invertBtn} >
                    <IconButton onClick={handleToggleTheme} aria-label="Switch Theme">
                        <InvertColors />
                    </IconButton>
                </div>
          </Toolbar>
        </AppBar>
    );
}

export default React.memo(MenuBar);
