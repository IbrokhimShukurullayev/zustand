import { createSlice } from '@reduxjs/toolkit'

export const karzinkaSlice = createSlice({
  name: 'karzinka',
  initialState: {
    value: JSON.parse(localStorage.getItem("cardList")) || []
  },
  reducers: {
    addCard(state ,action) {
        let index = state.value.findIndex((el) => el.id === action.payload.id)
        if(index < 0) {
            state.value = [...state.value , {...action.payload , quantity: 1}]
        }
        localStorage.setItem("cardList" , JSON.stringify(state.value))
    },
    inCart(state , action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id)
      state.value = state.value.map((product, inx) => {
        if(index === inx) {
          return {...product , quantity: product.quantity + 1}
        }else {
          return product
        }
        
      })
      localStorage.setItem("cardList" , JSON.stringify(state.value))
    },
    decCart(state , action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id)
      state.value = state.value.map((product, inx) => {
        if(index === inx) {
          return {...product , quantity: product.quantity - 1}
        }else {
          return product
        }
      })
      localStorage.setItem("cardList" , JSON.stringify(state.value))
    }, 
    remove(state , action) {
      state.value = state.value .filter((el) => el.id !== action.payload.id)
    }, 
    clear(state , action) {
      state.value = []
    }

  },
})

// Action creators are generated for each case reducer function
export const { addCard  , inCart , decCart , remove , clear} = karzinkaSlice.actions

export default karzinkaSlice.reducer