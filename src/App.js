// import React, {useState,useEffect,useRef} from 'react';
import React, {useState, useCallback} from 'react';
// import logo from './logo.svg';
// import classNames from 'classnames';
import './App.css';
// import scss from './app.module.scss';
import CssBaseline from '@material-ui/core/CssBaseline';

import 'react-splitter-layout/lib/index.css';

import Layout from './components/Layout';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme  } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';

export const ThemeContext = React.createContext();

function App() {
    
    const [theme, setTheme] = useState({
        palette: {
          type: "light"
        }
    });
    const [language, setLanguage] = useState({
        export: 'Export',
        refresh: 'Refresh',
        year: 'Year',
        state: 'State',
        systemstatus:'System Status',
        catalogs:'Catalogs',
        clients:'Clients',
        users:'Users',
        usergroups:'User Groups',
        permissions:'Permission',
    });

    const handleToggleTheme = useCallback(() => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        let themeBuilder = {
            palette: {
              type: newPaletteType
            }
        };
        let LBuilder = {
            export: 'Export',
            refresh: 'Refresh',
            year: 'Year',
            state: 'State',
            systemstatus:'System Status',
            catalogs:'Catalogs',
            clients:'Clients',
            users:'Users',
            usergroups:'User Groups',
            permissions:'Permission',
        };
        if(newPaletteType === "dark") {
            themeBuilder.palette = {
                primary: {
                //   light: lightGreen[300],
                  main: blue[200],
                //   dark: lightGreen[700]
                },
                secondary: {
                //   light: blueGrey[300],
                  main: red[200],
                //   dark: blueGrey[700]
                },
                type: newPaletteType
            };
            LBuilder = {
                export: 'निर्यात',
                refresh: 'ताज़ा करने के लिए',
                year: 'साल',
                state: 'राज्य',
                systemstatus:'व्यवस्था की स्थिति',
                catalogs:'कैटलॉग',
                clients:'ग्राहकों',
                users:'उपयोगकर्ता',
                usergroups:'यूसर समूह',
                permissions:'अनुमति',
            };
        } else {
            themeBuilder.palette = {
                type: newPaletteType
            };
        }
        setTheme(themeBuilder);
        setLanguage(LBuilder);
    },[theme]);

    const themeContextMemo = React.useMemo(() => (
        {
            handleToggleTheme,
            language
        }), 
        [
            handleToggleTheme,
            language
        ]
    );

	const muiTheme = createMuiTheme(theme);
	// console.log('theme',muiTheme);
	console.log('rendering app');
  return (
	<>
        <ThemeContext.Provider value={themeContextMemo}>
	    	<ThemeProvider theme={muiTheme}>
	    	<CssBaseline />
        	<Layout />
	    	</ThemeProvider>
        </ThemeContext.Provider>
	</>
  );
}

export default App;
