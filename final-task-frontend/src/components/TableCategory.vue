<template>
    <div>
        <button class="btn btn-primary btn-category" @click="isClicked = !isClicked">Add category</button>
        <form v-if="isClicked">
            <label class="label name">
                Category
                <input type="text" placeholder="Add a category" v-model="category.category" required>
            </label>

            <div>
                <button class="btn btn-success btn-save" @click="onCategorySave()" type="button">Save</button>
            </div>
        </form>


            <table class="category-table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody v-for="item in categoryList" :key="item.id" class="category-list__category" :class="{
                'category-list__category--active': category.id === item.id
            }" @click="fillCategoryForm(item)">
                    <tr>
                        <td>{{ item.category }}</td>
                        <td>
                            <font-awesome-icon :icon="['fas', 'pen']" class="icon-edit" @click="fillCategoryForm(item)"
                                :class="{ 'category-list__category--active': category.id === item.id }" />
                            <font-awesome-icon icon="fa-trash" class="icon-delete" @click="onCategoryDelete(category.id)" />
                        </td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        var isClicked = ref(false);

        const category = ref({
            category: '',
            id: null,
        })
        const categoryList = ref([]);
        fetch('http://localhost:8002/api/categories')
            .then(resp => resp.json())
            .then(resp => {
                categoryList.value = resp.data
            })

        const onCategorySave = () => {
            const payload = {
                category: category.value.category,
            }

            if (category.value.id) {
                fetch(`http://localhost:8002/api/categories/${category.value.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                })
                    .then(resp => resp.json())
                    .then(resp => {
                        if (!resp.error) {
                            const categoryIndex = categoryList.value.findIndex((item) => item.id === category.value.id)

                            categoryList.value[categoryIndex] = {
                                ...categoryList.value[categoryIndex],
                                ...payload,
                            }
                            category.value = {
                                first_name: '',
                                last_name: '',
                                id: null
                            }
                        }
                    })
            } else {

                fetch('http://localhost:8002/api/categories', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                })
                    .then(resp => resp.json())
                    .then(resp => {
                        if (!resp.error) {
                            categoryList.value.push({
                                ...payload,
                                id: resp.data.insertId
                            })
                            category.value = {
                                first_name: '',
                                last_name: '',
                            }
                        }
                    })
            }
        }

        const onCategoryDelete = (categoryId) => {
            fetch(`http://localhost:8002/api/categories/${categoryId}`, {
                method: 'DELETE'
            })
                .then(resp => resp.json())
                .then(() => {
                    categoryList.value = categoryList.value.filter(category => category.id !== categoryId)

                })
        }

        const fillCategoryForm = (tmpCategory) => {
            category.value = { ...tmpCategory };
        }

        return {
            isClicked,
            categoryList,
            onCategorySave,
            category,
            onCategoryDelete,
            fillCategoryForm,
            addId
        }
    }
})
</script>
<style>
form {
    display: flex;
    flex-direction: row;
    align-items: center;
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

.btn-category {
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

.category-table td,
.category-table th {
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

.category-list__category--active path {
    fill: lightgray;
}
</style>