import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const currentContacts = await readContacts();
  const generatedContacts = [];

  for (let i = 0; i < number; i += 1) {
    generatedContacts.push(createFakeContact());
  }

  const newContacts = [...currentContacts, ...generatedContacts];

  await writeContacts(newContacts);
};

generateContacts(5);
