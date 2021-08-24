import FlexValidator from './FlexValidator';

const VueFlexValidator = {
    install: (app) => {
        app.provide('flexValidator',FlexValidator);
    }
}


export default VueFlexValidator;
