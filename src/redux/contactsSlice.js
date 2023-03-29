import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          c => c.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert(`${action.payload.name} is already in contacts.`);
        return;
      }

      const finalContact = {
        id: nanoid(),
        ...action.payload,
      };

      state.contacts = [finalContact, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   contacts: [],
//   filter: '',
// };

// const contactsSlice = createSlice({
//   // Ім'я слайсу
//   name: 'contacts',
//   // Початковий стан редюсера слайсу
//   initialState,
//   // Об'єкт редюсерів
//   reducers: {
//     setToggleShowDetails(state) {
//       state.showDetails = !state.showDetails;
//     },
//     deleteProduct(state, action) {
//       state.products = state.products.filter(
//         product => product.id !== action.payload
//       );
//     },
//     addProduct(state, action) {
//       if (state.products.some(p => p.title === action.payload.title)) {
//         alert(`Oops, product ${action.payload.title} is already in your list`);
//         return state;
//       }

//       const finalProduct = {
//         id: (Math.random() * 100).toString(),
//         ...action.payload,
//       };

//       state.products = [finalProduct, ...state.products];
//     },
//     setPressedKey(state, action) {
//       state.pressedKey = action.payload;
//     },
//   },
// });

// // Генератори екшенів
// export const {
//   setToggleShowDetails,
//   deleteProduct,
//   addProduct,
//   setPressedKey,
// } = productsSlice.actions;
// // Редюсер слайсу
// export const productsReducer = productsSlice.reducer;
