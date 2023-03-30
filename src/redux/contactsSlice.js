import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

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

      state.contacts = [action.payload, ...state.contacts];
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
