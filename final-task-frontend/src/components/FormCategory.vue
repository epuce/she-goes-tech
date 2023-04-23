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


        <TableCategory :category="cat" :categoryList="categoryList"/>

    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import TableCategory from './TableCategory.vue';
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
                                category: '',
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
                                category: '',
                            }
                        }
                    })
            }
        }

        return {
            isClicked,
            category,
            categoryList,
            onCategorySave
        }
    },

    components: {
        TableCategory
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
</style>