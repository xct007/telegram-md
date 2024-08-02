import { _escape } from './_escape.js'

export class Markdown {
  value: string

  constructor(value: unknown = '', escaped = false) {
    this.value = escaped ? String(value) : _escape(String(value))
  }

  toString() {
    return this.value
  }

  replaceAll(arg0: string, arg1: string): Markdown {
    this.value = this.value.replaceAll(arg0, arg1)
    return this
  }
}
