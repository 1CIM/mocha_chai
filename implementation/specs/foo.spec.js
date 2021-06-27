const Foo = require('../src/foo');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

describe('Foo', () => {
  const subject = new Foo('baz');
  const getNameSpy = sinon.spy(subject, 'getName');
  // x in front of it as bellow makes it so that it block don't run n the test
  it('is expected to return baz', () => {
    expect(subject.bar).to.equal('baz');
  });

  describe('.greetMe()', () => {
    it('is expected to be bound to subject', () => {
      expect(subject).to.respondTo('greetMe');
    });

    // it.only makes only that test run
    it('is expected to respond with "Hello Me"', () => {
      expect(subject.greetMe()).to.equal('Hello Svampen');
    });

    it('is expected to invoke #bar', () => {
      subject.greetMe();
      expect(getNameSpy)
        .to.have.been.calledWith('Svampen')
        .and.returned('Svampen');
    });
  });
});
