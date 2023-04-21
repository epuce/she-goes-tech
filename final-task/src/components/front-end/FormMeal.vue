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
                <input type="text" placeholder="Add a name" v-model="meal.name" required>
            </label>

            <label class="label description" >
                Description
                <textarea placeholder="Add a description" v-model="meal.description" required></textarea>
            </label>

            <label class="label">
                Price, &euro;
   <input type="number" placeholder="Add a price" v-model="meal.price" required>
            </label>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="isChecked"
                >
                <label class="form-check-label" for="flexCheckDefault">
                    Allergens
                </label>
            </div>
          
            <label v-if="isChecked" class="label allergens" >
                Enter all allergens
                <textarea placeholder="Add allergens" v-model="meal.allergens"></textarea>
            </label>

            <div>
                <button class="btn btn-primary btn-save" @click="onMealSave()" type="button">Save</button>
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
    props:{
        mealList:{
            type: Array,
            required: true,
        }
    },
    setup(props, {emit}){


        var isChecked=ref(false); 

        var showPopup=ref(false);

        var userIsValid = true;

        const meal = ref({
            name: '',
            description: "",
            price: null,
            allergens: "",
            id: null,
            // category_id: null
        });

        // const mealList = ref([]);
        // fetch("http://localhost:8002/api/meals")
        //     .then(resp => resp.json())
        //     .then(resp => {
        //     mealList.value = resp.data;
        // });

        // var tmpMealList=ref(props.mealList)
        
        const onMealSave = () => {
           
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
                    // if (!resp.error) {
                        emit('add-to-list', {
                            data: {...payload,
                            id: resp.data.insertId
                            }
                        })
                        });
                        meal.value = {
                            name: "",
                            description: "",
                            allergens: "",
                            price: null
                        };
                    }
                // }
       
        return{
            isChecked,
            onMealSave,
            meal,
            showPopup,
            userIsValid,
            // tmpMealList

        }
    },

    components: {
}

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

ul{
    width: 250px;
}

form{
    display:flex;
    flex-direction:column;
}

label,input,textarea{
  display:flex;
  flex-direction:column;
}

.label{
    padding-top: 10px;
}

.form-check{
    margin-top: 10px;
}

input,textarea{
    width: 250px;
}

.btn-primary{
    margin-top: 16px;
}

.btn-save{
    margin-left: 0 !important;
}

.validation-error{
    border-color: red;
}

#offcanvasExample{
  width: 300px;
}

</style>