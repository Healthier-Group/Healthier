import {Container, Grid, Box, Link, makeStyles, Divider} from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const useStyles = makeStyles(theme => ({
    position:{
        marginTop: '5%',
        backgroundColor: '#1C2624',
        color: '#8FBF26'
    }
}))

export default function Footer(){
    const classes = useStyles()
    return(
        <BottomNavigation className = {classes.position}>
                <Container maxWidth = 'lg'>
                    <Grid container spacing = {5}>
                        <Grid item xs = {12} sm = {4}>
                            <Box>Quienes Somos?</Box>
                            <Box>
                                <Link href = '/' color = 'secondary'>Contacto</Link>
                            </Box>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <Box>Newsletter</Box>
                            <Box>
                                <Link href = '/' color = 'secondary'>Suscribirse</Link>
                            </Box>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <Box>Redes Sociales</Box>
                            <Box>
                                <Link href = '/' color = 'secondary'><InstagramIcon /></Link>
                                <Link href = '/' color = 'secondary'><FacebookIcon /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign = 'center' margin = '1.5%'>Copyright &reg; {new Date().getFullYear()}</Box>
                </Container>
            </BottomNavigation>

    )
}