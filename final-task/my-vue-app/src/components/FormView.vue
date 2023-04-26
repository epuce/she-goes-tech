<template>



  <div>
    <div class="form-container">
      <form class="form-wrapper" action="">
        <Label>
          Username <br />
          <input v-model="userNameText" type="text" />
        </Label>
        <Label>
          E-mail <br />
          <input type="email" />
        </Label>

        <Label>
          City <br />
          <input type="text" /> <br />
          <select name="" id="">
            <option value="Vilnius">Vilnius</option>
            <option value="Riga">Riga</option>
            <option value="Tallin">Tallin</option>
          </select>
        </Label>

        <br />

        <Label class="checkbox-wrapper">
          <input type="checkbox" />
          <p>Check the box to confirm your choices</p>
        </Label>
        <button type="button" @click="isOpenPopup = true">Submit</button>
      </form>
    </div>

    <MyPopup
      :text="userNameText"
      v-if="isOpenPopup"
      @close-popup="
        isOpenPopup = false;
        onSubmit();
      " 
    />
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import MyPopup from "./MyPopup.vue";

export default defineComponent({
  components: { MyPopup },
  props: {},
  setup(props, { emit }) {
    var onSubmit = function () {
      emit("close-form");
    };
    var isOpenPopup = ref(false);
    var userNameText = ref('')
    return {
      onSubmit,
      isOpenPopup,
      userNameText
    };
  },
});
</script>
<style>
.form-container {
  display: flex;
  position: relative;
  top: 100px;
  height: 500px;
  width: 400px;
  background: #514b4c;
  justify-content: center;
  padding-top: 50px;
  border-radius: 40px;
  margin: 10px;
}

.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-items: left;
}
.checkbox-wrapper p {
  font-size: 12px;
  color: #f68084;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  text-align: left;
  margin: none;
  padding: none;
}

form input {
  border: none;
  border-radius: 12px;
  margin-bottom: 15px;
  height: 32px;
  width: 200px;
  padding: 5px;
  color: #747071;
  font-weight: 500;
}

form button {
  border: none;
  border-radius: 12px;
  margin-top: 20px;
  height: 32px;
  width: 200px;
  background: #f68084;
  font-weight: 700;
  color: antiquewhite;
}

form button:hover {
  color: #f1e1ee;
  text-shadow: 0 0 5px #f5ebf4;
  transform: translateY(-0.15em);
  transition: 0.2s;
}

label {
  text-align: start;
  color: white;
  margin-bottom: 5px;
}
</style>
