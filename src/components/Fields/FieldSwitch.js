import React, {useState,useContext} from 'react';
// import clsx from 'clsx';
// import scss from './Base.module.scss';
// import { List } from 'immutable';

import Base from '../Fields/Base';
// import TestField from '../Fields/TestField';
// import Hunt from '../Fields/Hunt';

import {PageContextData} from '../Contexts/PageContext';
import {pageList} from '../Contexts/PageContext';


const TestField = React.lazy(() => import('./TestField'));
const Hunt = React.lazy(() => import('./Hunt'));

    // 0: 'title_screen',
    // 1: 'base',
    // 2: 'hunt',
    // 3: 'collect',
    // 4: 'invasion',
    // 5: 'craft',
    // 6: 'skills',
    // 7: 'store',

function FieldSwitch(props) {

    let {currentPage} = useContext(PageContextData);
    
    console.log('updating FieldSwitch @@@@ and currentPage is...',currentPage);
    switch (currentPage) {
        case pageList.testfield:
            return <React.Suspense fallback={<div>Loading...</div>}><TestField /></React.Suspense>;
        case pageList.hunt:
            return <React.Suspense fallback={<div>Loading...</div>}><Hunt /></React.Suspense>;
        default:
            return <React.Suspense fallback={<div>Loading...</div>}><Base /></React.Suspense>;
    }
}

export default FieldSwitch;
