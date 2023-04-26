<template lang="">
    List view
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        var sql = `CREATE TABLE IF NOT EXISTS \`your-github-username-users\`
        (
            name varchar(20),
            avatar varchar(255),
            email varchar(20),
            id int NOT NULL AUTO_INCREMENT,
            PRIMARY KEY (id)
        );`
        fetch("http://localhost:8002/api/trigger", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                sql: sql 
            })
        })
        .then(response => response.json())
        .then(function(data) {
            console.log(data)
        })
    }
})
</script>
<style lang="">
    
</style>