# Vue-Flex-Validator

Vue-flex-validator is a vue plugin used for validating form input... It takes it approach from laravel request validator

## Installation
#### Via npm 

```sh
npm install --save vue-flex-validator
```

#### In Main.js file
```javascript
import VueFlexValidator from 'vue-flex-validator'
Vue.use(VueFlexValidator);
```
## Usuage
```javascript
import { inject } from "vue";

export default {
  name: "App",
  setup() {
    const flexValidator = inject("flexValidator");
    return {
      flexValidator,
    }; 
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        location: "",
      },
    };
  },
  components: {},
  methods: {
    submit() {
      try {
        new this.flexValidator(this.formData).check({
          name: "required|notNull",
          email: "required|notNull|email",
          location: "required|min:30",
        });
      } catch (err) {
        console.log(err.message);
      }
    },
  },
};

```


## Validation Rules
| Rule | Description |
| ------ | ------ |
| required | input must not be empty |
| notNull | Must not be null |
| min | Minimum input allowed e.g min:20 |
| max | Maximum input allowed e.g max:40 |
| email| Must be a valid email address |

## License

MIT

**Free Software, Hell Yeah!**
