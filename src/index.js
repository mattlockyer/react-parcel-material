import React from 'react'
import { render } from 'react-dom'
// theme
import { StylesProvider, ThemeProvider as MuiThemeProvider, createMuiTheme,  } from '@material-ui/core/styles';
import { ThemeProvider } from 'emotion-theming';
import customTheme from './theme/theme'
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducers'
// app
const theme = createMuiTheme(customTheme)
const store = createStore(reducers, applyMiddleware(thunk))
import App from './App'
render(
    <Provider store={store}>
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    </Provider>,
    document.getElementById('root')
)
