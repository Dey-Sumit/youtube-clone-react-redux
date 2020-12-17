import firebase from 'firebase/app'

import auth from '../../firebase'
import {
   LOAD_PROFILE,
   LOGIN_FAIL,
   LOGIN_REQUEST,
   LOGIN_SUCCESS,
   LOG_OUT,
} from '../actionType'

export const login = () => async dispatch => {
   try {
      dispatch({
         type: LOGIN_REQUEST,
      })

      const provider = new firebase.auth.GoogleAuthProvider()

      await auth.signInWithPopup(provider)

      dispatch(load_user())

      //   const accessToken = res.credential.accessToken

      //   const profile = {
      //      name: res.additionalUserInfo.profile.name,
      //      photoURL: res.additionalUserInfo.profile.picture,
      //   }
      //   console.log(profile)

      //   dispatch({
      //      type: LOGIN_SUCCESS,
      //      payload: accessToken,
      //   })
      //   dispatch({
      //      type: LOAD_PROFILE,
      //      payload: profile,
      //   })
   } catch (error) {
      console.log(error.message)
      dispatch({
         type: LOGIN_FAIL,
         payload: error.message,
      })
   }
}

export const load_user = () => async dispatch => {
   auth.onAuthStateChanged(async user => {
      if (user) {
         dispatch({
            type: LOGIN_REQUEST,
         })
         const accessToken = await user.getIdToken()

         const profile = {
            name: user.name,
            photoURL: user.photoURL,
         }

         localStorage.setItem('ytc-access-token', accessToken)

         dispatch({
            type: LOGIN_SUCCESS,
            payload: accessToken,
         })
         dispatch({
            type: LOAD_PROFILE,
            payload: profile,
         })
      } else {
         dispatch({
            type: LOGIN_FAIL,
            payload: 'USER IS NOT LOGGED IN',
         })
      }
   })
}

export const log_out = () => async dispatch => {
   await auth.signOut()
   dispatch({
      type: LOG_OUT,
   })
}
