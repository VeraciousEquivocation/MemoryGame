// Navigation Context, changing what page is visible
// SPA - probably not going to use routing.

// Victory Page
// Player Page

import React, { useState } from "react";

export const PageContextData = React.createContext();
export const PageDispatches = React.createContext();

export const pageList = {
    title: 'TITLE_SCREEN',
    base: 'BASE',
    hunt: 'HUNT',
    collect: 'COLLECT',
    invasion: 'INVASIONS',
    craft: 'CRAFT',
    skills: 'SKILLS',
    store: 'STORE',
    testfield: 'TESTFIELD'
}

function PageContextProvider(props) {

    const [currentPage, updateCurrentPage] = useState('');

    const contextMemoData = React.useMemo(() => (
        {
            currentPage
        }), 
        [
            currentPage
        ]
    );
    const contextMemoDispatches = React.useMemo(() => (
        {
            updateCurrentPage
        }), 
        [
            //I dont think this needs to change ???
        ]
    );

    return (
        <PageContextData.Provider value={contextMemoData}>
            <PageDispatches.Provider value={contextMemoDispatches}>
                {props.children}
            </PageDispatches.Provider>
        </PageContextData.Provider>
    )
}

export default React.memo(PageContextProvider);