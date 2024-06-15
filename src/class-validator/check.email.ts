export function IsEmail() {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return function (target: object, propertyKey: string) {
    // Define a validation function for email format
    const validationFunction: (value: string) => boolean = (value) =>
      emailRegex.test(value);

    // Define a getter and setter for the property
    Object.defineProperty(target, propertyKey, {
      get() {
        return this[propertyKey];
      },
      set(value: any) {
        if (!validationFunction(value)) {
          throw new Error(`Field '${propertyKey}' must be a valid email address.`);
        }
				console.log('PropertyKey: ', propertyKey)
				console.log('Value: ', value)
        this[propertyKey] = value;
      },
      configurable: true,
    });
  };
}
