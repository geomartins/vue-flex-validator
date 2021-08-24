class FlexValidator {
  //check if type is not empty
  //check if description is not empty
  //check if array of file is not empty
  // ChainValidatorsn(state.documentFormData).check({
  //     description: 'string|notNull|len:300|isArray|lowercase|',
  // })
  constructor(formData) {
    this.formData = formData;
    this.errors = [];
  }

  get result() {
    return this.errors;
  }
  check(objs) {
    for (var key in objs) {
      //{ description: 'required|isArray'}
      this.checkValidator(key, objs[key].split("|"));
    }
    this.displayErrors();
    return this;
  }

  checkValidator(formDataKey, validators) {
    for (var validator of validators) {
      //['required','isArray']
      if (validator.includes("required")) {
        this.required(formDataKey);
      }
      if (validator.includes("max")) {
        this.max(formDataKey, validator.split(":"));
      }
      if (validator.includes("min")) {
        this.min(formDataKey, validator.split(":"));
      }
      if (validator.includes("email")) {
        //, validator.split(":")
        this.email(formDataKey);
      }

      if (validator.includes("notNull")) {
        this.notNull(formDataKey);
      }
    }
  }

  required(formDataKey) {
    if (!(formDataKey in this.formData)) {
      this.errors.push(`${formDataKey} field is required`);
    }
  }
  max(formDataKey, rules) {
    //formDataKey e.g 'name'
    //rules e.g ['max','300']
    if (this.formData[formDataKey].length > +rules[1]) {
      this.errors.push(`${formDataKey} field is greater than ${rules[1]}`);
    }
  }

  min(formDataKey, rules) {
    //formDataKey e.g 'name'
    //rules e.g ['min','300']
    if (this.formData[formDataKey].length < +rules[1]) {
      this.errors.push(`${formDataKey} field is less than ${rules[1]}`);
    }
  }

  notNull(formDataKey) {
    if (
      this.formData[formDataKey] === null ||
      this.formData[formDataKey] === undefined ||
      this.formData[formDataKey] === "" ||
      this.formData[formDataKey].length < 1
    ) {
      this.errors.push(`[ ${formDataKey} ] field cannot be null or empty`);
    }
  }

  email(formDataKey) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!this.formData[formDataKey].match(mailformat)) {
      this.errors.push(`${formDataKey} field contains invalid email format `);
    }
  }

  displayErrors() {
    if (this.result.length > 0) {
      throw { message: this.result };
    }
  }
}

export default FlexValidator;
