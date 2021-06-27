const Foo = require('../src/foo');
const { expect } = require('chai');

describe('Foo', () => {
  const subject = new Foo('baz')
  it('is expected to return baz', () => {
    expect(subject.bar).to.equal('baz')
  });
})
