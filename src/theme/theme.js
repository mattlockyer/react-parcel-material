
import { pink } from '@material-ui/core/colors';

const c = {
    light: '#eee',
    dark: '#444',
}
const g = {
    border: `1px solid ${ c.light }` 
}
const button = {
    color: c.dark,
    borderRadius: 0,
    textTransform: 'none',
    '&:hover': {
        backgroundColor: c.light,
    }
}
const iconButton = { ... button }
delete iconButton.borderRadius

const theme = {
    border: g.border,
    margins: {
        0: 'none',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '24px',
        6: '32px',
        7: '48px',
        8: '64px',
    },
    palette: {
        primary: {
            main: pink[500],
        },
    },
    overrides: {
        MuiAutocomplete: {
            paper: {
                borderRadius: 0,
                border: g.border,
                boxShadow: `0 2px 4px rgba(0,0,0,0.02), 
                0 4px 8px rgba(0,0,0,0.02),
                0 8px 16px rgba(0,0,0,0.02),
                0 16px 32px rgba(0,0,0,0.02)`
            }
        },
        MuiIconButton: {
            root: {
                ...iconButton,
            }
        },
        MuiTypography: {
            root: {
                color: c.dark,
            }
        },
        MuiOutlinedInput: {
            multiline: {
                borderRadius: 0,
                '& fieldset': {
                    borderColor: c.light,
                },
                '&:hover fieldset': {
                    borderColor: c.light,
                },
                '&.Mui-focused fieldset': {
                    borderColor: c.light,
                },
            },
        },
        MuiButton: {
            text: {
                ...button
            },
            outlined: {
                ...button,
                border: g.border,
            },
        }
    }
}

const margin = theme.margins[4]
theme.center = `
    text-align: center;
`
theme.card = `
    padding: ${ margin };
    border: ${ g.border };
    box-shadow: 0 2px 4px rgba(0,0,0,0.02), 
            0 4px 8px rgba(0,0,0,0.02),
            0 8px 16px rgba(0,0,0,0.02),
            0 16px 32px rgba(0,0,0,0.02);
`
theme.addChildMargin = `
    > * {
        margin-bottom: ${ margin };
    }
    > *:last-child {
        margin-bottom: 0;
    }
`
theme.thinScrollbar = `
::-webkit-scrollbar-track {
    background-color: #EEE;
}
::-webkit-scrollbar {
    width: 2px;
    background-color: #EEE;
}
::-webkit-scrollbar-thumb {
    background-color: #222;
}
`
export default theme