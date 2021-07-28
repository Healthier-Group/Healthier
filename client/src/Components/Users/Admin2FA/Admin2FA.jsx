import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import {allowAdmin} from '../../../redux/users/userActions'
import swal from 'sweetalert'

export const Admin2FA = () => {
   const {adminAllowed} = useSelector(state => state.userReducer)
   const token = new URLSearchParams(window.location.search).get('token')
   const dispatch = useDispatch();
   const history = useHistory();

   useEffect(() => {
      if(typeof(adminAllowed) !== 'undefined') {
         if(adminAllowed){
            history.push('/private/userlist')
            swal('Autenticación exitosa', 'Bienvenido', 'success')
            .then(()=> {
               window.location.href="http://localhost:3000/private/userlist"
            })
         }else{
            history.push('/')
            swal('Autenticación fallida', 'Lo sentimos', 'error')
         }
      }
   },[adminAllowed,history]);
   
   const adminAllowHandler = () => {
      dispatch(allowAdmin(token))
   }

   return (
      <fragment>
         { token
         ? typeof(adminAllowed)=== 'undefined' && adminAllowHandler()
         : ( <Redirect to={'/login'} />)}
      </fragment>
   )
}

export default Admin2FA;
