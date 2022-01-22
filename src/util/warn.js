/* @flow */

export function assert (condition: any, message: string) {
  if (!condition) {
    throw new Error(`[kdu-router] ${message}`)
  }
}

export function warn (condition: any, message: string) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(`[kdu-router] ${message}`)
  }
}

export function isError (err: any): boolean {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

export function isExtendedError (constructor: Function, err: any): boolean {
  return (
    err instanceof constructor ||
    // _name is to support IE9 too
    (err && (err.name === constructor.name || err._name === constructor._name))
  )
}
