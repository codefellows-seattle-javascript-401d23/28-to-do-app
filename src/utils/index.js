// autobind class methods

export default function autoBind(classComponent) {
  // array of methods off class component's prototype
  const classMethods = Object.getOwnPropertyNames(classComponent.prototype);
  classMethods.forEach(((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  }))
}