<template>
        <div class="message-popup__wrapper">
            <div class="message-popop__body">
               <p class="message-popop__text">
                    Thank you <b>{{ text }}</b>! 
                    <br>
                    You have successully subscribed!!!
               </p>
                <div class="btn-ok__container">
                    <ButtonDefault
                        text="OK"
                        @click="onClose()"
                        :type="btnType"
                    />
                </div>
            </div>
            
        </div>

</template>

<script>
import { defineComponent } from 'vue';
import ButtonDefault from './ButtonDefault.vue';

export default defineComponent({
    components: {
        ButtonDefault,
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        btnType: {
            type: String,
            required: false,
            default: undefined,
        }
    },
    setup(props, { emit }) {
        var onClose= function() {
            emit('close-popup')
        }

        return {
            onClose,
        }
    }
})
</script>

<style>
.message-popup__wrapper {
    position: fixed;
    z-index: 9999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(168, 183, 82, 0.4);
}

.message-popop__body {
    padding: 32px;
    height: 70%;
    width: 70%;
    background: #AAA739;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: rgb(54, 53, 53);
    font-size: 20px;
}

.message-popop__text {
    text-align: center;
}

.btn-ok__container {
    width: 100px;
}
</style>