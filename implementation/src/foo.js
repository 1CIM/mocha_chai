const foo = () => {
  return 'bar'
}

module.exports = foo

// Browser testing WIP
// if (window.module !== 'undefined'){
//   module.exports = foo
// }