// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Woof woof, I am ${this.name}`
  }
}

export default Dog
