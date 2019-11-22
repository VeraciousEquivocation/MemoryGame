import React from 'react';
// import classNames from 'classnames';
import scss from './ActionsBar.module.scss';

const ActionsBar = (props) => {

    return (
            <div className={scss.root}>
                {props.children}
            </div>
    );
}

export default React.memo(ActionsBar);
