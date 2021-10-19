const { extractEventFromHeaders,isEventNameValid } = require('../');

const fixtures = require('./fixture');

describe('events', () => {

  it('should be valid for event names', () => {
    Object.keys(fixtures).forEach(eventName => {
      expect(isEventNameValid(eventName)).toBeTruthy();
    })
  })

  it("should be invalid for event names", () => {
    expect(isEventNameValid('random-stuff')).toBeFalsy();
  });
  
  it('should extract event name from headers', () => {
  
    expect(
      extractEventFromHeaders({
        "X-Github-Event": "github-event",
      })
    ).toEqual("github-event");

    expect(
      extractEventFromHeaders({
        "X-GitHub-Event": "github-event",
      })
    ).toEqual("github-event");
    
    expect(
      extractEventFromHeaders({
        "x-github-event": "github-event",
      })
    ).toEqual("github-event");
  
    expect(
      extractEventFromHeaders({
        "X-GITHUB-EVENT": "github-event",
      })
    ).toEqual("github-event");
  }) 
})