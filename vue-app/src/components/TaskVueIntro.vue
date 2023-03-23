<template>
  <div>
    <button class="button" @click="isClicked" >
    {{ clicked? "Clicked" : firstButton }}</button>
    <button @click="showPopup = true"
    :class="redBtn ? 'red' : ''"> {{ secondButton }}</button>
    <div class="popup_wrapper" v-if="showPopup">
        <div class="popup">
        {{popup}}
        <button class="close" @click="(showPopup = false); toggleBtnClass()"
        >Close</button>
        </div>
    </div>
</div>
</template>

<script>
import { defineComponent, ref} from "vue";

export default defineComponent({
    props: {
        firstButton: {
            type: String,
            required: true,
        },
        secondButton: {
            type: String,
            required: true,
        },
        popup: {
            type:String,
            default: 'You did it'
        }
    },
    setup() {
        var showPopup = ref(false);
        var redBtn = ref(false);
        var clicked = ref(false)
        var toggleBtnClass = function () {
            redBtn.value = !redBtn.value
        };
        var changeText = function(){
        };
        var isClicked =function(){
            clicked.value = !clicked.value
        }

        return {
            showPopup,
            toggleBtnClass,
            redBtn,
            changeText,
            clicked,
            isClicked
        }
}
    
});
</script>
<style>
.popup_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4)
}

.popup {
    padding: 32px;
    width: 50%;
    background: #FFFFFF;
}

.close {
    float: right
}

.red {
    background-color: red;
}

</style>
