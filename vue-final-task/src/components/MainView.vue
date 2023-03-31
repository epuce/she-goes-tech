<template>
    <div class="main-view-wrapper">
        <div class="form-view-warpper">
            Form view
        </div>
        <div class="table-view-wrapper">
            Table view
        </div>
        <div class="popup-overlay">

        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent ({ 
    
})
</script>
<style>
body {
    margin: 0;
}
.main-view-wrapper {
    display: flex;
}

.table-view-wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
}

.popup-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(202, 196, 196, 0.815);
}

</style>