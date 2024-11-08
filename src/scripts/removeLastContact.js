import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const currentContacts = await readContacts();

  const newContacts = currentContacts.slice(0, -1);

  await writeContacts(newContacts);
};

removeLastContact();
