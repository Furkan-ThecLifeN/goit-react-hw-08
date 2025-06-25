import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) =>
    contacts.filter(c =>
      c.name.toLowerCase().includes(filter.toLowerCase()) ||
      c.number.includes(filter)
    )
);
