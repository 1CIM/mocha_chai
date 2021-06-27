const Foo = require('../src/foo');
const chai = require('chai');
const sinon = require('sinon')
const sinonChai = require('sinon-chai');
const expect = chai.expect
chai.use(sinonChai)

describe('Foo', () => {
  const subject = new Foo('Kim');
  const barSpy = sinon.spy(subject, 'getName')
  // x in front of it as bellow makes it so that it block don't run n the test
  xit('is expected to return Kim', () => {
    expect(subject.bar).to.equal('Kim');
  });

  describe('.greetMe()', () => {
    it('is expected to be bound to subject', () => {
      expect(subject).to.respondTo('greetMe');
    });

    // it.only makes only that test run
    it('is expected to respond with "Hello Me"', () => {
      expect(subject.greetMe()).to.equal('Hello Kim');
    });

    it('is expected to invoke #bar', () => {
      subject.greetMe()
      expect(barSpy).to.have.been.called
    });
  });
});
