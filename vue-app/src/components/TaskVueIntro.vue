<template>
    <button class="btn__change btn__clic" @click= "changeButtonText()"> Click me </button>

    <button class='btn__open' @click= "onClick()"> TEXT </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({

    props: {
        text: {  
            type: String,
            required: true,
        }
    },
    setup() {
        var changeButtonText = function(){
                this.buttonText = "Clicked"
            }

        return {
            changeButtonText: changeButtonText
        
        }
    }
    


})

</script>
<style></style>