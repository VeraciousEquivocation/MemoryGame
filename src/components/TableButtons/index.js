import React,{useContext} from 'react';
// import classNames from 'classnames';
import scss from './TableButtons.module.scss';
import Button from '@material-ui/core/Button';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import RefreshIcon from '@material-ui/icons/Refresh';
import SaveIcon from '@material-ui/icons/Save';

import {ThemeContext} from '../../App';

export const ButtonRemove = (props) => {
    // const {language} = useContext(GlobalContext);
    const {language} = useContext(ThemeContext);
    return (
        <Button {...props} variant="contained" color="primary">
            <DownloadIcon className={scss.leftIcon} />
            {language.remove}
        </Button>
    );
}
export const ButtonExport = (props) => {
    // const {language} = useContext(GlobalContext);
    const {language} = useContext(ThemeContext);
    return (
        <Button {...props} variant="contained" color="primary">
            <DownloadIcon className={scss.leftIcon} />
            {language.export}
        </Button>
    );
}
export const ButtonRefresh = (props) => {
    // const {language} = useContext(GlobalContext);
    const {language} = useContext(ThemeContext);
    return (
        <Button {...props} variant="contained" color="secondary">
            <RefreshIcon className={scss.leftIcon} />
            {language.refresh}
        </Button>
    );
}
export const ButtonSave = (props) => {
    // const {language} = useContext(GlobalContext);
    // const {language} = useContext(ThemeContext);
    return (
        <Button {...props} >
            <SaveIcon fontSize="small" className={scss.leftIcon} />
            Save
        </Button>
    );
}