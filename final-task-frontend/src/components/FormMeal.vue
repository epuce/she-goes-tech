<template>
    <div>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add new meal</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <div>

                    <form>
                        <label class="label name">
                            Name
                            <input class="input-name" type="text" placeholder="Add a name" v-model="meal.name">
                            <p class="error name-error"></p>
                        </label>

                        <label class="label description">
                            Description
                            <textarea class="input-description" placeholder="Add a description" v-model="meal.description"
                                type="text"></textarea>
                            <p class="error description-error"></p>
                        </label>

                        <label class="label">
                            Price, &euro;
                            <input class="input-price" type="number" placeholder="Add a price" v-model="meal.price">
                            <p class="error price-error"></p>
                        </label>

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="isChecked">
                            <label class="form-check-label" for="flexCheckDefault">
                                Allergens
                            </label>
                        </div>

                        <label v-if="isChecked" class="label allergens">
                            Enter all allergens
                            <textarea placeholder="Add allergens" v-model="meal.allergens"></textarea>
                        </label>

                        <div>
                            <button type="button" class="btn btn-primary btn-save" @click="onMealSave()"> Save</button>
                        </div>
                    </form>

                   

                </div>
            </div>
        </div>


    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    props: {
        mealList: {
            type: Array,
            required: true,
        },
    },
    setup(props, { emit }) {
        var isChecked = ref(false);

        const onClose = () => {
            emit('closeSlideout')
            emit('showSlideout')
        };

        const meal = ref({
            name: "",
            description: "",
            price: null,
            allergens: "",
            id: null,
            // category_id: null
        });
        const validateForm = () => {
            var inputIsValid = meal.value.name.length > 3 && meal.value.name.trim() !== "" && meal.value.description.length > 3 && meal.value.description.trim() !== "" && meal.value.price && meal.value.price > 0;

            return inputIsValid;
        };
        const onMealSave = () => {
            if (validateForm()) {
                const payload = {
                    name: meal.value.name,
                    description: meal.value.description,
                    price: meal.value.price,
                    // category_id: meal.value.category_id,
                    allergens: meal.value.allergens,
                };
                // if (meal.value.id) {
                //     fetch(`http://localhost:8002/api/meals/${meal.value.id}`, {
                //         method: "PUT",
                //         headers: {
                //             "Content-Type": "application/json"
                //         },
                //         body: JSON.stringify(payload)
                //     })
                //         .then(resp => resp.json())
                //         .then(resp => {
                //         if (!resp.error) {
                //             const mealIndex = tmpMealList.value.findIndex((item) => item.id === meal.value.id);
                //             tmpMealList.value[mealIndex] = {
                //                 ...tmpMealList.value[mealIndex],
                //                 ...payload,
                //             };
                //             meal.value = {
                //                 name: "",
                //                 description: "",
                //                 id: null,
                //                 // category_id: null,
                //                 allergens: "",
                //                 price: null
                //             };
                //         }
                //     });
                // }
                // else {
                fetch("http://localhost:8002/api/meals", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                })
                    .then(resp => resp.json())

                    .then(resp => {
                        emit("open-popup")
                        if (!resp.error) {
                            emit("add-to-list", {
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
            if (meal.value.name.trim() === "" || meal.value.name.length <= 3) {
                document.querySelector(".name-error").innerHTML = "Please enter at least 4 characters";
                document.querySelector(".input-name").classList.add("validation-error");
            }
            else {
                document.querySelector(".name-error").innerHTML = "";
                document.querySelector(".input-name").classList.remove("validation-error");
            }
            if (meal.value.description.trim() === "" || meal.value.description.length <= 3) {
                document.querySelector(".description-error").innerHTML = "Please enter at least 4 characters";
                document.querySelector(".input-description").classList.add("validation-error");
            }
            else {
                document.querySelector(".description-error").innerHTML = "";
                document.querySelector(".input-description").classList.remove("validation-error");
            }
            if (!meal.value.price || meal.value.price <= 0) {
                document.querySelector(".price-error").innerHTML = "Please enter a price more than 0";
                document.querySelector(".input-price").classList.add("validation-error");
            }
            else {
                document.querySelector(".price-error").innerHTML = "";
                document.querySelector(".input-price").classList.remove("validation-error");
            }
        };
        // }
        // }
        //         document.querySelector(".btn-save").addEventListener("keypress", function (event) {
        //     if (event.keyCode === 13) {
        //       onMealSave();
        //     }
        //   });
        return {
            isChecked,
            onMealSave,
            meal,
            validateForm,
            onClose,
        };
    },
})
</script>
<style>
.dropdown-toggle {
    border: solid 1px darkgray !important;
    width: 250px;
    text-align: left;
    padding-left: 2px !important;
    color: dimgrey !important;
}

.dropdown-toggle::after {
    margin-left: 93px !important;
}

ul {
    width: 250px;
}

form {
    display: flex;
    flex-direction: column;
}

label,
input,
textarea {
    display: flex;
    flex-direction: column;
}

.label {
    padding-top: 10px;
}

.form-check {
    margin-top: 10px;
}

input,
textarea {
    width: 250px;
}

.btn-primary {
    margin-top: 16px;
}

.btn-save {
    margin-left: 0 !important;
}

.validation-error {
    border: 1px solid red;
}

#offcanvasExample {
    width: 300px;
}

.error {
    color: red;
    font-size: 14px;
    margin-bottom: 0px;
}

.close-slideout {
    visibility: hidden;
}

.input-description{
    height: 150px;
    resize: none;
}
</style>