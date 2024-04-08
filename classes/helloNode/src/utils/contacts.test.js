// import contacts from '../data/contacts.json' with { type: 'json' };
const contacts = require('../data/contacts.json');

describe('contacts', () => {
  it('should have 10 contacts', () => {
    expect(contacts.results.length).toBe(10);
  });

  it('should match attributes', () => {
    expect(contacts.results[0].name).toEqual({ title: 'Mr', first: 'Karl', last: 'Johnson' });
  });

  it('should be array of strings', () => {
    const namesArray = contacts.results.map((c) => `${c.name.first},${c.name.last}`);

    // Check if the array contains only strings
    namesArray.forEach((item) => {
      expect(typeof item).toBe('string');
    });
  });
});
