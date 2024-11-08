import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const currentContacts = await readContacts();

  const newContacts = [...currentContacts, createFakeContact()];

  await writeContacts(newContacts);
};

addOneContact();
