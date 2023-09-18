export const registeredValidators: ValidatorConfig = {};

interface ValidatorConfig {
  [prop: string]: {
    [validatorName: string]: string[];
  };
}

export const validate = (obj: any): boolean => {
    const validaters = registeredValidators[obj.constructor.name];
    if (!validaters) {
      return true;
    }
    let isValid = true;
  
    for (const prop in validaters) {
      for (const validator of validaters[prop]) {
        console.log(`prop: ${prop}`);
        console.log(`obj[prop]: ${obj[prop]}`);
        console.log(`validator: ${validator}`);
        switch (validator) {
            case 'positive':
                isValid = isValid && obj[prop] > 0 ;
        }
      }
    }
    return isValid;
}
