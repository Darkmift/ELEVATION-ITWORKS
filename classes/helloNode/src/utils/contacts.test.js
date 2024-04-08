import contacts from '../data/contacts.json' with { type: 'json' };

describe('contacts', () => {
  it('should have 10 contacts', () => {
    expect(contacts.results.length).toBe(10);
  });
})
