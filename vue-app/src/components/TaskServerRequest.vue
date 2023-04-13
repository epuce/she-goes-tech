<template>
    <div class="flex">
        <div class="img-wrapper" v-for="(person, i) in persons" :key="i">
            <div :class="{
                'img-expended': person.isExpanded
            }">
                <img :src="person.image" @click="expandImg(i)">
            </div>


            <h1>{{ person.firstname }} {{ person.lastname }}</h1>
            <h2>{{ person.email }}</h2>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        var persons = ref([])

        fetch("https://fakerapi.it/api/v1/persons")
        .then(response => response.json())
        .then(response => {
            persons.value = response.data.map(function(person) {
                person.isExpanded = false;

                return person;
            })
        })

        var expandImg = function(i) {
            var person = persons.value[i];
            
            person.isExpanded = !person.isExpanded;
        }

        return {
            persons,
            expandImg,
        }
    }
})
</script>
<style>
    .flex {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .img-wrapper {
        width: 300px;
    }

    .img-wrapper img {
        width: 100%;
    }

    .img-expended {
        position: fixed;
        display: flex;
        padding: 10%;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
    }
</style>