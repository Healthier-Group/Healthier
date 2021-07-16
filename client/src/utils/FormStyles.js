import {makeStyles} from '@material-ui/core'
const useFormStyles = makeStyles((theme)=>({
    root: {
		marginTop: 50,
		marginBottom: 30,
		border:5,
		display:'flex'
	},
	title: {
		display:'flex',
		justifyContent: 'center'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
		width:500,
	},
	last: {
		padding: 8,
	}
}));

export default useFormStyles;