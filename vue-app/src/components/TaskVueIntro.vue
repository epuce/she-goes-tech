<template>
    <div class="wrapper">
    <button  class="clikMe__button" @click="clickMe()">{{ changeName }}</button>
    <button class="show__popup" @click="showPopup=true">Show popup</button>
    <TaskVueIntroPopup text="You did it" v-if="showPopup" @closePopup="showPopup=false"/>
    </div>
</template>



<script>
import { defineComponent, ref } from 'vue';
import TaskVueIntroPopup from './TaskVueIntroPopup.vue';
export default defineComponent({
    components:{
        TaskVueIntroPopup,
    },
    props:{
        text:{
            type: String,
            required: true,
        }
    },
    setup(){
        var changeName = ref('Click me')
        var clickMe = function(){
            changeName.value ='Clicked'
        }
        var showPopup=ref(false)
        

    return{
        clickMe,
        changeName,
        showPopup,
    }
},

})
</script>

<style>
.redColor{
    background-color: red;
}
</style>