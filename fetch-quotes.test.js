const fetchQuotes = require('./fetch-quotes');

describe('fetch quotes function', () => {
  it('should call the Futurama API and return a quote, character, and image', async () => {
    const quote = await fetchQuotes();

    expect(quote).toEqual(expect.objectContaining({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    }));
  });
});
