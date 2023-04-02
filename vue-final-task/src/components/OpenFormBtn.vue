<template>
    <div>
        <button type="button" class="open-form__btn" @click="openBtn" :class="isBtnOpened ? 'open-form__btn--opened' : ''"><span>Open Form</span></button>
    </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup () {
        var isBtnOpened = ref(false);

        var openBtn = function () {
            isBtnOpened.value = !isBtnOpened.value
        }

        return {
            isBtnOpened,
            openBtn
        }
    }


})
</script>
<style>
.open-form__btn {
    background-color: darkred;
    width: 30px;
    height: 90px;
    position: fixed;
    top: 30%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px darkred;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    transition: left 1s ease-in-out;
}

.open-form__btn span {
    transform: rotate(90deg);
    white-space: nowrap;
    font-weight: 700;
}

.open-form__btn--opened {
    left: 200px;
    
}
</style>