import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { ICurrentUSer } from '../../types'

export interface AuthState {
    currentUser : ICurrentUSer[]
    loading : boolean
    // loading: boolean
}

const initialState : AuthState = {
    currentUser: [],
    loading : false

}   

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addInfoCurrentUser: ( state , action) => {
            state.currentUser = action.payload
            state.loading = true
        
        },
        userSingout:( state , action) => {
            state.currentUser = []
            state.loading = false
        
        },
        
    }
})

export const { addInfoCurrentUser} = authSlice.actions
export default  authSlice.reducer

