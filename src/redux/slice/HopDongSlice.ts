import { createSlice , PayloadAction } from "@reduxjs/toolkit"
import { DataTypeHDKhaiThac, DataTypeHDUyQuyen } from "../../types"




export interface HDUyQuyenState {
    dataHDUyQuyen ? : DataTypeHDUyQuyen[]
    dataHDKhaiThac ? : DataTypeHDKhaiThac[]
}

const initialState : HDUyQuyenState= {
    dataHDUyQuyen : [],
    dataHDKhaiThac : []
}

const hopDongState = createSlice({
    name: 'hopdong',
    initialState,
    reducers: {
        addItemsHDUyQuyen: ( state , action) => {
            state.dataHDUyQuyen = action.payload
        },
        addItemsHDKhaiThac: ( state , action) => {
            state.dataHDKhaiThac = action.payload
        }
        
    }
})

export const {addItemsHDUyQuyen , addItemsHDKhaiThac } = hopDongState.actions
export default hopDongState.reducer