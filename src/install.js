import FlexValidator from './FlexValidator';

const VueFlexValidator = {
    install: (Vue) => {
        Vue.provide('flexValidator',FlexValidator);
    }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueFlexValidator);
}



export default VueFlexValidator;
