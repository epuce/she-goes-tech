## Install node + npm
* Download from [link](https://nodejs.org/en/download/)
* restart vscode and check within the terminal if the program is being recognized
```bash
node -v
```
![node -v](./img/node-v.png)
```bash
npm -v
```
![node -v](./img/npm-v.png)

## Vue 3
* Installation
  * direct link - `<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>`
  * node package manager 
    * `npm install -g @vue/cli` to have the command line interface
    ```bash
    vue new my-vue-app-name
    <!-- Select 1. option in when asked -->
    cd my-vue-app-name
    npm run serve
    ```
    * `npm install vue` to use the framework with a direct import within html
    ```HTML
    <script src="node_modules/vue/dist/vue.js"></script>
    ```

```Vue
<!-- ./components/MainView.vue -->
<template>
    <div>
        test
        <h1>{{ heading }} {{ clickCount || '' }}</h1>

        <button v-on:click="addCount">Add one</button>

        <MyBtn text="This is my btn"></MyBtn>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MyBtn from './MyBtn.vue';

export default defineComponent({
    components: {
        MyBtn,
    },
    setup() {
        var heading = 'This is how Vue binds data to html';
        var clickCount = ref(0);
        var addCount = function() {
            clickCount.value ++;
        }

        return {
            heading,
            clickCount,
            addCount,
        }
    }
})
</script>
```

```HTML
<!-- ./components/MyBtn.vue -->
<template>
    <span>
      <button v-on:click="changeText">{{ text }}</button>

      {{ extraText }}
    </span>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        text: {
            type: String,
            default: ''
        },
    },
    setup() {
        var extraText = ref('');
        var changeText = function () {
            this.extraText = "The btn was clicked"
        }

        return {
            changeText,
            extraText,
        }
    }
})
</script>
```

### Other JS framework
* React
* Angular
* Ember
* Backbone
* etc.

### CMS
* WordPress - most popular and widely used
* Joomla
* PrestaShop - A good setup for shop creation
* etc.

### Web based solutions
* Wix
* Squarespace
* etc.
  

# React vs Vue vs Angular
![React vs Vue vs Angular](img/js-framework-usage.png)

<!-- TODO: add checkup for vue intro -->