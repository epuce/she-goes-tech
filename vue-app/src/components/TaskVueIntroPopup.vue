<template>
<div class="popup-wrapper">
  <div class="popup"> {{ text }}
    <button class="close__popup" @click="closePopup()">Close popup</button>
</div>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    props:{
        text:{
            type: String,
            required: true,
        },
        type:{
            type: String,
            required: false,
            default: undefined,
        }
    },
    setup(props, {emit}){
        var closePopup = function(){
            emit('closePopup')
        }
            return{
                closePopup,
            }
},
})
</script>

<style>
.popup-wrapper{
    position: fixed;
    top:0;
    right:0;
    left: 0;
    bottom:0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4)
}
.popup{
    padding: 32px;
    width: 70%;
    background: #fff;
}
.close__popup {
    float: right;
}
.btn--secondary{
    background: red;
}
</style>