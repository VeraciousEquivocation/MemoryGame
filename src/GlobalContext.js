import React, { useState, useCallback } from "react";
// import axios from 'axios';
// import { List } from 'immutable';

export const GlobalContext = React.createContext()

/*// TO DO //
*
* Make Language a separate context
* to avoid unecessary rerenders when other globals change
*
//*/
function GlobalContextProvider(props) {
    // const [curPage, setCurPage] = useState(null);
    // const handleSetCurPage = useCallback((page) => setCurPage(page), []);
    // const [language, setLanguage] = useState({
    //     export: 'Export',
    //     refresh: 'Refresh',
    //     year: 'Year',
    //     state: 'State',
    //     systemstatus:'System Status',
    //     catalogs:'Catalogs',
    //     clients:'Clients',
    //     users:'Users',
    //     usergroups:'User Groups',
    //     permissions:'Permission'
    // });
    // const handleSetLanguage = useCallback((L) => setLanguage(L), []);

    const contextMemoData = React.useMemo(() => (
        {
            // curPage,
            // handleSetCurPage,
            // language,
            // handleSetLanguage
        }), 
        [
            // curPage,
            // handleSetCurPage,
            // language,
            // handleSetLanguage
        ]
    );

    return (
        <GlobalContext.Provider value={contextMemoData}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default React.memo(GlobalContextProvider);