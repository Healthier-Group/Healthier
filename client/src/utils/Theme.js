import { createMuiTheme } from "@material-ui/core";
import {lightGreen} from "@material-ui/core/colors"


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1C2624',
        },
        secondary: {
            main: lightGreen['A200'],
            light: '#D5D977'
        },
        info: {
            main: '#D97925',
            light: '#fd6604',
            dark: '#BF4124'
        },
        error: {
            main: '#fa3b08'
        },
        disabled: {
            main: '#f4fbfe'
        },
        success: {
            main: '#26d333'
        }
    }
})

export default theme;