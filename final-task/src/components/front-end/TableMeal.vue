<template>
    <div>
        <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
                <tbody v-for="item in tmpMealList" :key="item.id" class="meal-list__meal">
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

<FormSlideout />

           
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import FormSlideout from './FormSlideout.vue';
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

        var tmpMealList=ref(props.mealList)
        const onMealDelete = (mealId) => {
            fetch(`http://localhost:8002/api/meals/${mealId}`, {
                method: "DELETE"
            })
                .then(resp => resp.json())
                .then(() => {
                    tmpMealList.value = tmpMealList.value.filter(meal => meal.id !== mealId);
            });
        };
        const onMealSave = () => {
            const payload = {
                name: meal.value.name,
                description: meal.value.description,
                price: meal.value.price,
                // category_id: meal.value.category_id,
                allergens: meal.value.allergens,
            };
            if (meal.value.id) {
                fetch(`http://localhost:8002/api/meals/${meal.value.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                })
                    .then(resp => resp.json())
                    .then(resp => {
                    if (!resp.error) {

                        const mealIndex = tmpMealList.value.findIndex((item) => item.id === meal.value.id);
                        tmpMealList.value[mealIndex] = {
                            ...tmpMealList.value[mealIndex],
                            ...payload,
                        };
                        meal.value = {
                            name: "",
                            description: "",
                            id: null,
                            // category_id: null,
                            allergens: "",
                            price: null
                        };

                    }
                });
            }
            else {
                fetch("http://localhost:8002/api/meals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                })
                    .then(resp => resp.json())
                    .then(resp => {
                    if (!resp.error) {
                        tmpMealList.value.push({
                            ...payload,
                            id: resp.data.insertId
                        });
                        meal.value = {
                            name: "",
                            description: "",
                            allergens: "",
                            price: null
                        };
                    }
                });
            }
        };
        // const fillMealForm = (tmpMeal) => {
        //     meal.value = { ...tmpMeal };
        // }
        return {
            // openSlideout,
            meal,
            tmpMealList,
            // mealList,
            onMealSave,
            onMealDelete,
            // onMealSave
            // fillMealForm,
        };
    },
    components: { FormSlideout }
})
    
</script>
<style>

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