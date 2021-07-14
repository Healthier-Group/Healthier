import {Container, Grid, Box, Link, makeStyles} from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
    position:{
        marginTop: '5%',
        backgroundColor: '#1C2624',
        color: '#8FBF26',
        position: 'relative',
        bottom: '-4vh',
        width: '100vw'
    },
    icons:{
        display: 'flex',
        justifyContent:'space-around'
    },
    box:{
        textAlign: 'center'
    },
    links:{
        textDecoration: 'none'
    }
}))

export default function Footer(){
    const classes = useStyles()
    return(
        <BottomNavigation className = {classes.position}>
                <Container maxWidth = 'lg'>
                    <Grid container spacing = {5}>
                        <Grid item xs = {12} sm = {4} className = {classes.box}>
                            <Box>Quienes Somos?</Box>
                            <Box>
                                <Link href = '/' color = 'secondary' style = {{textDecoration: 'none'}}>Contacto</Link>
                            </Box>
                        </Grid>
                        <Grid item xs = {12} sm = {4} className = {classes.box}>
                            <Box>Newsletter</Box>
                            <Box>
                                <Link href = '/' color = 'secondary' style = {{textDecoration: 'none'}}>Suscribirse</Link>
                            </Box>
                        </Grid>
                        <Grid item xs = {12} sm = {4} className = {classes.box}>
                            <Box>Redes Sociales</Box>
                            <Box className = {classes.icons}>
                                <Link href = '/' color = 'secondary'><InstagramIcon /></Link>
                                <Link href = '/' color = 'secondary'><FacebookIcon /></Link>
                                <Link href = '/' color = 'secondary'><TwitterIcon /></Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign = 'center' margin = '1.5%'>Copyright &reg; {new Date().getFullYear()}</Box>
                </Container>
            </BottomNavigation>

    )
}