<template>
    <div class="popup__wrapper">
        <div class="popup">New meal was added
        <button class="btn__close" @click="onClose()"> <font-awesome-icon icon="fa-solid fa-xmark" /></button>
    </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props:{

    },
    setup(props, {emit}){
        const onClose =()=>{
            emit('closeComponent')
        }
            return{
                onClose,
            }
        }

    })
</script>

<style>
.popup__wrapper{
    position: fixed;
    top:0;
    right: 0;
    bottom: 0;
    left: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4);
    float: center;
}
.popup{
    position: relative;
    padding: 32px;
    width: 70%;
    background: #fff;
    text-align: center;
    font-weight: 700;
}

.btn__close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px;
    padding-right: 18px;
}
</style>