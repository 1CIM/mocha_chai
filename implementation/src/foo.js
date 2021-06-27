class Foo {
  constructor(value) {
    this.bar = value
  }
  // Do more research in this one if there is a way to pass in 
  // arguments with new syntax
  // bar = "baz"

  greetMe(){
    return "Hello Me"
  }
}

module.exports = Foo