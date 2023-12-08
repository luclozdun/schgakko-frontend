import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        name: 'NVidia 335 GTX Pro Gamer',
        company: 'Estacion Huica S.A.C',
        descount: '0.0',
        price: '100.00',
        brand: 'Aorus'
    },
    {
        id: '2',
        name: 'Radeom 45 12GB 2MHz',
        company: 'Huaico SH S.A.C',
        descount: '0.0',
        price: '150.00',
        brand: 'Aorus'
    }
]

export const itemSlice = createSlice({
    name: 'items',
    initialState: initialState,
    reducers: {
    }
})

export default itemSlice.reducer