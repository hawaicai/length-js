export class Length {
  value
  unit

  constructor(value, unit) {
    this.value = value
    this.unit = unit
  }

  getValue() {
    return this.value
  }

  getUnit() {
    return this.unit
  }

  parseTo(u) {
    let len = this
    if (this.unit === 'yard') {
      if (u === 'f') {
        len = new Length(this.value * 3, u)
      } else if (u === 'inch') {
        len = new Length(this.value * 36, u)
      }
    }

    if (this.unit === 'inch') {
      if (u === 'yard') {
        len = new Length(this.value / 36, u)
      } else if (u === 'f') {
        len = new Length(this.value / 12, u)
      }
    }

    if (this.unit === 'f') {
      if (u === 'yard') {
        len = new Length(this.value / 3, u)
      } else if (u === 'inch') {
        len = new Length(this.value * 12, u)
      }
    }

    return len
  }
}
