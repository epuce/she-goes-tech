<template>
    <div>

    </div>
</template>
<script>
import { Script } from 'vm';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        fetch(
            "https://reqres.in/api/users",
            {
                method: "GET"
            })
    }
}
)
</script>
<style></style>