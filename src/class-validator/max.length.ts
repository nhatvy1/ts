export function Max(number: number) {
  return function (target: any, propertyKey: string) {
    const checkLength = (value: string) => {
      if (value.length <= number) {
        return true
      }
      return false
    }

    Object.defineProperty(target, propertyKey, {
      get() {
        return this[propertyKey]
      },
      set(value: any) {
        // if (!checkLength(value)) {
        //   throw new Error(`Max ${number}`)
        // }
        this[propertyKey] = value
      },
      enumerable: true,
      configurable: true
    })
  }
}
