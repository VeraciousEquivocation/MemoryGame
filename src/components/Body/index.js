import React, {useState,useContext} from 'react';
// import classNames from 'classnames';
import scss from './Body.module.scss';
// import { List } from 'immutable';
// import TestField from '../Fields/TestField';
import FieldSwitch from '../Fields/FieldSwitch';

import CardListContextProvider from '../Contexts/CardListContext';

function Body(props) {

console.log('updating body');
  return (
    <CardListContextProvider>
	    <div className={scss.mainContent}>
            <FieldSwitch />
	    </div>
    </CardListContextProvider>
  );
}

export default Body;
