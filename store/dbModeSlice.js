import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: '' }

export const dbModeSlice = createSlice({
    name: 'dbMode',
    initialState,
    reducers: {
        masterMode: (state) => {
            state.value = 'master'
        },
        userMode: (state) => {
            state.value = 'user'
        },
        adminMode: (state) => {
            state.value = 'admin'
        }
    },
})

export const { masterMode, userMode, adminMode } = dbModeSlice.actions

export default dbModeSlice.reducer