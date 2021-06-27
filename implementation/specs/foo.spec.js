const Foo = require('../src/foo');
const { expect } = require('chai');

describe('Foo', () => {
  const subject = new Foo('baz');
  // x in front of it as bellow makes it so that it block don't run n the test
  xit('is expected to return baz', () => {
    expect(subject.bar).to.equal('baz');
  });

  describe('.greetMe()', () => {
    it('is expected to be bound to subject', () => {
      expect(subject).to.respondTo('greetMe');
    });

    it('is expected to respond with "Hello Me"', () => {
      expect(subject.greetMe()).to.equal('Hello Me');
    });
  });
});
