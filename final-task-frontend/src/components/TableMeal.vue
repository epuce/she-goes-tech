<template>
    <div>
        <a class="btn btn-primary btn-add" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  Add a meal </a>
        
        <table class="meal-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Allergens</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-for="item in mealList" :key="item.id" class="meal-list__meal">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.allergens }}</td>
                        <td>
                            <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"> <font-awesome-icon :icon="['fas', 'pen']" class="icon-edit" 
                                :class="{ 'meal-list__meal--active': meal.id === item.id }"/></a>
                            <font-awesome-icon icon="fa-trash" class="icon-delete" @click="onMealDelete(item.id)" />
                        </td>
                    </tr>
                </tbody>
            </table>

<FormMeal />

           
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import FormMeal from './FormMeal.vue';
export default defineComponent({
    props: {
        mealList: {
            type: Array,
            required: true,
        }
    },
    setup(props, {emit}) {
        const meal = ref({
            name: "",
            description: "",
            price: null,
            allergens: "",
            id: null,
            // category_id: null
        });        

        const onMealDelete = (mealId) => {
            fetch(`http://localhost:8002/api/meals/${mealId}`, {
                method: "DELETE"
            })
                .then(resp => resp.json())
                .then(() => {
                   emit('on-meal-delete', {mealId})
            });
        };

        // const fillMealForm = (tmpMeal) => {
        //     meal.value = { ...tmpMeal };
        // }
        return {
            meal,
            onMealDelete,
            // fillMealForm,
        };
    },
    components: { FormMeal }
})
    
</script>
<style>

.btn-add{
margin-left: 16px;
}

label,
input {
    display: flex;
    flex-direction: column;
}

.label {
    padding-top: 10px;
}

.btn-meal {
    margin-top: 16px;
    margin-left: 16px;
}

.btn-save {
    margin-top: 33px;
    margin-left: 5px;
    height: 29px;
    border-color: black !important;
    padding-bottom: 10px !important;
    padding-top: 1px !important;
}
table {
    margin: auto;
    margin-top: 50px;
    width: 50%;
    font-family: sans-serif;
    border-collapse: collapse;
}

.meal-table td,
.meal-table th {
    border: 1px solid black;
    padding: 6px;
    text-align: center;
}

button {
    border: none;
    background: none;
    padding: 10px;
}

.icon-edit {
    margin-right: 5px;
    cursor: pointer;
}

.icon-edit path {
    fill: green;
}

.icon-delete {
    margin-left: 5px;
    cursor: pointer;
}

.icon-delete path {
    fill: red;
}

.meal-list__meal--active path {
    fill: lightgray;
}
</style>