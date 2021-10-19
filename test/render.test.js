const { render, extractEventFromHeaders } = require('..');
const fixtures = require('./fixture');

describe('render payload', () => {
  it('should return summary text', () => {
    const eventName = extractEventFromHeaders(fixtures.push.headers);
    expect(render(eventName, fixtures.push.body)).toEqual(eventName);
  })
})