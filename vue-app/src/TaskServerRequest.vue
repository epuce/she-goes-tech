<template>
    <div>

    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        fetch(
            "https://fakerapi.it/api/v1/persons",
            {
                method: "GET"
            }
        )

    }
})
</script>
<style></style>
