// import React, {useState,useEffect,useRef} from 'react';
import React from 'react';
import scss from './Layout.module.scss';

import 'react-splitter-layout/lib/index.css';

import MenuBar from '../MenuBar';
import Body from '../Body';

import GlobalContextProvider from '../../GlobalContext';
import PageContextProvider from '../Contexts/PageContext';

function Layout() {
    
	console.log('rendering Layout');

  return (
	<>
    	<div className={scss.root}>
			<MenuBar />
			<GlobalContextProvider>
                <PageContextProvider>
				<Body>
			
				</Body>
                </PageContextProvider>
			</GlobalContextProvider>
    	</div>
	</>
  );
}

export default Layout;
